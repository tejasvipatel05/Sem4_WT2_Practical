// ------------------------LAB7 p1------------------------
// const express = require('express');
// const { log } = require("console");

// const app = express();


// app.get('/',(req, res) => {
//     res.send("Hello World")
// })


// app.listen(1005, () => {
//     console.log("Server Started at port 1005");
// })

// ------------------------LAB7 p2------------------------
// const express = require('express');
// const { log } = require("console");

// const app = express();

// app.get('/',(req, res) => {
//     res.send("Hello World")
// })

// app.get('/home',(req, res) => {
//     res.send("Home Page....")
// })

// app.get('/about',(req, res) => {
//     res.send("About Page....")
// })

// app.get('/contact',(req, res) => {
//     res.send("Contact Page....")
// })

// app.get('/department',(req, res) => {
//     res.send("Department Page....")
// })

// app.get('/attendance',(req, res) => {
//     res.send("Attendance Page....")
// })


// app.listen(1005, () => {
//     console.log("Server Started at port 1005");
// })

// ------------------------LAB7 p3------------------------
const fs = require('fs')
const express = require('express');
const { log } = require("console");

const app = express();

app.get('/',(req, res) => {
    res.send("Hello World")
})

app.get('/home',(req, res) => {
    const data = fs.readFileSync("home.txt","utf-8");
    res.send(data);
})

app.get('/about',(req, res) => {
    const data = fs.readFileSync("about.txt","utf-8");
    res.send(data);
})

app.get('/contact',(req, res) => {
    const data = fs.readFileSync("contact.txt","utf-8");
    res.send(data);
})

app.get('/department',(req, res) => {
    const data = fs.readFileSync("department.txt","utf-8");
    res.send(data);
})

app.get('/attendance',(req, res) => {
    const data = fs.readFileSync("attendance.txt","utf-8");
    res.send(data);
})


app.listen(1005, () => {
    console.log("Server Started at port 1005");
})