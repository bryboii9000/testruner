
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBall;
var floor,bintrash1,bintrash2,bintrash3;


function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBall = new Paper(50,400,20);
	floor = new Floor (600,550,1200, 20);
	bintrash1  = new Bin (1000,530,155,20);
	bintrash2  = new Bin (1068,468,20,180);
	bintrash3  = new Bin (932,468,20,180);
	imgTrash = new binbin(1000,465,170,180);
	
	Engine.run(engine);
	
}
function draw() {
  //rectMode(CENTER);
  background(225,225,225);
  Engine.update(engine);

if(keyDown("w")){
	Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:11,y:-17 })
  }

  bintrash1.display();
  bintrash2.display();
  bintrash3.display();
  floor.display();
  paperBall.display();
  imgTrash.display();

  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:11,y:-17})
  }
}