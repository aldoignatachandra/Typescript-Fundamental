"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        var _this = this;
        this.setName = function (value) {
            _this.name = value;
        };
        this.getName = function () {
            return _this.name;
        };
        this.setAge = function (value) {
            _this.age = value;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.name = name;
        this.age = age;
    }
    return User;
}());
exports.User = User;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    //Use Super Constructor For Add New Input In Inheritance Class
    function Admin(name, age, phone) {
        var _this = _super.call(this, name, age) || this;
        _this.read = true;
        _this.write = true;
        _this._email = "";
        _this.phone = phone;
        return _this;
    }
    Admin.getRoleName = function () {
        return "Super Admin";
    };
    Admin.prototype.getRole = function () {
        return {
            read: this.read,
            write: this.write
        };
    };
    Object.defineProperty(Admin.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            if (value.length < 5) {
                this._email = "Wrong Email";
            }
            else {
                this._email = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Admin.roleName = "Admin";
    return Admin;
}(User));
var admin = new Admin("Aldo", 17, "081331994242");
console.log(admin);
admin.getName();
admin.getAge();
admin.setName("Aldo Ignata Chandra");
admin.setAge(22);
console.log(admin);
//Set Private Email
admin.email = "aldoignatachandra@gmail.com";
console.log(admin);
//Call Static Variable
var admin2 = Admin.roleName;
console.log(admin2);
//Call Static Function
var admin3 = Admin.getRoleName();
console.log(admin3);
