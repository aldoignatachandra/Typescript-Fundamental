import ILaptop from "./ILaptop";
import { a, b } from "./Keyboard";

abstract class BaseLaptop<T> implements ILaptop<T> {
  name: string;
  type: T;
  withNumeric: boolean;
  withTouchButton: boolean;

  constructor(name: string, type: T, numeric: boolean, touchButton: boolean) {
    this.name = name;
    this.type = type;
    this.withNumeric = numeric;
    this.withTouchButton = touchButton;
  }

  a(): void {
    console.log("LOG -> " + this.name + " " + this.type + " Typing " + a());
  }

  b(): void {
    console.log("LOG -> " + this.name + " " + this.type + " Typing " + b());
  }
}

export default BaseLaptop;
