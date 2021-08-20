const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, groundOptions;
var box1, box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;
var backgroundImg;

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,600);

  myEngine = Engine.create();  // myEngine.world
  myWorld = myEngine.world;

  box1 = new Box(900,550,50,50);
  box2 = new Box(650,550,60,80);
  box3 = new Box(900,520,60,80);
  box4 = new Box(650,520,60,80);
  box5 = new Box(775,490,60,80);

  ground = new Ground(600,590,1200,15);

  pig1 = new Pig(775,560);
  pig2 = new Pig(775,520);

  bird = new Bird(50,50);

  log1 = new Log(775,525,400,PI);
  log2 = new Log(775,500,400,PI);
  log3 = new Log(660,480,150,PI/-3);
  log4 = new Log(990,495,150,PI/3);

}

function draw() {
  background(backgroundImg); 
  Engine.update(myEngine);

  ground.display();
  box1.display();
  box2.display();
  pig1.display();
  log1.display();
  box3.display();
  box4.display();
  pig2.display();
  log2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  
}