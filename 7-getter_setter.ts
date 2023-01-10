// getter setter methods

class fruits{
  x:number;
  y:number;

  constructor(x: number,y:number){
    this.x=x;
    this.y=y;
  }
   

}

class fruit extends fruits{

  
  public get anything(){
    return this.x;

  }
  public set anything(value:number){
   this.x=value;

  }

}

var apple=new fruit(4,5);
console.log(apple.x);
console.log(apple.y);
apple.anything=9;
console.log(apple.x);
export{}