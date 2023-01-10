// ---------------------access modifiers--------------------//
// public can be accessible eveywhere
// protected can be only access withina class and its subclasses
// private can be only access withina class

class fruits{
  protected x:number;
  private y:number;

  constructor(x: number,y:number){
    this.x=x;
    this.y=y;
  }
   
  public getvalueof_Y(){
    return this.y;

  }

}

class fruit extends fruits{

  
  public getvalueof_X(){
    return this.x;

  }
  public setvalueof_X(value:number){
     return this.x=value;

  }

}
// var apple=new fruits(4,5);
// console.log(apple.x);
// console.log(apple.y);

var apple=new fruit(4,5);
console.log(apple.getvalueof_X());
console.log(apple.getvalueof_Y());
console.log(apple.setvalueof_X(55));







export{}