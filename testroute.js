var express=require('express');
var router = express.Router();
var dataset=require('./recordset.js');  

router.get('/todo',function(req,res){ 	   
	     res.render('restfulTP',{itemlist:dataset});  
});

module.exports=router;