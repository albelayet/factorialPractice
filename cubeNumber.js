
function cubeNumber(number) {
    if (typeof number === "number") {
        let result = number * number * number;
        return result;
    }
    else{
        const alert = "Please enter a number";
        return alert;
    }
}

const inputNumber = cubeNumber("b");
console.log(inputNumber);

