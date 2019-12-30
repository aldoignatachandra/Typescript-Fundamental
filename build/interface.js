"use strict";
var Asus = /** @class */ (function () {
    function Asus(name, isGamingLaptop) {
        this.name = name;
        this.isGamingLaptop = isGamingLaptop;
    }
    Asus.prototype.on = function () {
        console.log(this.name + " Turn ON");
    };
    Asus.prototype.off = function () {
        console.log(this.name + " Turn OFF");
    };
    return Asus;
}());
var MacBook = /** @class */ (function () {
    function MacBook(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    MacBook.prototype.on = function () {
        console.log(this.name + " Turn ON");
    };
    MacBook.prototype.off = function () {
        console.log(this.name + " Turn OFF");
    };
    return MacBook;
}());
var asus = new Asus("Asus ROG", true);
console.log(asus.on());
console.log(asus.off());
var macBookPro = new MacBook("Mac Book Pro", true);
console.log(macBookPro.on());
console.log(macBookPro.off());
