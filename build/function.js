"use strict";
//Return Value From Function
//Return Data Type : String
var getName = function () {
    return "Hello, My Name Is Aldo Ignata Chandra";
};
console.log(getName());
//Return Data Type : Number
var getAge = function () {
    return 22;
};
console.log(getAge());
//Function Without Return Value
var getAddress = function () {
    console.log("Bogor");
};
getAddress();
//Fucntion With Spesific Arguments
var multiply = function (num1, num2) {
    return num1 * num2;
};
var result = multiply(2, 5);
console.log(result);
var addNumber = function (val1, val2) {
    return val1 + val2;
};
console.log(addNumber(10, 7));
//Function With Default Parameter
var fullName = function (first, last) {
    if (last === void 0) { last = "Ignata Chandra"; }
    return first + " " + last;
};
console.log(fullName("Aldo"));
//Function With Optional Parameter
var getAges = function (val1, val2) {
    return val1 + " " + val2;
};
console.log(getAges("A")); //A Undefined
console.log(getAges("A", "B")); //A B
