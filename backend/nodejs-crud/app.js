const express = require('express');
// const mysql = require('mysql');
const conn = require('./config/db.js');
const statusRouter = require('./routes/status');
const systemRouter = require('./routes/system');
const schoolRouter = require('./routes/school');
const classRouter = require('./routes/class');
const cateRouter = require('./routes/category');
const prefixRouter = require('./routes/prefix');
const subjectRouter = require('./routes/subject');
const customerRouter = require('./routes/customer');
const courseRouter = require('./routes/course');
const registerRouter = require('./routes/register');
const scheckRouter = require('./routes/scheck');
const checkRouter = require('./routes/check');
const app = express();


app.use(express.json()); //ทำให้ข้อมูลที่รับมาจากผู้ใช้อยู่ในรูปแบบ Json
app.use(express.urlencoded({extended: false})); //เข้ารหัสข้อมูล แบบขยาย เป็น false
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

//ตรวจสอบการเชื่อมต่อกับฐานข้อมูล
conn.connect((err)=>{
    if(err) throw err;
    console.log("DB is connected successfully : ", conn.threadId);
});


app.use('/api' , 
statusRouter, 
systemRouter , 
schoolRouter , 
classRouter ,
cateRouter ,
prefixRouter,
subjectRouter,
customerRouter,
courseRouter,
registerRouter,
scheckRouter,
checkRouter
);

//ทำงานบน port 5000
app.listen(5000 , ()=> console.log("server is running on port : " +5000))