const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20;
var stand1;
var Slingshot;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


slingShot=new Slingshot(this.polygon,{x:100,y:200})
stand1=new Stand(600,350,290,10)

  ground = new Ground(600,height,1200,20)
//level 1
  block1=new Block(500,300,20,50)
  block2=new Block(530,300,20,50)
  block3=new Block(560,300,20,50)
  block4=new Block(590,300,20,50)
  block5=new Block(620,300,20,50)
  block6=new Block(650,300,20,50)
  //level 2
  block7=new Block(520,240,20,50)
  block8=new Block(550,240,20,50)
  block9=new Block(580,240,20,50)
  block10=new Block(610,240,20,50)
  block11=new Block(640,240,20,50)
  //level 3
  block12=new Block(530,180,20,50)
  block13=new Block(560,180,20,50)
  block14=new Block(590,180,20,50)
  block15=new Block(620,180,20,50)
  //level 4
  block16=new Block(540,120,20,50)
  block17=new Block(570,120,20,50)
  block18=new Block(600,120,20,50)
  //level5
  
  block19=new Block(550,60,20,50)
  block20=new Block(580,60,20,50)
}

function draw() {
  background(255,255,255);  

stand1.display()
ground.display()
block1.display()
block2.display()
block3.display()
block4.display()
block5.display()
block6.display()
block7.display()
block8.display()
block9.display()
block10.display()
block11.display()
block12.display()
block13.display()
block14.display()
block15.display()
block16.display()
block17.display()
block18.display()

block19.display()
block20.display()
stand.display()
slingShot.display()

  drawSprites();
}