// ------------------------fs module------------------------

const fs = require("fs");
fs.readFile("demo.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("Outside of function...")

// const data = fs.readFileSync("demo.txt","utf-8");
// console.log(data);

// fs.writeFile("demo.txt", "HIIIIIIII", (err)=>{
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("File written successfully")
//     }
// });

// fs.writeFileSync("demo.txt", "Heyaaaaaaa");

// fs.appendFile("demo.txt", "How are you??", (err)=>{
//     console.log("File appended successfully...")
// })

// fs.appendFileSync("demo.txt", "I'm Fine");

// fs.copyFile("demo.txt", "copieddemo.txt",(err)=>{
//     console.log('demo.txt was copied to copieddemo.txt');
// });

// fs.copyFileSync("demo.txt", "copiedsyncdemo.txt")
