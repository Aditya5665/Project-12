var garden,rabbit;
var gardenImg,rabbitImg;
var select_sprite;
var apple,leaves;
var appleGroup, leavesGroup;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
// Groups
appleGroup = createGroup();
leavesGroup = createGroup();

}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  select_sprite = Math.round(random(1,2))
  console.log(select_sprite);
if(frameCount % 80 == 0){
  if(select_sprite == 1){
    drawApples();
  }
  else {
    drawLeaves();
  }
}

if(appleGroup.isTouching(rabbit)){
  appleGroup.destroyEach();
}
if(leavesGroup.isTouching(rabbit)){
  leavesGroup.destroyEach();
}
  drawSprites();
}


function drawApples() {
  apple = createSprite(random(50, 350),100, 100, 100);
  apple.addImage(appleImg);
  apple.scale = 0.1;
  apple.velocityY = 2;
  appleGroup.add(apple);
}

function drawLeaves(){
  leaves = createSprite(random(50,350),40,100,100);
  leaves.addImage(leavesImg);
  leaves.scale = 0.1;
  leaves.velocityY = 2;
  leavesGroup.add(leaves);
}