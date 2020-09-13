function setup() {
  createCanvas(800,400);
  fixedrectangle = createSprite(400, 200, 50, 50);
  fixedrectangle.shapeColor = "green";
  fixedrectangle.debug = true;
  movingrectangle = createSprite(500,39,40,60);
  movingrectangle.shapeColor = "green";
  movingrectangle.debug = true;
}

function draw() {
  background("cyan");
  movingrectangle.x = World.mouseX;
  movingrectangle.y = World.mouseY;
  if(movingrectangle.x - fixedrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
    fixedrectangle.x - movingrectangle.x < movingrectangle.width/2 + fixedrectangle.width/2 &&
    movingrectangle.y - fixedrectangle.y < movingrectangle.width/2 + fixedrectangle.width/2 &&
    fixedrectangle.y - movingrectangle.y < movingrectangle.width/2 + fixedrectangle.width/2){
    fixedrectangle.shapeColor = "red";
    movingrectangle.shapeColor = "red";
  } else {
    fixedrectangle.shapeColor = "green";
    movingrectangle.shapeColor = "green";
  }
  drawSprites();
}