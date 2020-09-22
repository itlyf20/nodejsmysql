const express=require("express")
const router=express.Router();
const db=require("../db/db.js")

//查询所有
router.get("/selectall",(req,res)=>{
	let sql="select * from student"
	db.query(sql,(err,data)=>{
		if(err){
			console.log(err.message);
			return;
		}else{
			res.send({
				code:200,
				msg:"success",
				result:data
			})
		}
	})
})
//按条件查询
router.post("/selectBytiaojian",(req,res)=>{
	let sql="select * from student where id=?"
	let id=req.body.id
	db.query(sql,id,(err,data)=>{
		if(err){
			console.log(err.message)
			return;
		}else{
			res.send({
				code:200,
				msg:"success",
				result:data
			})
		}
	})
})
//增加数据
router.post("/insertstu",(req,res)=>{
	let sql="insert into student(name,age,sex) values(?,?,?)";
	let sj=[req.body.name,req.body.age,req.body.sex]
	db.query(sql,sj,(err,data)=>{
		if(err){
			console.log(err.message)
			return;
		}else{
			res.send({
				code:200,
				msg:"insert success",
			})
		}
	})
})
//删除数据
router.post("/deletestu",(req,res)=>{
	let sql="delete from student where id=?";
	let id=req.body.id
	db.query(sql,id,(err,data)=>{
		if(err){
			console.log(err.message)
			return;
		}else{
			res.send({
				code:200,
				msg:"delete success",
			})
		}
	})
})
//修改数据
router.post("/updatestu",(req,res)=>{
	let sql="update student set name=?,age=?,sex=? where id=?";
	let sj=[req.body.name,req.body.age,req.body.sex,req.body.id]
	db.query(sql,sj,(err,data)=>{
		if(err){
			console.log(err.message)
			return;
		}else{
			res.send({
				code:200,
				msg:"update success",
			})
		}
	})
})

module.exports=router