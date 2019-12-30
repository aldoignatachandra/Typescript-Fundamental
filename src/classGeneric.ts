//Make Generic Class
class List<T> {
  private data: T[];

  constructor(...elements: T[]) {
    this.data = elements;
  }

  add(element: T): void {
    this.data.push(element);
  }

  addMultiple(...elements: T[]): void {
    this.data.push(...elements);
  }

  getAll(): T[] {
    return this.data;
  }
}

let numbers = new List<number>(1, 2, 3);
numbers.add(4);
numbers.addMultiple(4, 6, 7);
console.log(numbers.getAll());

let random = new List<number | string>(1, "A", 2, "B");
random.add(3);
random.add("C");
random.addMultiple(4, "D");
console.log(random.getAll());
