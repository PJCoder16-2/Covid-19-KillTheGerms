const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
//var bg = "sprites/bg1.png";
var score = 0;
function preload() {
    backgroundImg = loadImage("bg.png");
}



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    v1a = new virus1(1000, 350);
    v1b = new virus1(950, 350);
    v1c = new virus1(900, 350);
    v1d = new virus1(850, 350);
    v1e = new virus1(800, 350);
    v1f = new virus1(750, 350);
    v1g = new virus1(1050, 350);

    v2a = new virus2(1020, 300);
    v2b = new virus2(970, 300);
    v2c = new virus2(920, 300);
    v2d = new virus2(870, 300);
    v2e = new virus2(820, 300);
    v2f = new virus2(770, 300);

    v3a = new virus3(1000, 250);
    v3b = new virus3(950, 250);
    v3c = new virus3(900, 250);
    v3d = new virus3(850, 250);
    v3e = new virus3(800, 250);

    v4a = new virus4(980, 200);
    v4b = new virus4(930, 200);
    v4c = new virus4(880, 200);
    v4d = new virus4(830, 200);

    v5a = new virus5(950, 150);
    v5b = new virus5(900, 150);
    v5c = new virus5(850, 150);

    v6a = new virus6(870, 100);
    v6b = new virus6(920, 100);

    v7 = new virus7(900, 50);



    bird = new Bird(200,50);
    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
 background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    v1a.display();
   
    v1a.score()
    v1b.display();
    v1b.score()
    v1c.display();
    v1c.score()
    v1d.display();
    v1d.score()
    v1e.display();
    v1e.score()
    v1f.display();
    v1f.score()
    v1g.display();
    v1g.score()
    v2a.display();
    v2a.score()
    v2b.display();
    v2b.score()
    v2c.display();
    v2c.score()
    v2d.display();
    v2d.score()
    v2d.display()
    v2d.score()
    v2e.display();
    v2e.score()
    v2f.display();

    v2f.score()

    v3a.display();
    v3a.score()
    v3b.display();
    v3b.score()
    v3c.display();
    v3c.score()
    v3d.display();
    v3d.score()
    v3e.display();
    v3e.score()

    v4a.display();
    v4a.score()
    v4b.display();
    v4b.score()
    v4c.display();
    v4c.score()
    v4d.display();
    v4d.score()


    v5a.display();
    v5a.score()
    v5b.display();
    v5b.score()
    v5c.display();
    v5c.score()

    v6a.display();
    v6a.score()
    v6b.display();
    v6b.score()

    v7.display();
    v7.score()


    ground.display();
    bird.display();
    platform.display();
    slingshot.display();
    
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed < 1){
       bird.trajectory = [];
       Matter.Body.setPosition(bird.body,{x:200, y:50});
       slingshot.attach(bird.body);
    }
}
