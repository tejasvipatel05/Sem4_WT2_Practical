function printsum(sum) {
    console.log(`Sum: ${sum}`)
}

function Main(a,b,printsum) {
    let sum = a + b;
    printsum(sum);
}


Main(9,10,printsum)