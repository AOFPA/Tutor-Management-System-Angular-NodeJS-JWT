const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/check', (req , res , next)=>{
    const sql = "SELECT * FROM tbcheck";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//read view
router.get('/check/view', (req , res , next)=>{ 
    const sql = "SELECT * FROM check_view";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//create data
router.post('/check/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.course_id,
        req.body.check_date,
        req.body.scheck_id,
        req.body.cus_id,
    ]
    let sql = "INSERT INTO tbcheck(course_id,check_date,scheck_id,cus_id) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) throw err;
        console.log('successfully inserted');
        res.redirect('/api/check');
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/check/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {course_id,check_date,scheck_id,cus_id} = req.body;
    let sql = `UPDATE tbcheck SET course_id='${course_id}',
                                check_date='${check_date}',    
                                scheck_id='${scheck_id}',    
                                cus_id='${cus_id}'    
                                WHERE check_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        res.redirect('/api/check');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/check/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbcheck WHERE check_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.redirect('/api/check');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;