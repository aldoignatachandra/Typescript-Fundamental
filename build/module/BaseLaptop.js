"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Keyboard_1 = require("./Keyboard");
var BaseLaptop = /** @class */ (function () {
    function BaseLaptop(name, type, numeric, touchButton) {
        this.name = name;
        this.type = type;
        this.withNumeric = numeric;
        this.withTouchButton = touchButton;
    }
    BaseLaptop.prototype.a = function () {
        console.log("LOG -> " + this.name + " " + this.type + " Typing " + Keyboard_1.a());
    };
    BaseLaptop.prototype.b = function () {
        console.log("LOG -> " + this.name + " " + this.type + " Typing " + Keyboard_1.b());
    };
    return BaseLaptop;
}());
exports.default = BaseLaptop;
