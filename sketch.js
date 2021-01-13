
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

    paper = new Paper(200,100,30,30);
    ground = new Ground(400,700,800,50);
    D1 = new Ground(600,675,150,20);
    D2 = new Ground(525,650,20,75);
    D3 = new Ground(675,650,20,75);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  D1.display();
  D2.display();
  D3.display();
  drawSprites();
 
}

function keyPressed(){

    if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:30 , y: -30});
    }

  }    
