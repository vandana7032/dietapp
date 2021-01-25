var women,men;


function setup() {
  createCanvas(800,400);
  women=createSprite(400, 200, 150, 50);
  women.shapeColor="white";
  men=createSprite(400,330,150,50);
  men.shapeColor="white";
  
}

function draw() {
  background("pink");  
 if(mousePressedOver(women)){
   women();
  
 }

 if(mousePressedOver(men)){
  men();
}
 
  drawSprites();
  fill("red");
  textSize(25);
  text("select your gender",300,100);
  textSize(20);
  text("Women",350,200);
  text("Men",350,330);
}

function women(){
  women.hide();
  men.hide();
  fill("white");
   textSize(12);
   text("5",100,100);

}
function men(){
  women.hide();
  men.hide();
}