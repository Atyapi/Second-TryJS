var x = 0;

function setup() {
  createCanvas(480, 360);
}

function draw() {
  
  //var timer = millis()
  background(0);
  
  //円を表示
  fill(255,0,0);
  noStroke();
  ellipse(x, 180, 60, 60);
  
  x += (240-x)/8;
}

function Easing(Type, from, to, timer1, timer2) {
  if(Type == 'Simple'){
    
  }
}
