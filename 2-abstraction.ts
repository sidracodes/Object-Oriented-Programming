// abstraction means hide the functionality show the structure

/* The code is creating an abstract class called Hero.
abstract class doesnot allow to creating any new function or instance */


abstract class Hero{

abstract attack(): void

 move(){
console.log("i can move");

 }
 eat(){
console.log("i am eating");

 }

}
// concrete classes 
// concrete class must implements abstract methods
class Maige extends Hero{
attack(): void {
 console.log("attttttttttttack");
 
}

}
// concrete classes
class Knight extends Hero{
attack(): void {
 
}
}
// concrete classes
class Archer extends Hero{
attack(): void {
 
}
}


// concrete objects

const a11: Hero =new Maige();
const a31: Hero =new Knight();
const a22: Hero =new Archer();
a11.attack();
a11.move();
a11.eat();
// const a44: Hero =new Hero();

