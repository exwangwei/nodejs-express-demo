const mysql = require('mysql');

let db = {
    connect(sql,arr,callback){
        let dbConnect = mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'root',
            database:'furniture',
            port:3306
        });

        dbConnect.connect();

        dbConnect.query(sql,arr,callback);

        dbConnect.end();
    }
}

module.exports = db;



