//var dustbin;
var paper,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	paper= new Paper(200,450,40);
	
	var options={
        isStatic:true
    }
	//Create a Ground
	ground= Bodies.rectangle(400,680,800,60,options);

	Engine.run(engine);

	//create Dustbin

	box1= createSprite(600,640,220,20);
	box1.shapeColor="red";

	box2=createSprite(500,570,20,140);
	box2.shapeColor="red";

	box3=createSprite(700,570,20,140);
	box3.shapeColor="red";

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  ground.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}



