/* A readonly property. 
we can not reassign value when the scope of variable is readonly 
instead of private,public & protected*/

class fruits {
  readonly x: number;
  protected static count: number = 0;

  // static refer to class
  //this refer to instance of class
  //  i can not acces static property - count directly

  constructor(price: number) {
    this.x = price;
    fruits.count++;
  }
  static getPrice() {
    return fruits.count;
  }

  // set X(value: number){
  //   this.x=45;
  // }
}

let apple = new fruits(5);
console.log(apple.x);
console.log(fruits.getPrice());

// apple.x=76;
// console.log(apple.x);

let orange = new fruits(98);
console.log(orange.x);
console.log(fruits.getPrice());
