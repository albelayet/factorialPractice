
let string1 = "Peter Parker";
let string2 = 'ter';

function matchFinder(string1, string2) {

    if (typeof string1 && typeof string2 !== 'string') {
        let alert = "Please enter a string not a number"
        return alert;
    }
    else {
        let finder = string1.includes(string2);
        return finder;
    }

}

const result = matchFinder(string1, string2);

console.log(result);