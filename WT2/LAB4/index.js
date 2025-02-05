// ------------------------child process module------------------------

const cp = require("child_process")
const { stdout, stderr } = require("process")

cp.exec("echo Hellooooooiiiiii",(err,stdout,stderr)=>{
    if(err){
        console.log(stderr);
    }
    else{
        console.log(stdout);
    }
})


// ------------------------Event Emitter module------------------------

// const em = require("events");

// class Emmit extends em {}

// const tick = new Emmit();

// tick.on("NetworkIssue", ()=>{
//     console.log("Search failed!!!");
// })

// tick.emit("NetworkIssue");
// count = 1;
// intver = setInterval(()=>{
//     if(count > 5){
//         clearInterval(intver);
//         console.log('Interval stopped after 5 iteration.');
//     }
//     else{
//         tick.emit("NetworkIssue");
//         count++;
//     }
// },1000)

// setTimeout(() => {
//     clearInterval(intver);
//     console.log('Interval stopped after 5 seconds.');
// }, 6000);