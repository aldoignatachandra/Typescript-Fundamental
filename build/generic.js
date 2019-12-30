"use strict";
//Function Using Generic Type
//Not Use Generic Type
var getData = function (value) {
    return value;
};
console.log(getData("Aldo").length);
console.log(getData(123).length); //Cannot Detect The Error
//Use Generic Type
var myData = function (value) {
    return value;
};
console.log(myData("Aldo").length);
console.log(myData(123).length); //Can Detect The Error
