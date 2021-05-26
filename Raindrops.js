class Raindrops{
    constructor(x,y){
        var options={
            restitution:0.1,
            friction:0.001
           }
    this.body= Matter.Bodies.circle(x,y,5,options);
    World.add(world,this.body);
        }
        update(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{
                    x:random(0,400),
                    y:random(0,400)
                })
            }
        }
       display(){
           var pos=this.body.position;
          // this.body.fill("white");
           ellipseMode(CENTER);
           fill("blue");
           ellipse(pos.x,pos.y,5,5);
       } 
    }