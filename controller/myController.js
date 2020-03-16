const myModals = require('./../modal/myModal.js');

const controllers = {
    login(req,res){
       let telNum = req.query.userName;
       let pwd = req.query.userPwd;
       console.log(telNum,pwd);

        myModals.login(telNum,pwd,function(err,data){
            if(!err){
                if(data.length>0){
                    console.log('登录成功');
                    res.send(data);
                }else{
                    console.log( 'data',data)
                }
            }else{
                console.log('服务器出错');
            }
        })
    },
}

module.exports = controllers;