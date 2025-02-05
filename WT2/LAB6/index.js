// ------------------------LAB6 p1------------------------
const http = require('http');

const server = http.createServer((req,res) => {
    console.log(req.url);
    res.write("Hello World");
    res.end();
});

server.listen(1005,() => {
    console.log("Server started at port 1005");
})


// ------------------------LAB6 p2------------------------
// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == '/') {
//         res.write("Hello World");
//     }
//     else if(req.url == '/home') {
//         res.write("Home Page...");
//     }
//     else if(req.url == '/about') {
//         res.write("About Page...");
//     }
//     else if(req.url == '/contact') {
//         res.write("Contact Page...");
//     }
//     else if(req.url == '/deparment') {
//         res.write("Department Page...");
//     }
//     else if(req.url == '/attendance') {
//         res.write("Attendance Page...");
//     }
//     res.end();
// });

// server.listen(1005,() => {
//     console.log("Server started at port 1005");
// })


// ------------------------LAB6 p3------------------------
// const http = require('http');

// const server = http.createServer((req,res) => {
//     console.log(req.url);
//     if(req.url == '/') {
//         res.statusCode = 465;
//         res.write("<h1>Hello World</h1>");
//     }
//     else if(req.url == '/home') {
//         res.statusCode = 900;
//         res.setHeader("Content-Type","text/html");
//         res.write("<h1>Helloooooo</h1>");
//         // const data = fs.readFileSync("home.txt","utf-8");
//         // res.write(data);
//     }
//     else if(req.url == '/about') {
//         res.statusCode = 100;
//         const data = fs.readFileSync("about.txt","utf-8");
//         res.write(data);
//     }
//     else if(req.url == '/contact') {
//         const data = fs.readFileSync("contact.txt","utf-8");
//         res.write(data);
//     }
//     else if(req.url == '/deparment') {
//         const data = fs.readFileSync("department.txt","utf-8");
//         res.write(data);
//     }
//     else if(req.url == '/attendance') {
//         const data = fs.readFileSync("attendance.txt","utf-8");
//         res.write(data);
//     }
//     res.end();
// });

// server.listen(1005,() => {
//     console.log("Server started at port 1005");
// })