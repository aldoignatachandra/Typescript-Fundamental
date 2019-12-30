//Long Version Define Attributes
export class User {
  public name: string;
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let user = new User("Aldo", 17);
console.log(user);
console.log(user.name);
console.log(user.age);

//Short Version Define Attributes
export class User2 {
  constructor(public name: string, public age: number) {}
}

let user2 = new User2("Ignata", 22);
console.log(user2);
console.log(user2.name);
console.log(user2.age);
