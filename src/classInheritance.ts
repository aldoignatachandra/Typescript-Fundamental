export class User {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName = (value: string): void => {
    this.name = value;
  };

  getName = (): string => {
    return this.name;
  };

  setAge = (value: number): void => {
    this.age = value;
  };

  getAge = (): number => {
    return this.age;
  };
}

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  private _email: string = "";
  static roleName = "Admin";

  //Use Super Constructor For Add New Input In Inheritance Class
  constructor(name: string, age: number, phone: string) {
    super(name, age);
    this.phone = phone;
  }

  static getRoleName() {
    return "Super Admin";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write
    };
  }

  set email(value: string) {
    if (value.length < 5) {
      this._email = "Wrong Email";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

let admin = new Admin("Aldo", 17, "081331994242");
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
let admin2 = Admin.roleName;
console.log(admin2);

//Call Static Function
let admin3 = Admin.getRoleName();
console.log(admin3);
