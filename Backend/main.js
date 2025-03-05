const express=require('express');
const mongoose=require('mongoose')
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config()
const app=express();
app.use(express.json());

const PORT = process.env.PORT || 5001;
console.log(process.env.MONGO_URI)
mongoose.connect(process.env.MONGO_URI,{})
    .then(()=>console.log("MongoDB connected"))
    .catch((err)=>console.error("MongoDB Connection Error: ",err));

    app.get("/",(req,res)=>{
        res.send("Agri app");
    });

    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
