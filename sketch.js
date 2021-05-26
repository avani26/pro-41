const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var t1,t2,t3,t4,thunder;
var drops=[];
var maxdrops=200;
var thunderframe=0;
var umbrella,rand;

function preload(){
 
    t1=loadImage("1.png");   
    t2=loadImage("2.png");    
    t3=loadImage("3.png");    
    t4=loadImage("4.png");   
}


function setup(){
    createCanvas(500,600);

    engine=Engine.create();
    world=engine.world;
    umbrella = new Umbrella(200,500);

    if(frameCount%150===0){
        for( var i=0 ; i<=maxdrops; i++){
            drops.push(new Raindrops(random (0,400), random(0,400)) )
        }
    }

}

function draw(){
   background("black"); 

   Engine.update(engine);
   rand=Math.round(random(1,4));
   if(frameCount%80===0){
       thunderframe=frameCount;
       thunder=createSprite(random(10,370),random(10,30),10,10);
       switch(rand){
           case 1:thunder.addImage(t1);
           break;

           case 2:thunder.addImage(t2);
           break;

           case 3:thunder.addImage(t3);
           break;

           case 4:thunder.addImage(t4);
           break;
           default:break;
       }
      thunder.scale=random(0.3,0.6);
   }
if(thunderframe+10===frameCount&&thunder){
       thunder.destroy();
   }
   umbrella.display();
   for(var j=0; j<=maxdrops; j++){
       drops[j].display();
       drops[j].update();
   }
   drawSprites();
}   

