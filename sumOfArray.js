

function sumOfArray(num){

    let sum = 0
    for(let item of num){
        sum = sum + item;
    }
    return sum;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const total = sumOfArray(arr)
console.log(total)