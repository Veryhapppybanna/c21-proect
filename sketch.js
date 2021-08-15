
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball 
var groundObj


function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, windowHeight);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		dencity: 1.2
	}
	engine = Engine.create();
	world = engine.world;
	groundObj = new Ground(width/2,670,width,20);

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball)


	Engine.run(engine);
  
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  groundObj.show();

 Engine.update(engine);
}



