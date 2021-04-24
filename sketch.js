var fixedRec;
var movingRec;
var newRect;

function setup() {
  createCanvas(800,400);
fixedRec = createSprite(400, 200, 50, 50);
fixedRec.shapeColor = (rgb(168, 99, 30));
movingRec = createSprite(500, 200, 100, 50);
movingRec.shapeColor = (rgb(168, 99, 30));
newRect = createSprite(600, 200,50, 50);
newRect.shapeColor = (rgb(168, 99, 30));
}

function draw() {
  background(90, 154, 196); 
  movingRec.x = mouseX;
  movingRec.y = mouseY;

  if(isTouching(movingRec, fixedRec)){
    movingRec.shapeColor = (rgb(245, 37, 172));
    fixedRec.shapeColor = (rgb(245, 37, 172));
  }else if (isTouching(movingRec, newRect)){
    movingRec.shapeColor = (rgb(245, 37, 172));
    newRect.shapeColor = (rgb(245, 37, 172));
  } else {
    movingRec.shapeColor = (rgb(168, 99, 30));
    fixedRec.shapeColor = (rgb(168, 99, 30));
    newRect.shapeColor = (rgb(168,99,30));
  }
  drawSprites();
}



function isTouching(jim, joe){
  if(jim.x - joe.x < jim.width/2 + joe.width/2 && 
    joe.x - jim.x < jim.width/2 + joe.width/2 &&
    jim.y - joe.y < jim.height/2 + joe.height/2 &&
    joe.y - jim.y < jim.height/2 + joe.height/2){
      return true;
  } else {
    return false;
  }
  
}