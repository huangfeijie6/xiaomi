const express=require('express')
const pool=require('../pool.js')
const router=express.Router();

router.post('/v1/reg',(req,res)=>{
	var obj=req.body;
	var sql='insert into user_name set ?';
	pool.query(sql,[obj],(err,result)=>{
		if(err) throw err;
		res.send(result)
	})
})

router.post('/v1/login',(req,res)=>{
	var obj=req.body;
	sql='select* from user_name where uname=?&&upwd=?'
	pool.query(sql,[obj.uname,obj.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1')
		}else{
			res.send('0')
		}
	})
})


module.exports=router;