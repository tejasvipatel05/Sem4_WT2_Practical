const mongoose = require("mongoose");

const student = mongoose.Schema({
    StudentName : String,
    StudentMobile : Number,
    StudentEmail : String,
    StudentPassword: String
})


module.export = mongoose.model("Student", student);