const express = require('express');
const conn = require('../config/db.js');
const router = express.Router();

//read data
router.get('/cus', (req , res , next)=>{
    const sql = "SELECT * FROM tbcustomer";
    // res.send("<h1>Hello World</h1>");
    
    conn.query(sql , (err , result)=>{
        if(err) throw err;
        // res.status(200).json({"Message":"Success"});
        res.status(200).json({result});
    });
});

//read onec data
router.get('/cus/view/:id', (req, res, next)=>{
    let sql = `SELECT * FROM tbcustomer_view WHERE cus_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        // console.log('successfully deleted');
        // res.redirect('/api/cus');
        res.status(200).json({result});
        
    });
    
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//read onec data
router.get('/cus/view-edit/:id', (req, res, next)=>{
    let sql = `SELECT * FROM tbcustomer WHERE cus_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        // console.log('successfully deleted');
        // res.redirect('/api/cus');
        res.status(200).json({result});
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//create data
router.post('/cus/add', (req , res , next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น
    const values = [
        req.body.prefix_id,
        req.body.cus_fname,
        req.body.cus_lname,
        req.body.cus_nname,
        req.body.cass_id,
        req.body.school_id,
        req.body.cus_tel,
        req.body.username,
        req.body.userpass
    ]
    let sql = "INSERT INTO tbcustomer(prefix_id,cus_fname,cus_lname,cus_nname,cass_id,school_id,cus_tel,username,userpass) VALUES(?);";
    conn.query(sql , [values] ,function(err,result) {
        // if(err){} throw err;
        res.status(200).json({"Message":"Success"});
        console.log('successfully inserted');
        // res.redirect('/api/cus');
        
    });
    // res.send("<h1>Hello World</h1>");
    // res.status(200).json({"Message":"Success"});
});

//update data
router.put('/cus/update/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    const {prefix_id,cus_fname,cus_lname,cus_nname,cass_id,school_id,cus_tel} = req.body;
    let sql = `UPDATE tbcustomer SET prefix_id='${prefix_id}' , 
                                     cus_fname='${cus_fname}' ,
                                     cus_lname='${cus_lname}' ,
                                     cus_nname='${cus_nname}' ,
                                     cass_id='${cass_id}' ,
                                     school_id='${school_id}' ,
                                     cus_tel='${cus_tel}'
                                     WHERE cus_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully updated');
        // res.redirect('/api/cus');
        res.status(200).json({"Message":"Success"});
    });
    // res.send("<h1>Hello World</h1>");
    
});

//delete data
router.delete('/cus/delete/:id', (req, res, next)=>{
    //ส่งข้อมูลให้ปลอดภัยขึ้น

    let sql = `DELETE FROM tbcustomer WHERE cus_id = ? ;`;   
    conn.query(sql, [req.params.id], function(err, result){
        if(err) throw err;
        console.log('successfully deleted');
        res.status(200).json({"Message":"Success"});
        // res.redirect('/api/cus');
    });
    // res.send("<h1>Hello World</h1>");
    
});

module.exports = router;