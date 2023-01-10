// encapsulation means data hiding - restrict access of properties and methods

class Roblox{
 
private speed!: number;

/**
 * The getter function is called when the property is read
 * - The speed of the car.
 */
 public get Speed(){
 return this.speed;
 }
/**
 * The setter function is called when the property is assigned a new value
 * - The new speed of the car.
 */
 public set Speed(new_speed:number){
 this.speed=new_speed;
 console.log(this.Speed);
 
 }
  move(){
  console.log(`Welcome to the game! Your speed is ${this.Speed} ms`);
 }
 
 }
 const s = new Roblox();
s.Speed=34;
s.move();

 
 
 