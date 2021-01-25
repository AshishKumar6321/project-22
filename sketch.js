var car,wall1,wall2,wall3,wall4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    createCanvas(800,600);
  
  car =createSprite(random(20,750),300,20,20);
  car.velocityY=4;
  car.velocityX=4;
  car.shapeColor="white";

  wall1=createSprite(260,590,120,27);
  wall1.shapeColor="orange";

  wall2=createSprite(380,590,120,27);
  wall2.shapeColor="yellow";

  wall3=createSprite(500,590,120,27);
  wall3.shapeColor="red";

  wall4=createSprite(620,590,120,27);
  wall4.shapeColor="green";

}

function draw() {
    background(0,0,0);  
    
   edges= createEdgeSprites();
   car.bounceOff(edges);
    
  if(wall1.isTouching(car)&&car.bounceOff(wall1)){
      car.shapeColor="orange";
      music.play();
    }
    if(wall2.isTouching(car)&&car.bounceOff(wall2)){
      car.shapeColor="yellow";
    }
    if(wall3.isTouching(car)&&car.bounceOff(wall3)){
      car.shapeColor="red";
    }
    if(wall4.isTouching(car)&&car.bounceOff(wall4)){
      car.shapeColor="green";
    }
    if(wall2.isTouching(car)){
      car.shapeColor=rgb(255,128,0);
      car.velocityX=0;
      music.stop();
    }
    drawSprites();
}
