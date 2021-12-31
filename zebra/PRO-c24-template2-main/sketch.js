const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone1
var iron1

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(900,450,70);
    stone1 =  new Stone(700,320,100,100);
    iron1 =  new Iron(300,350);

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
    rubber1.display();
    plane.display();
    hammer.display();
    stone1.display();
    iron1.display();

    
 
}