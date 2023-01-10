class Player{
 id: string;
 speed: number;
 isOk: boolean;

constructor( new_id: string,new_speed: number,new_isOk: boolean){
this.id=new_id;
this.speed=new_speed;
this.isOk=new_isOk;
}
 move(){
 console.log(`welcome to the game!`);
 console.log(`your id : ${this.id} with speed : ${this.speed} and it is ${this.isOk}`);
}

}
const Sidra=new Player("struffios",100,true);
Sidra.move();
