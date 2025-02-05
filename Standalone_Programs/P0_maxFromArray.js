let arr = [20,47,56,30,79,10,900];
for(let i = 1; i < arr.length; i++){
    if(arr[i] < arr[i-1]) {
        max = arr[i-1];
    }
    else{
        max = arr[i];
    }
}

console.log(`${max}`);