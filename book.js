const db = require('../db'); 




//============SELECT===================

const Selectbook = (req, res) => {
  const sql = "SELECT * FROM books";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({err:'fail',err})
    }else{
      res.status(201).json({message:'select successfully!!!',result})
    }
  });
}
   

//=============INSERT=================

const Insertbook = (req, res) => {
  const { name, about, year } = req.body;
  const sql='INSERT INTO books(name, about, year) VALUE(?, ?, ?)';
  db.query(sql,[name, about, year], (err,result)=>{
    if(err){
      res.status(500).json({error:'fail',err})
    }else{
      res.status(201).json({message:'insert successfully!!!!',result});
    }
  });
}
  


//===========DELETE====================


const deletebook = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM books WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({err:'error delete',err});
      }else{
        res.status(200).json({message:'delete successfully',result})
      }
    });
  }




  //==========UPDATE==================


  const updatebook=(req,res)=>{
    const{name, about, year}=req.body;
    const {id}=req.params;
    const sql='UPDATE books SET name=?, about=?, year=? WHERE id=?';
    db.query(sql,[name, about, year, id],(err,result)=>{
      if(err){
        res.status(500).json({err:'fail',err})
      }else{
        res.status(201).json({message:'update successfully!!!',result})
      }
    });
  }

module.exports = { Selectbook, Insertbook, deletebook, updatebook };
