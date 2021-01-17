const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine,wld;
var ground;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11
var crane,ball,ballimg,hide,rope,point

function preload(){
   crane = loadImage("crane.png")
   ballimg = loadImage("iron.png")
   hide = loadImage("hide.jpg")
}
function setup(){
    createCanvas(1000,600)
    engine = Engine.create()
    wld = engine.world

    ground = new Ground(500,580,1000,10)
    block1 = new Block(700,560);
    block2 = new Block(700,510);
    block3 = new Block(700,460);
    block4 = new Block(700,410);
    block5 = new Block(700,360);
    block6 = new Block(700,310); 
    block7 = new Block(750,560);
    block8 = new Block(750,510);
    block9 = new Block(750,460);
    block10 = new Block(750,410);
    block11 = new Block(750,360);
    ball = new Ball(420,450,30)
    
    var option = {
        bodyA:ball.body,
        pointB:{x:462.5,y:110}
    }
    rope = Constraint.create(option)
    point = rope.pointB
    World.add(wld,rope)
}
function draw(){
    background(100)
    Engine.update(engine)

    imageMode(CENTER)
    image(crane,300,300,350,550)
    image(hide,460,245,40,245)
    image(ballimg,ball.body.position.x,ball.body.position.y,300,300)
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    ground.display()
    ball.display()
    fill("black")
    strokeWeight(5)
    line(point.x,point.y,ball.body.position.x,ball.body.position.y)
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
