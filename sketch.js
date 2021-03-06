const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var backgroundImg;

var ground, player, rope;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19, box20;

var enemy;

function preload() {
//preload the images here
  backgroundImg = loadImage("images/GamingBackground.png");
}

function setup() {
  var canvas = createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;
  // create sprites here
  ground = new Ground(300, 405, 800, 10);
  player = new Player(200, 40, 140);
  rope = new Rope(player.body, {x:200, y:20});

  box1 = new Box(400, 360, 40, 40);
  box2 = new Box(400, 280, 40, 40);
  box3 = new Box(400, 200, 40, 40);
  box4 = new Box(400, 120, 40, 40);
  box5 = new Box(400, 40, 40, 40);
  box6 = new Box(440, 360, 40, 40);
  box7 = new Box(440, 280, 40, 40);
  box8 = new Box(440, 200, 40, 40);
  box9 = new Box(440, 120, 40, 40);
  box10 = new Box(440, 40, 40, 40);
  box11 = new Box(480, 360, 40, 40);
  box12 = new Box(480, 280, 40, 40);
  box13 = new Box(480, 200, 40, 40);
  box14 = new Box(480, 120, 40, 40);
  box15 = new Box(480, 40, 40, 40);
  box16 = new Box(520, 360, 40, 40);
  box17 = new Box(520, 280, 40, 40);
  box18 = new Box(520, 200, 40, 40);
  box19 = new Box(520, 120, 40, 40);
  box20 = new Box(520, 40, 40, 40);

  enemy = new Enemy(650, 400, 160);
}

function draw() {
  background(backgroundImg);
  
  Engine.update(engine);

  player.display();
  ground.display();
  rope.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
 
  enemy.display();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX, y: mouseY});
}