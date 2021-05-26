class Umbrella{
    constructor(x,y){
        var options={
            isStatic:true 
           }
    this.body= Matter.Bodies.circle(x,y,50,options);
    this.image=loadImage("walking_1.png");
    World.add(world,this.body);
        }
       display(){
           var pos=this.body.position;
          // this.body.fill("white");
           imageMode(CENTER);
           image (this.image,pos.x,pos.y+70,300,300);
       } 
    }