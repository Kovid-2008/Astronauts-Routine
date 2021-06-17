var astronaut,astroImg;
var astroGym,astroGym2,astroEat,astroDrink,astroBath,astroMove,astroBrush;
var iss,issImg;
var invisi1,invisi2,invisi3,invisi4;


function preload(){
  astroImg=loadImage("sleep.png");
  astroBath=loadAnimation("bath1.png","bath2.png");
  astroBrush=loadAnimation("brush.png");
  astroDrink=loadAnimation("drink1.png","drink2.png");
  astroEat=loadAnimation("eat1.png","eat2.png");
  astroGym=loadAnimation("gym1.png","gym2.png");
  astroGym2=loadAnimation("gym11.png","gym12.png");
  astroMove=loadAnimation("move.png");
  issImg=loadAnimation("iss.png");
}






function setup() {
  createCanvas(800,600);
 iss=createSprite(400, 250, 50, 50);
iss.addAnimation("iss",issImg);
iss.scale=0.20;

astronaut=createSprite(400,400,20,20);
astronaut.addImage("jdnf",astroImg);
astronaut.scale=0.15;

invisi1=createSprite(400,0,800,1);
invisi1.visible=false;

invisi2=createSprite(400,800,800,1);
invisi2.visible=false;

invisi3=createSprite(0,400,1,800);
invisi3.visible=false;

invisi4=createSprite(800,400,1,800);
invisi4.visible=false;

}

function draw() {
  background(0);  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brush",astroBrush);
    astronaut.changeAnimation("brush",astroBrush);
    astronaut.x=400;
    astronaut.y=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Bath",astroBath);
    astronaut.changeAnimation("Bath",astroBath);
    astronaut.x=400;
    astronaut.y=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Gym",astroGym);
    astronaut.changeAnimation("Gym",astroGym);
    astronaut.x=400;
    astronaut.y=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Eat",astroEat);
    astronaut.changeAnimation("Eat",astroEat);
    astronaut.x=400;
    astronaut.y=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("SPACE")){
    astronaut.addAnimation("Drink",astroDrink);
    astronaut.changeAnimation("Drink",astroDrink);
    astronaut.x=400;
    astronaut.y=400;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("M")){
    astronaut.addAnimation("Move",astroMove);
    astronaut.changeAnimation("Move");
    astronaut.velocityY=-1;
    astronaut.velocityX=2;
    
  }
  createEdgeSprites();
  astronaut.bounceOff(invisi1);
  astronaut.bounceOff(invisi2);
  astronaut.bounceOff(invisi3);
  astronaut.bounceOff(invisi4);
  drawSprites();

  fill("white");
  text("Instructions:",100,100);
  text("Up Arrow:  ",100,120);
  text("Brush",160,120);
  text("Down Arrow:  ",100,140);
  text("Bath",175,140);
  text("Left Arrow:  ",100,160);
  text("Exercise",170,160);
  text("Right Arrow:  ",100,180);
  text("Eat",170,180);
  text("Space:  ",100,200);
  text("Drink",150,200);
  text("M:  ",100,220);
  text("Move",130,220);

}