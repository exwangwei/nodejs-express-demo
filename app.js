//引用框架express
const express = require('express');
//引入favicon图标
const favicon = require('serve-favicon');
//引入日志
const logger = require('morgan');
//
const bodyParser = require('body-parser');
//
const cookiePaeser = require('cookie-parser');
//引入路由
const expressRoute = require('./routers/routers.js');
//引入数据库
const mysql = require('mysql');
//执行函数,返回一个express的服务器对象
const app = express();



//设置日志级别 注意日志要在静态资源上边加载使用
app.use(logger('dev'));
//设置post请求
app.use(bodyParser.json()); //将其他请求进行转换
app.use(bodyParser.urlencoded({extended:false}));
app.use(cookiePaeser());

//使用mysql
// app.use(mysql);

app.use(expressRoute);
//加载静态资源路径
app.use(express.static(__dirname + '/public'));
//加载icon图标
app.use(favicon(__dirname + '/public/favicon.ico'));
//接受请求
// app.get('/login',(req,res)=>{
//     console.log('请求来了');
//     console.log(req)
//     console.log(req.query);
//     let userName = req.query.userName;
//     let userPwd = req.query.userPwd;
//
//     if(userName == 'admin' && userPwd == '123456') {
//
//     }
// })




app.listen(8000,()=>{console.log('服务启动')});