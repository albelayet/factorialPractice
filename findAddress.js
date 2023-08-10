


let address = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}

function findAddress(addressObject){
    let values = [];
    let keys = ['street', 'house', 'society'];

    // let getValues = Object.values(addressObject);
    // return getValues.join(",");
    for(let value in addressObject){
        values.push(addressObject[value]);
    }

}

let output = findAddress(address);

console.log(output);
