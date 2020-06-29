const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground1
var b1,b2,b3,b4,b5
var chain1

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	b1 = new ball(200,600,70)
	chain1 = new chain(b1,ground,200,100) 
ground1 = new Ground(400,100,600,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground1.display();
  b1.display();
  chain1.display();
  drawSprites();
 
}



