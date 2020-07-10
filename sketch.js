const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = "serve";

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,650,1200,10);

  wall = new Wall(1200,400,10,1200);
  wall2 = new Wall(0,400,10,1200);
  wall3 = new Wall(600,700,1200,10);
  wall4 = new Wall(600,0,1200,10);

  binH = new Bin(1000,450,210,10);
  binV1 = new Bin(920, 450, 10,50);
  binV2 = new Bin(1080, 450, 10,50);
  invisi = new Bin(1000,500, 100, 10);
  World.add(world, invisi.body);
  World.add(world, binV1.body);
  World.add(world, binV2.body);

  ball = new Ball(50,630,40,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);

  background("red");

  ground.display();
  binH.display();
  ball.display();
  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();

  drawSprites();
}


function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-195});
  }

  if(keyCode === LEFT_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-100, y:0});
  }

  if(keyCode === RIGHT_ARROW){
    Matter.Body.setStatic(ball.body, false);
    Matter.Body.applyForce(ball.body, ball.body.position, {x:100, y:0});
  } 
}