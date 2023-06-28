"use strict";
let stringArr = ['one', 'hey', 'John'];
let guitars = ['Strat', 'Les Paul', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jane';
stringArr.push('Jake');
guitars[0] = 1984;
guitars.unshift('Jim');
guitars = stringArr;
let test = [];
let bands = [];
bands.push('Van Halen');
console.log(stringArr);
// Tuple
// let myTuple = [string, number, boolean] = ['Dave', 42, true]
// let mixed = ['Johnny', 1, false]
// myTuple[1] = 42
// object
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Dave',
    prop2: true,
};
exampleObj.prop1 = 'hello';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`;
    }
};
console.log(greetGuitarist(jp));
