let imgFundo;
let xBola = 120;
let yBola = 330;
function preload() {
  imgFundo=loadImage("quadra.jpg");
  }
function setup() {
  createCanvas(600, 400);
  }
function draw() {
  image(imgFundo, 0, 0, width, height);
  textSize(40);
  text("🏀", xBola, yBola);
  }
  function keyPressed(){
  if (keyCode === LEFT_ARROW){
    xBola -=10;
  }
  if (keyCode === RIGHT_ARROW){
    xBola +=10;
  }
  if (keyCode === UP_ARROW){
    yBola -=10;
  }
if (keyCode === DOWN_ARROW){
  yBola += 10;
}
  }
