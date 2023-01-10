// inheritance,super classes,sub classes
// is-a and has-a relationship
// over-ride and extend method of super class



// animal HAS-A voice
class Animal{
 protected voice!: boolean;
makeNoise(){
 console.log("makes noise");
 
}
setVoice(new_voice: boolean){
this.voice=new_voice;
}
}
// cat IS-A animal
class Cat extends Animal{
 // function over-riding
 makeNoise(): void {
  console.log("meow meow");
  
 }
}
class Dog extends Animal{

}
class Rabbit extends Animal{
 // declare new method
 makesVoice(){
  console.log(`rabbits makes voice: ${this.voice}`);
  
 }
}
class Lion extends Animal{
// over-ride the method of super class
 makeNoise(): void {
  console.log("roars..........");
  // extends the method of super class
  super.makeNoise();
  console.log(`lion makes voice: ${this.voice}`);
  
 }

 
}
const Tomy= new Dog;
Tomy.makeNoise();
const Tom= new Cat;
Tom.makeNoise();
const Jade= new Rabbit();
Jade.setVoice(true);
Jade.makesVoice();
const Bungee=new Lion();
Bungee.setVoice(false);
Bungee.makeNoise();

