const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/cate', (req , res , next)=>{
    const sql = "SELECT * FROM tbcategory";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//raad one data
router.get('/cate/read/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `SELECT * FROM tbcategory WHERE cate_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        // res.redirect('/api/cate');
        res.status(200).json({result});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//create data
router.post('/cate/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.cate_name
    ]
    let sql = "INSERT INTO tbcategory(cate_name) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) throw err;
        console.log('successfully inserted');
        res.status(200).json({"Message":"Success"});
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/cate/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {cate_name} = req.body;
    let sql = `UPDATE tbcategory SET cate_name='${cate_name}' WHERE cate_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/cate/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbcategory WHERE cate_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;