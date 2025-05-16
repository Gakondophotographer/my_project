const db = require('../db'); 




//============SELECT===================

const Selectpublisher = (req, res) => {
  const sql = "SELECT * FROM publisher";
  db.query(sql, (err, result) => {
    if (err) {
      res.status(500).json({err:'fail',err})
    }else{
      res.status(201).json({message:'select successfully!!!',result})
    }
  });
}
   

//=============INSERT=================

const Insertpublisher = (req, res) => {
  const { name, email, address } = req.body;
  const sql='INSERT INTO publisher(name, email, address) VALUE(?, ?, ?)';
  db.query(sql,[name, email, address], (err,result)=>{
    if(err){
      res.status(500).json({error:'fail',err})
    }else{
      res.status(201).json({message:'insert successfully!!!!',result});
    }
  });
}
  


//===========DELETE====================


const deletepublisher = (req, res) => {
    const {id} = req.params;
    const sql = 'DELETE FROM publisher WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        res.status(500).json({err:'error delete',err});
      }else{
        res.status(200).json({message:'delete successfully',result})
      }
    });
  }




  //==========UPDATE==================


  const updatepublisher=(req,res)=>{
    const{name, email, address}=req.body;
    const {id}=req.params;
    const sql='UPDATE publisher SET name=?, email=?, address=? WHERE id=?';
    db.query(sql,[name, email, address, id],(err,result)=>{
      if(err){
        res.status(500).json({err:'fail',err})
      }else{
        res.status(201).json({message:'update successfully!!!',result})
      }
    });
  }

module.exports = { Selectpublisher, Insertpublisher, deletepublisher, updatepublisher };
