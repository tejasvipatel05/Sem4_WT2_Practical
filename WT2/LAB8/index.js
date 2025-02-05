const express = require('express')

const app = express()

app.use("/student", (req, res, next)=> {
    console.log("Middleware called..")
    next();
},
 (req, res)=> {
    res.send("from Lab 8")
}
)

app.listen(1005, ()=> {
    console.log("Server started at port 1005");
})




// const express = require('express')

// const app = express()

// app.use("/",express.static("public"));

// app.listen(1005, ()=> {
//     console.log("Server started at port 1005");
// })