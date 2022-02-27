import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.end("Hello world");
})

app.listen(PORT,()=>console.log("SERVER IS UP"));