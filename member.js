const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');
require("dotenv").config();


const registermember = async (req, res) => {
    const { name, email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO member (name, email, password) VALUES (?, ?, ?)';
    db.query(sql, [name, email, hashpass], (err, result) => {
        if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
            return res.status(409).json({ error: "Email already exists" });
        }
        return res.status(500).json({ error: "Register error", err });
    }
    res.status(201).send({ message: "Register success", result });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    const sql = 'SELECT * FROM member WHERE email = ?';
    db.query(sql, [email], async (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Database error', error: err });
        }

        if (result.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const member = result[0];
        const isMatch = await bcrypt.compare(password, member.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: member.id }, process.env.JWT_KEY, { expiresIn: "1h" });

        res.status(200).json({
            message: "Login successful",
            name: member.name,
            token: token
        });
    });
};
module.exports = { registermember, login };
