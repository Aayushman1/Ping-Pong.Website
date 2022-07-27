var block
var b1,b2,b3,b4
var pP, cP
var score1, score2
var gameState= "start"
var easy,hard
var ok, okImg
var win,winImg
var press,pImg
var bgImg
var start,sImg

function preload(){
  okImg=loadImage("ok (2).png")
  winImg=loadImage("win1.png")
  pImg=loadImage("press.png")
  bgImg=loadImage("ping.PNG")
  sImg=loadImage("start.png")
}

function setup(){
  createCanvas(500,500)

block=createSprite(250,250,20,20)
block.shapeColor="blue"
block.visible=false

b1=createSprite(1,250,2,500)
b1.shapeColor="red"
b2=createSprite(499,250,2,500)
b2.shapeColor="red"
b3=createSprite(250,1,500,2)
b3.shapeColor="red"
b4=createSprite(250,499,500,2)
b4.shapeColor="red"

pP=createSprite(480,250,10,80)
pP.shapeColor="green"
pP.visible=false

cP=createSprite(20,250,10,80)
cP.shapeColor="yellow"
cP.visible=false

easy=createSprite(255,240,90,40)
easy.visible=false

hard=createSprite(255,320,90,40)
hard.visible=false

ok=createSprite(255,440,20,20)
ok.addImage(okImg)
ok.scale=0.2
ok.visible=false

win=createSprite(250,250,10,10)
win.addImage(winImg)
win.scale=1.2
win.visible=false

press=createSprite(250,200,20,20)
press.addImage(pImg)
press.visible=false

/*start=createSprite(250,450,60,30)
start.addImage(sImg)
start.scale=0.5*/

score1=0
score2=0
}

function draw(){
  background(0)

if(gameState=="start"){
  background(bgImg)
  textSize(20)
  fill("orange")
  text("Press 'p' to start the game.",140,450)
  if(keyDown("p")){
    gameState="rules"
  }
  
  }

if(gameState=="rules"){
  fill("orange")
  textSize(50)
  text("Rules",190,150)

  fill("white")
  textSize(20)
  text("Press 'space' button to start the game.",90,220)
  text("Press 'UP_ARROW / DOWN_ARROW'",90,260)
  text("to control left paddle.",90,300)
  text("Press 'w / s' to control right paddle.",90,340)
  text("The player who scores 10 points, wins!",90,380)

  ok.visible=true

  if(mousePressedOver(ok)){
    ok.destroy()
    gameState="choose"
  }
}

if(gameState=="choose"){
  textSize(40)
  fill("green")
  text("Easy",210,250)
  
  fill("red")
  text("Hard",210,340)

  textSize(50)
  fill("lightblue")
  text("Choose Level",100,150)

  if(mousePressedOver(easy)){
    easy.destroy()
    gameState="play1"
  }
  if(mousePressedOver(hard)){
    hard.destroy()
    gameState="play2"
  }
}


if(gameState=="play1"){
   //For playerPaddle
   pP.visible=true
   cP.visible=true
   block.visible=true
   press.visible=true

   if(keyDown("space")){
    block.velocityX=7
    block.velocityY=7
    press.destroy()
   }
if(keyDown("up")){
  pP.y=pP.y-20
}
if(keyDown("down")){
  pP.y=pP.y+20
}

//For computerPaddle
if(keyDown("w")){
  cP.y=cP.y-20
}
if(keyDown("s")){
  cP.y=cP.y+20
}

if(block.x>500){
block.x=250
block.y=250
score1=score1+1
}
if(block.x<0){
  block.x=250
  block.y=250
  score2=score2+1
  }

if(score1==10){
  pP.destroy()
  cP.destroy()
  block.destroy()

  gameState="win1"
}
if(score2==10){
  pP.destroy()
  cP.destroy()
  block.destroy()

  gameState="win2"
}

  block.bounceOff(pP)
  block.bounceOff(cP)
  block.bounceOff(b3)
  block.bounceOff(b4)

  pP.bounceOff(b3)
  pP.bounceOff(b4)
  cP.bounceOff(b3)
  cP.bounceOff(b3)

  textSize(17)
  fill("red")
  text("Score: " + score1, 50, 50)
  text("Score: "+ score2, 390,50)
}
if(gameState=="play2"){
  //For playerPaddle
  pP.visible=true
  cP.visible=true
  block.visible=true
  press.visible=true

  if(keyDown("space")){
   block.velocityX=10
   block.velocityY=10
   press.destroy()
  }
if(keyDown("up")){
 pP.y=pP.y-20
}
if(keyDown("down")){
 pP.y=pP.y+20
}

//For computerPaddle
if(keyDown("w")){
 cP.y=cP.y-20
}
if(keyDown("s")){
 cP.y=cP.y+20
}

if(block.x>500){
block.x=250
block.y=250
score1=score1+1
}
if(block.x<0){
 block.x=250
 block.y=250
 score2=score2+1
 }

if(score1==10){
 pP.destroy()
 cP.destroy()
 block.destroy()

 gameState="win1"
}
if(score2==10){
 pP.destroy()
 cP.destroy()
 block.destroy()

 gameState="win2"
}

 block.bounceOff(pP)
 block.bounceOff(cP)
 block.bounceOff(b3)
 block.bounceOff(b4)

 pP.bounceOff(b3)
 pP.bounceOff(b4)
 cP.bounceOff(b3)
 cP.bounceOff(b3)

 textSize(17)
 fill("red")
 text("Score: " + score1, 50, 50)
 text("Score: "+ score2, 390,50)
}

if(gameState=="win1"){
  win.visible=true
  textSize(20)
  fill("yellow")
  text("Player yellow wins!",170,420)
  fill("red")
  text("Press Ctrl + r to restart game.",125,460)
}
if(gameState=="win2"){
  win.visible=true
  textSize(20)
  fill("green")
  text("Player green wins!",170,420)
  fill("red")
  text("Press Ctrl + r to restart game.",125,460)
}

  drawSprites()


}