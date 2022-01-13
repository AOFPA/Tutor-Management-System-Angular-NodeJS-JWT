const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/subject', (req , res , next)=>{
    const sql = "SELECT * FROM tbsubject";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});



//create data
router.post('/subject/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.subject_name
    ]
    let sql = "INSERT INTO tbsubject(subject_name) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err){
            throw err;
            res.redirect('/api/subject');
        } 
        console.log('successfully inserted');
        res.status(200).json({"Message":"Success"});
        
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/subject/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {subject_name} = req.body;
    let sql = `UPDATE tbsubject SET subject_name='${subject_name}' WHERE subject_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        res.status(200).json({"Message":"Success"});
        // res.redirect('/api/subject');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/subject/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbsubject WHERE subject_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//read one
router.get('/subject/read/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `SELECT * FROM tbsubject WHERE subject_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({result});
        // res.redirect('/api/subject');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;

