var x = 0;
var TextImg;

function preload(){
  TextImg = loadImg('text.svg');
}

function setup() {
  createCanvas(480, 360);
}

function draw() {
  
  //var timer = millis()
  background(0);
  
  x += (240-x)/8;
  image(TextImg,x,180);
  
}

function Easing(Type, from, to, timer1, timer2) {
  if(Type == 'Simple'){
    
  }
}
