var BoyImage,Treeimage,mangoImage,stoneimage
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function preload()
{
BoyImage=loadImage("boy.png")
Treeimage=loadImage("tree.png")	
mangoImage=loadImage("mango.png")
stoneimage=loadImage("stone.png")
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  Stone=new stone(155,390,50,50)
  stoneinhand=new SlingShot(Stone.body,{x:75,y:390})
    boy=new Boy(150,450,300,300)
    mangotree=new tree(550,300,500,500)
    mango1=new mango(410,310,40,40)
    mango2=new mango(470,310,40,40)
    mango3=new mango(690,300,40,40)
    mango4=new mango(690,150,40,40)
  
    
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(200);
  boy.display()
  mangotree.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  Stone.display()
  stoneinhand.display()
}
  
  
  function mouseDragged(){
    Matter.Body.setPosition(Stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  stoneinhand.fly();
}



