
class fruits{
  x:number=2;
  y:number=3;
}
var apple=new fruits;
console.log(apple.x);
apple.x=9;
console.log(apple.x);
console.log(apple.y);


/* 
A class can be used to create many objects. Objects created at runtime from a class are called
instances of that particular class. 

Classes provide a template */
class fruit{
  x:number;
  y:number;
/**
 * The constructor function is a special function that is called when an object is created from a
 * class.
 */
  constructor(x: number,y:number){
    this.x=x;
    this.y=y;
  }
}
var apple=new fruit(4,5);
console.log(apple.x);
apple.x=9;
console.log(apple.x);
console.log(apple.y);


export{}


