import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);
asus.a();
asus.b();

let macBook = new MacBook(2017, false, true);
console.log(macBook);
macBook.a();
macBook.b();
