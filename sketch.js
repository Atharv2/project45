var ironman, ironman_running, ironman_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacle,obstacleImage,obstacleGroup;


var newImage;

function preload(){
  ironman_running = loadAnimation("iron man 1.png","iron man 2.png","iron man 3.png","iron man 4.png","iron man 5.png","iron man 6.png");
  
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  obstacleImage = loadImage("hulk 1.png","hulk 2.png","hulk 3.png","hulk 4.png","hulk 5.png","hulk 6.png","hulk 7.png","hulk 8.png","hulk 9.png","hulk 10.png");
 
}

function setup() {
  createCanvas(600, 200);

  ironman = createSprite(50,160,20,50);
  ironman.addAnimation("running",ironman_running);
  // trex.addAnimation("collided",trex_collided)
  ironman.depth = ironman.depth + 1;
  ironman.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  obstacleGroup=createGroup();
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& ironman.y >= 100) {
    ironman.velocityY = -12;
  }
  
  ironman.velocityY = ironman.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  ironman.collide(invisibleGround);
  
  
  if(obstacleGroup.isTouching(ironman))
  {
    obstacleGroup.destroyEach(-1);
  }
  
  //spawn the clouds
  spawnClouds();
  spawnObstacle();
  drawSprites();
}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth =ironman.depth
    ironman.depth = ironman.depth + 1;
    }
    
}
function spawnObstacle(){
  if(frameCount % 120 ===0){
    obstacle = createSprite(600,150,50,50);
    obstacle.addImage(obstacleImage)
    obstacle.x=Math.round(random(500,600))
    obstacle.scale= 0.5;
    obstacle.velocityX= -5;
    obstacleGroup.add(obstacle);
    obstacleGroup.collide(invisibleGround);
    obstacle.lifetime = 300
  }
}
