
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var stand1,stand2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var block1A,block2A,block3A,block4A,block5A,block6A,block7A,block8A,block9A;
var polygon_image,slingShot,polygon;
function preload()
{
	polygon_image = loadImage("polygon.png");
}

function setup() {
	var canvas = createCanvas(1200, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(700,590,1500,20);

	stand1 = new Ground(500,500,300,15);
	stand2 = new Ground(865,400,200,15);

	block1 = new Block(420,275,30,40);
	block2 = new Block(450,275,30,40);
	block3 = new Block(480,275,30,40);
	block4 = new Block(510,275,30,40);
	block5 = new Block(540,275,30,40);
	block6 = new Block(570,275,30,40);
	block7 = new Block(600,275,30,40);

	block8 = new Block(450,235,30,40);
	block9 = new Block(480,235,30,40);
	block10 = new Block(510,235,30,40);
	block11 = new Block(540,235,30,40);
	block12 = new Block(570,235,30,40);
	
	block13 = new Block(480,195,30,40);
	block14 = new Block(510,195,30,40);
	block15 = new Block(540,195,30,40);
	
	block16 = new Block(510,155,30,40);

  block1A = new Block(800,175,30,40);
  block2A = new Block(830,175,30,40);
  block3A = new Block(860,175,30,40);
  block4A = new Block(890,175,30,40);
  block5A = new Block(920,175,30,40);
  
  block6A = new Block(830,135,30,40);
  block7A = new Block(860,135,30,40);
  block8A = new Block(890,135,30,40);
 
  block9A = new Block(860,95,30,40);


  polygon = Bodies.circle(50,200,20);

  World.add(world,polygon);
  slingShot = new Slingshot(this.polygon,{x:100,y:200});

	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(25);
  fill(4, 242, 242);
  text("'''Drag the Hexagonal Stone and Release it, to launch it towards the blocks...'''",130,50);

  fill(195, 31, 12);
  ground.display();

  fill("lime");
  stand1.display();
  stand2.display();

  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("cyan");
  block13.display();
  block14.display();
  block15.display();

  fill("grey");
  block16.display();

  fill("lightblue");
  block1A.display();
  block2A.display();
  block3A.display();
  block4A.display();
  block5A.display();

  fill("cyan");
  block6A.display();
  block7A.display();
  block8A.display();

  fill("pink");
  block9A.display();

  imageMode(CENTER)
  image(polygon_image ,polygon.position.x,polygon.position.y,100,70);

  slingShot.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    slingShot.fly();
}

