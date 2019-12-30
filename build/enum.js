"use strict";
//Type Data : Enum
//Default Is Numeric Enum
//Numeric Enums
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
console.log(Day);
//String Enums
var Month;
(function (Month) {
    Month["JAN"] = "January";
    Month["FEB"] = "February";
    Month["MAR"] = "Maret";
    Month["APR"] = "April";
    Month["MAY"] = "May";
})(Month || (Month = {}));
console.log(Month);
