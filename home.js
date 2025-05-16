const db = require('../db'); 




//============SELECT===================

const Selecthome = (req, res) => {
  const sql = "SELECT * FROM home";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({err:'fail',err})
    }else{
      res.status(201).json({message:'select successfully!!!',result})
    }
  });
}
   

//=============INSERT=================

const Inserthome = (req, res) => {
  const { name, email, password } = req.body;
  const sql='INSERT INTO home(name, email, password) VALUE(?, ?, ?)';
  db.query(sql,[name, email, password], (err,result)=>{
    if(err){
      res.status(500).json({error:'fail',err})
    }else{
      res.status(201).json({message:'insert successfully!!!!',result});
    }
  });
}
  


//===========DELETE====================


const deletehome = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM home WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({err:'error delete',err});
      }else{
        res.status(200).json({message:'delete successfully',result})
      }
    });
  }




  //==========UPDATE==================


  const updatehome =(req,res)=>{
    const{name, email, password}=req.body;
    const {id}=req.params;
    const sql='UPDATE supplier SET name=?, email=?, address=? WHERE id=?';
    db.query(sql,[name, email, password, id],(err,result)=>{
      if(err){
        res.status(500).json({err:'fail',err})
      }else{
        res.status(201).json({message:'update successfully!!!',result})
      }
    });
  }

module.exports = { Selecthome, Inserthome, deletehome, updatehome };
