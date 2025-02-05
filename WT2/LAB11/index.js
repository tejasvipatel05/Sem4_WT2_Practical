const mongoose = require("mongoose");
const Student = require("./model/Student")
const bodyparser = require("body-parser")
const express = require("express")

const atlasUrl = "mongodb+srv://24010101686:TEJASVI__patel%401010@cluster0.4voxj.mongodb.net/"

mongoose.connect(atlasUrl).then(()=>{
    console.log("Connected to Mongo DB");

    const app = express();
k
    app.use(bodyparser.json());

    //getAll
    app.get("/students", async(req,res)=>{
        const data = await students.find();
        res.send(data);
    })

    //getById
    app.get("/students/:id", async(req, res)=>{
        const data = await Student.findOne({_id: req.params.id})
        res.send(data);
    })

    //post
    app.post("/students",async(req,res)=>{
        const obj = new Student({
            StudentName : req.params.StudentName,
            StudentMobile : req.params.StudentMobile,
            StudentEmail : req.params.Studentemail,
            StudentPassword: req.params.StudentPassword
        })

        const data = await obj.save();
        res.send(data);
    })

    //delete


    app.listen(8000,()=>{
        console.log("Server Started @ 1005")
    })
})

