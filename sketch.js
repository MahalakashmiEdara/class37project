var canvas,backgroundImage,database,form,player,car1,car2,track;
var playerCount=0,allPlayers,car1Image,car2Image,trackImage,gameState=0,cars=[];
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Image = loadImage("./assets/car1.png");
  car2Image = loadImage("./assets/car2.png");
  trackImage = loadImage("./assets/track.jpg");
  

}
function setup(){

  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

}



function draw() {
  background(backgroundImage);
  if(playerCount ===2){
    game.update(1);
  }
  if (gameState === 1){
    game.play();
  }


}