import Laptop from "./BaseLaptop";

class Asus<T> extends Laptop<T> {
  constructor(type: T, numeric: boolean, touchButton: boolean) {
    super("ASUS", type, numeric, touchButton);
  }
}

export default Asus;
