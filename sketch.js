const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
let engine;
let world;
var block1;
var ground;
var block3;
var block2

function setup() {
  createCanvas(400,400)

  engine = Engine.create()
  world = engine.world
  var block1_options = {
  restitution:0.95,
  frictionAir:0.01,
  friction:0.001
  }

  var block2_options = {
	restitution:0.80,
	frictionAir:0.25,
    friction:0.09
  }
block2 = Bodies.rectangle(300,200,40,40,block2_options)
World.add(world,block2)
block1 = Bodies.circle(100,10,20,block1_options)
World.add(world,block1)
var ground_options = {
  isStatic:true

}
ground = Bodies.rectangle(170,390,400,20,ground_options)
World.add(world,ground)
var block3_options = {
restitution:0.50,
frictionAir:0.15,
friction:0.02
}
block3 = Bodies.rectangle(230,50,50,40,block3_options)
World.add(world,block3)
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 background(51)
 Engine.update(engine)
 ellipse(block1.position.x,block1.position.y,20)
 rect(ground.position.x,ground.position.y,400,20)
 rect(block3.position.x,block3.position.y,50,40)
 rect(block2.position.x,block2.position.y,40,40)
}


