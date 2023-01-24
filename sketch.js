var x = 0;
var y = 0;
var timer = 0;
let atyapi = loadImg('text.png');

function preload(){
  atyapi = loadImg('text.png');
}

function setup() {
  createCanvas(480, 360);
}

function draw() {
  background(0);
  
  x += (240-x)/8;
  image(atyapi,240,180);
}

function PositionSet(PosX, PosY){
  x = PosX+240;
  y = PosY+180;
}
