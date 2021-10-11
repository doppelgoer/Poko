var express = require('express');
var router = express.Router();
// var mysql = require('mysql');


// const connection = mysql.createConnection({
//     host:'',
//     port:,
//     user:'',
//     password:'',
//     database:''
// });
// connection.connect();

router.get('/api',function(req,res){

    res.send({greeting:'Hello'});
});


module.exports = router;