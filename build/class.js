"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Long Version Define Attributes
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
exports.User = User;
var user = new User("Aldo", 17);
console.log(user);
console.log(user.name);
console.log(user.age);
//Short Version Define Attributes
var User2 = /** @class */ (function () {
    function User2(name, age) {
        this.name = name;
        this.age = age;
    }
    return User2;
}());
exports.User2 = User2;
var user2 = new User2("Ignata", 22);
console.log(user2);
console.log(user2.name);
console.log(user2.age);
