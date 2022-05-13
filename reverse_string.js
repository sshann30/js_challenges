// think: strings look like this "butthole"
// arrays look like this {b,u,t,t,h,o,l,e}

// when some jackass tells youy to reverse a string, you can't do it very easilly because there is not a built in command in js for that
// there is one for reversing an array tho

// 1. split is used to turn a string into an array
// 2. we can use reverse command here cuz ITS AN ARRAY NOW
// 3. JOIN

let str = "butthole";

function final(str){
    return str.split("").reverse().join("");
}

console.log(str)
console.log(str.split("").reverse().join(""))