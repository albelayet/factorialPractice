function factorial(number){
    sum = 1;
    for(let i = number; i >= 1; i--){
        sum = sum * i;
    }
    return sum;
}

const oddSum = factorial(6);

console.log(oddSum);
