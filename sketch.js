var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(200, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	
	helicopterSprite=createSprite(200, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(200 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	box1=new Box(100,640,5,1);
	box2=new Box(350,640,400,50);
	box3=new Box(145,640,100,50);
	box4=new Box(190,640,100,50);
	box5=new Box(235,640,100,50);
	box6=new Box(280,640,100,50);
	box7=new Box(280,640,100,50);
	box8=new Box(300,640,100,50);
	box9=new Box(100,600,5,1);
	box10=new Box(350,600,400,50);
	Engine.run(engine);
}
function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box10.display();
  box9.display();
  packageSprite.x=packageBody.position.x;
  packageSprite.y=packageBody.position.y;
 
	drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
 Matter.Body.setStatic(packageBody,false);   
}
}



