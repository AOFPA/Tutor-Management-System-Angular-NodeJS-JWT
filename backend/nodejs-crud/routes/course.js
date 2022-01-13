const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
// router.get('/course', (req , res , next)=>{
//     const sql = "SELECT * FROM tbcourse";
//     // res.send("<h1>Hello World</h1>");
    
//     conn.query(sql , (err , result)=>{
//         if(err) throw err;
//         // res.status(200).json({"Message":"Success"});
//         res.status(200).json({result});
//     });
// });


//read view
router.get('/course', (req , res , next)=>{
    const sql = "SELECT * FROM tbcourse_view";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//read view for select
router.get('/course/select', (req , res , next)=>{
    const sql = "SELECT * FROM course_select";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//read one
router.get('/course/view/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `SELECT * FROM course_select WHERE course_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({result});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//read for edit one
router.get('/course/view-edit/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `SELECT * FROM tbcourse WHERE course_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({result});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});



//create data
router.post('/course/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.cate_id,
        req.body.subject_id,
        req.body.system_id,
        req.body.course_price,
        req.body.course_bookprice,
        req.body.course_total,
        req.body.class_id
    ]
    let sql = "INSERT INTO tbcourse(`cate_id`, `subject_id`, `system_id`, `course_price`, `course_bookprice`, `course_total`, `class_id`) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        if(err) throw err;
        console.log('successfully inserted');
        res.status(200).json({"Message":"Success"});
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/course/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {cate_id,subject_id,system_id,course_price,course_bookprice,course_total,class_id} = req.body;
    let sql = `UPDATE tbcourse SET cate_id='${cate_id}' , 
                                     subject_id='${subject_id}' ,
                                     system_id='${system_id}' ,
                                     course_price='${course_price}' ,
                                     course_bookprice='${course_bookprice}' ,
                                     course_total='${course_total}' ,
                                     class_id='${class_id}'
                                     WHERE course_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        // res.redirect('/api/course');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//delete data
router.delete('/course/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbcourse WHERE course_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

module.exports = router;