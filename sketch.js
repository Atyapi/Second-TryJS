var x = 0;
var y = 0;
var timer = 0;
var textimg;

function preload(){
  textimg = loadImg('text.png');
}

function setup() {
  createCanvas(480, 360);
}

function draw() {
  background(0);
  
  x += (240-x)/8;
  image(textimg,240,180);
}

function PositionSet(PosX, PosY){
  x = PosX+240;
  y = PosY+180;
}
