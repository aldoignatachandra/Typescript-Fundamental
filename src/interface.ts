interface Laptop {
  name: string;
  on(): void;
  off(): void;
}

class Asus implements Laptop {
  name: string;
  isGamingLaptop: boolean;

  constructor(name: string, isGamingLaptop: boolean) {
    this.name = name;
    this.isGamingLaptop = isGamingLaptop;
  }

  on(): void {
    console.log(this.name + " Turn ON");
  }

  off(): void {
    console.log(this.name + " Turn OFF");
  }
}

class MacBook implements Laptop {
  name: string;
  keyboardLight: boolean;

  constructor(name: string, keyboardLight: boolean) {
    this.name = name;
    this.keyboardLight = keyboardLight;
  }

  on(): void {
    console.log(this.name + " Turn ON");
  }

  off(): void {
    console.log(this.name + " Turn OFF");
  }
}

let asus = new Asus("Asus ROG", true);
console.log(asus.on());
console.log(asus.off());

let macBookPro = new MacBook("Mac Book Pro", true);
console.log(macBookPro.on());
console.log(macBookPro.off());
