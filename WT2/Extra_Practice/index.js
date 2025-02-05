// Program 1
// print sum of series 1 + 4 + 9 + 16 + ... + n
// const n = 2;
// let sum = 0;
// for (let i=1; i<=n; i++) {
//     sum = sum + (i**2);
// }

// console.log("Sum: ",sum)


// Program 2 
// print first 50 numbers in series 1, 4, 7, 10... 
// var sum = 1;
// for (let i=1; i<=50; i++, sum+=3) {
//     console.log(i);
// }


// Program 3
// print sum of series 1 - 2 + 3 - 4 + 5 - 6 + 7 ... n
// var sum = 0;
// var n = 7
// for (let i=1; i<=n; i++) {
//     if(i%2==0) {
//         sum = sum - i;
//     }
//     if(i%2!=0) {
//         sum = sum + i;
//     }
// }
// console.log("Sum : ",sum);


// Program 4
// print factorial of given number
// var fact = 1, n = 5;
// for(let i=1; i<=n; i++){
//     fact *= i;
// }
// console.log("Fcatorial: ",fact);


// Program 5
// print factors of given number
// var n = 5;
// for(let i=1; i<=n; i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }


// Program 6
// print whether given number is perfect or not
// let n = 28, sum = 0;
// for (let i = 1; i < n; i++) {
//     if (n % i == 0) {
//         console.log(i);
//         sum += i;
//     }
// }
// console.log("Sum: ",sum);
// if(sum == n) {
//     console.log("Number is perfect");
// }
// else {
//     console.log("Number is not perfect");
// }


// Program 7
// print whether given number is prime or not using flag
let n = 5, flag=true;
for(let i = 1; i < n; i++) {
    if(i%n==0){
        flag=false;
    }
}
if(flag){
    console.log("Number is Prime");
}
else {
    console.log("Number is not Prime");
}


// Program 8
// print whether given number is palindrome or not 
// let num = 121, temp = num, sum = 0, rem = 0;
// while(n!=0) {
//     rem = n % 10;
//     sum = (sum * 10) + rem;
//     n = Math.floor(n / 10);
// }
// if(temp == sum) {
//     console.log("Number is palindrome");
// }
// else{
//     console.log("Number is not palindrome");
// }


// Program 9
// print whether given number is armstrong or not