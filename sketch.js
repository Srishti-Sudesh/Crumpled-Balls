
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject, paperBall;	
var world;


function setup() {
	createCanvas(1200, 600);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	paperBall = new Paperball(130,100);

	groundObject=new Ground(width/2,570,width,20);
	dustbinObj=new Dustbin(960,550);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  dustbinObj.display();
  paperBall.display();
  groundObject.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(paperBall.body,paperBall.body.position,{x:45,y:-45});
	}
}