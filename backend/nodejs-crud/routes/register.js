const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();
//read data
router.get('/register', (req , res , next)=>{
    const sql = "SELECT * FROM `tbregister_view1` WHERE 1";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json(result);
    });
});

//read data inner join
router.get('/register/view', (req , res , next)=>{
    const sql = "SELECT * FROM `tbregister_view1` WHERE 1";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//create data
router.post('/register/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.cus_id,
        req.body.course_id,
        req.body.reg_end,
        req.body.reg_start
    ]
    let sql = "INSERT INTO tbregister(`cus_id`, `course_id`,`reg_end`, `reg_start`) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) res.status(400);
        if(!err){
            console.log('successfully inserted');
            res.status(200).json({"Message":"Success"});
        }
        
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//read onec data
router.get('/register/view/:id', (req, res, next)=>{
    let sql = `SELECT * FROM tbregister_view WHERE reg_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        // console.log('successfully deleted');
        // res.redirect('/api/cus');
        res.status(200).json({result});
        
    });
    
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//read onec data (User)
router.get('/register/read/:id', (req, res, next)=>{
    let sql = `SELECT * FROM tbregister_view1 WHERE cus_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        // console.log('successfully deleted');
        // res.redirect('/api/cus');
        res.status(200).json({result});
        
    });
    
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/register/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {cus_id,course_id,status_id,reg_end,reg_start} = req.body;
    let sql = `UPDATE tbregister SET cus_id='${cus_id}' , 
                                     course_id='${course_id}' ,
                                     status_id='${status_id}' ,
                                     reg_end='${reg_end}' ,
                                     reg_start='${reg_start}'
                                     WHERE reg_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        // if(err) throw err;
        console.log('successfully updated');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/register/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbregister WHERE reg_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.redirect('/api/register');
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;