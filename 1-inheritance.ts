// parent class / super class
class characters{
        x: number;
        y: number;
        constructor(x : number , y : number){
          this.x=x;
          this.y=y;
        }
 eat(){

 } 
}
// child class / sub class
class rebootedpoppy extends characters{
  hunger: number;
  constructor(x : number , y: number , hunger : number){
super(x,y);
this.hunger = hunger;
  }

}


const e1 = new rebootedpoppy(3,4,5);
e1.eat();
