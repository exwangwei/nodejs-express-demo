const mysql = require('mysql');
const sqlConfig = require('./sqlConfig.js');

var myModal = {
    login:function(telNum,pwd,callback){
        let sql = "select * from register_info where tel_num = ? and pwd = ? "
        sqlConfig.connect(sql,[telNum,pwd],callback);
    }
}

module.exports = myModal