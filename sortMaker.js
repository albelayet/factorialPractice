
const arr = [2,5];

function sortMaker(array) {
    let firstElement = array[0];
    let secondElement = array[1];
    if (firstElement === secondElement) {
        return "equal";
    }
    else if (firstElement > 0 && secondElement > 0) {
        let sortedArray = array.sort((a, b) => b - a);
        return sortedArray;
    }
    else{
        return "Please enter valid number";
    }
}
let result = sortMaker(arr);
console.log(result);
