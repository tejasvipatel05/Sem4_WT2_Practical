const fs = require("fs")
// ------------------------LAB5  p1------------------------

let stu = {name:"Tejasvi", Rollno:561, City:"Rajkot"};
fs.writeFile("abc.txt", JSON.stringify(stu), (err)=>{
    if(err) {
        console.log(err);
    }
    else {
        console.log("File written successfully")
    }
});

// ------------------------LAB5  p2------------------------
// fs.copyFile("abc.txt", "xyz.txt",(err)=>{
//         console.log('abc.txt was copied to xyz.txt');
//     });

// ------------------------LAB5  p3------------------------
// fs.readFile("xyz.txt","utf-8",(err,data)=>{
//     word = data.match(/\b\w+\b/g) || [].length;
//     console.log(`Total number of word:${word.length}`);
//     console.log(word);
// })

// ------------------------LAB5  p4------------------------
// fs.readFile("xyz.txt","utf-8",(err,data)=>{
//         word = data.match(/[aeiou]/gi);
//         console.log(`Total number of vowels:${word.length}`);
//         console.log(word);
// })

// ------------------------LAB5  p5------------------------
// fs.readFile("xyz.txt", "utf-8", (err,data)=>{
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(data)
//     }
// });
// ------------------------LAB5  p6------------------------
// Read the xyz.txt file
// const fileContent = fs.readFileSync('./xyz.txt', 'utf-8');

// Parse the file content into an array of student objects
// const students = fileContent
//     .trim() // Remove extra whitespace
//     .split('\n') // Split by newline
//     .map(line => {
//             return JSON.parse(line); // Parse each line
//     })
//     .filter(student => student !== null); // Remove invalid entries

// Filter students with SPI less than 5
// let lowSPIStudents = [];
// for (let i = 0; i < students.length; i++) {
//     if (students[i].StudentSPI < 5) {
//         lowSPIStudents.push(students[i]);
//     }
// }

// Output the filtered students
// console.log("Students with SPI less than 5:");
// for (let i = 0; i < lowSPIStudents.length; i++) {
//     console.log(lowSPIStudents[i]);
// }