let fruit = ["mango", "apple", "banana", "strawberry", "orange", "cherry", "kiwi"]

const [first,second,,third,...rest] = fruit;
console.log(second,third,first,...rest)


let info = {
    fname: "Jungkook",
    lname: "jeon",
    age: 27
};

let {fname, age, profession = "singer" } = info;
console.log(fname, profession, age)