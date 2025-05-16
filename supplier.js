const db = require('../db'); 




//============SELECT===================

const Selectsupplier = (req, res) => {
  const sql = "SELECT * FROM supplier";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({err:'fail',err})
    }else{
      res.status(201).json({message:'select successfully!!!',result})
    }
  });
}
   

//=============INSERT=================

const Insertsupplier = (req, res) => {
  const { name, email, address } = req.body;
  const sql='INSERT INTO supplier(name, email, address) VALUE(?, ?, ?)';
  db.query(sql,[name, email, address], (err,result)=>{
    if(err){
      res.status(500).json({error:'fail',err})
    }else{
      res.status(201).json({message:'insert successfully!!!!',result});
    }
  });
}
  


//===========DELETE====================


const deletesupplier = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM supplier WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({err:'error delete',err});
      }else{
        res.status(200).json({message:'delete successfully',result})
      }
    });
  }




  //==========UPDATE==================


  const updatesupplier=(req,res)=>{
    const{name, email, address}=req.body;
    const {id}=req.params;
    const sql='UPDATE supplier SET name=?, email=?, address=? WHERE id=?';
    db.query(sql,[name, email, address, id],(err,result)=>{
      if(err){
        res.status(500).json({err:'fail',err})
      }else{
        res.status(201).json({message:'update successfully!!!',result})
      }
    });
  }

module.exports = { Selectsupplier, Insertsupplier, deletesupplier, updatesupplier };
