const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/scheck', (req , res , next)=>{
    const sql = "SELECT * FROM tbscheck";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//create data
router.post('/scheck/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.scheck_name
    ]
    let sql = "INSERT INTO tbscheck(scheck_name) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) throw err;
        console.log('successfully inserted');
        res.redirect('/api/scheck');
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/scheck/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {scheck_name} = req.body;
    let sql = `UPDATE tbscheck SET scheck_name='${scheck_name}' WHERE scheck_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        res.redirect('/api/scheck');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/scheck/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbscheck WHERE scheck_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.redirect('/api/scheck');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;