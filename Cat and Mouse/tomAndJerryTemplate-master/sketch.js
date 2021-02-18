var tom, jerry, bg, tomImg, jerryImg
var jerrywalk,jerryLast,tomwalk,tomlast
function preload() {
    tomImg = loadAnimation(cat1.png);
    tomwalk = loadAnimation(cat2.png,cat3.png);
    tomlast = loadImage(cat4.png);
    jerrrywalk = loadAnimation(mouse2.png,mouse3.png);
    jerrylast = loadAnimation(mouse4.png)
    jerryImg = loadAnimation(mouse1.png);
    bgImg = loadAnimation(garden.png);
}

function setup(){
    createCanvas(1000,800);

    jerry = createSprite(200,450);
    jerry.addAnimation("j",jerryImg);
    tom = createSprite(800,460);
    tom.addAnimation("t",tomImg)
    bg = createSprite(500,400);

    //create tom and jerry sprites here
}

function draw() {
    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x<(tom.width - jerry.width)/2){
      tom.velocityX = 0; 
      tom.changeAnimation("finish",tomlast)
      jerry.changeAnimation("finsh",jerryLast)
      tom.x = 800;
    }
    drawSprites();
}


function keyPressed(){
    if (keyCode === LEFT_ARROW){
        tom.velocityX = -5;
        tom.changeAnimation("walking",tomwalk)
        jerry.changeAnimation("walk",jerrywalk)

    }
    //For moving and changing animation write code here


}