//global variables
//declare variable 존재하지만 값이 없는 상태
let x;
let y;
let c;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.parent("#sketch-parent");
  //배경색을 여기에 넣으면 한번만 생김
  background(0);
  //랜덤 색을 여기에 넣으면 한줄씩 draw에 넣으면 하나씩
  c = color(random(255), random(255), random(255));
  
  //initialize variables (give them values)
  x = 0;
  y = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  //background(127, 0, 150);
  
  fill(x, y, x/y);
  ellipse(x, y, 20, 20);
  
  //each frame, increment x and y
  x+=2;
  y+=4.3;
  
  //if circle reaches bottom of screen, reset back to top
  if(y > height){
     y = 0;
     c = color(random(255), random(255), random(255));
     }
  
  if(x > width){
     x = 0;
     c = color(random(255), random(255), random(255));
     }
}