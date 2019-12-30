//Return Value From Function

//Return Data Type : String
const getName = (): string => {
  return "Hello, My Name Is Aldo Ignata Chandra";
};
console.log(getName());

//Return Data Type : Number
const getAge = (): number => {
  return 22;
};
console.log(getAge());

//Function Without Return Value
const getAddress = (): void => {
  console.log("Bogor");
};
getAddress();

//Fucntion With Spesific Arguments
const multiply = (num1: number, num2: number): number => {
  return num1 * num2;
};
const result = multiply(2, 5);
console.log(result);

//Function As Type
type add = (val1: number, val2: number) => number;
const addNumber: add = (val1: number, val2: number): number => {
  return val1 + val2;
};
console.log(addNumber(10, 7));

//Function With Default Parameter
const fullName = (first: string, last: string = "Ignata Chandra") => {
  return first + " " + last;
};
console.log(fullName("Aldo"));

//Function With Optional Parameter
const getAges = (val1: string, val2?: string): string => {
  return val1 + " " + val2;
};
console.log(getAges("A")); //A Undefined
console.log(getAges("A", "B")); //A B
