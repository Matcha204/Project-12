var surfer, path, running_surfer
var leftBoundary, rightBoundary
function preload(){
  //pre-load images
  path = loadImage("path.png")
  surfer = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);

  //create sprites here
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  surfer = createSprite(200, 50, 30, 30)
  surfer.addAnimation("runningSurfer", running_surfer)
  surfer.scale = 0.6

  leftBoundary = createSprite(100, 200, 10, 400);
  rightBoundary = createSprite(300, 200, 10, 400);
}

function draw() {
  background(0);

if (keyDown("left")) {
  surfer.x=surfer.x-1
}
if (keyDown("right")) {
  surfer.x=surfer.x+1
}

if(path.y ? 400){
  path.y = height/2;
}

surfer.collide(leftBoundary);
surfer.collide(rightBoundary);

drawSprites();
}
