const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var right2;
var top_wall;
var ball;

var wall1
var wall2


function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,600,4000,20);
  right = new Ground(790,200,20,4000);
  left = new Ground(10,200,20,4000);
  top_wall = new Ground(200,10,4000,20);
  wall1 = new Ground(750,555,20,70)
  wall2 = new Ground(640,555,20,70)

  rectMode(CENTER);
  ellipseMode(RADIUS);
  var ball_options={
    restitution:0.9
  }
  ball=Bodies.circle(200, 570, 20, ball_options)
  World.add(world,ball)

  
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  wall1.show()
 wall2.show()

  var ballOptions={
	  isStatic:false
  }
 ellipse(ball.position.x, ball.position.y, 20, 20,ballOptions);
  Engine.update(engine);
  
 textSize(20) 
fill("blue")
text("press up arrow once",300,300)
}


function herisontal(){

  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0.03, y: 0 })
  Matter.Body.applyForce(ball, { x: 0, y: 0 }, { x: 0, y: 0.06 })
}

function keyPressed(){

if(keyCode === UP_ARROW){
	herisontal()
}


}