const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  box1 = new Box(1100, 590, 50, 50);
  box2 = new Box(1060, 590, 50, 50);
  box3 = new Box(1010, 590, 50, 50);
  box4 = new Box(960, 590, 50, 50);
  box5 = new Box(910, 590, 50, 50);
  box6 = new Box(860, 590, 50, 50);
  box7 = new Box(810, 590, 50, 50);
  box8 = new Box(1080, 500, 40, 40);
  box9 = new Box(1030, 500, 40, 40);
  box10 = new Box(980, 500, 40, 40);
  box11 = new Box(930, 500, 40, 40);
  box12 = new Box(880, 500, 40, 40);
  box13 = new Box(830, 500, 40, 40);
  box14 = new Box(850, 400, 40, 40);
  box15 = new Box(950, 400, 40, 40);
  box16 = new Box(1050, 400, 40, 40);
  box17 = new Box(900,400,40,40);
  box18 = new Box(1000,400,40,40);
  box19 = new Box(950,300,50,50);
  box20 = new Box(900,300,50,50);
  box21 = new Box(1050,300,50,50);


  ball = new Ball(200, 300, 80, 80);
  rope = new Rope(ball.body, { x: 700, y: 250 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


