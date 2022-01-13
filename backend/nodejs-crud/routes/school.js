const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/school', (req , res , next)=>{
    const sql = "SELECT * FROM tbschool";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//read one data
router.get('/school/read/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `SELECT * FROM tbschool WHERE school_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({result});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//create data
router.post('/school/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.school_name
    ]
    let sql = "INSERT INTO tbschool(school_name) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) throw err;
        console.log('successfully inserted');
        res.status(200).json({"Message":"Success"});
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/school/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {school_name} = req.body;
    let sql = `UPDATE tbschool SET school_name='${school_name}' WHERE school_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/school/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbschool WHERE school_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;