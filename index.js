const express =require("express");
const mysql=require("mysql");
const bodyParser=require("body-parser");


const routers=require("./router/router.js")

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/",routers)

const port=process.env.PORT ||5000;
app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})