var fr , mr;



function setup() {
  createCanvas(800,400);
  fr = createSprite(200, 200, 100,50);
  fr.shapeColor = "green";
  mr = createSprite(400, 200, 50, 100);
  mr.shapeColor = "green"; 
}

function draw() {
  background("black"); 

  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if ( mr.x - fr.x < mr.width/2 + fr.width/2  
   && fr.x - mr.x < mr.width/2 + fr.width/2 
    && mr.y - fr.y < fr.height/2  + mr.height/2 
    && fr.y - mr.y = fr.height/2 + mr.height/2){
    fr.shapeColor = "red";
    mr.shapeColor = "red";
  } else 
  {
    fr.shapeColor = "green";
    mr.shapeColor = "green";
  }
  drawSprites();
}