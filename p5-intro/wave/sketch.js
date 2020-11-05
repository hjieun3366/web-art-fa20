let angle = 0;
let w = 24;
let ma;
let maxD;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent("#sketch-parent");
  ma = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(0);
  ortho(-400, 400, 400, -400, 0, 1000);
  
  rotateX(QUARTER_PI);
  rotateY(ma);
  
  for (let z = 0; z < height; z += w) {
  for (let x = 0; x < width; x += w) {
    push();
    let d = dist(x, z, width / 2, height / 2);
    let offset = map(d, 0, maxD, -1, 1);
    let a = angle + offset;
    let h = map(sin(a), -1, 1, 0, 200);
    noFill(255);
    strokeWeight(0.25);
    stroke(255);
    translate(x - width / 2, 0, z - height / 2);
    //normalMaterial();
    //ambientMaterial();
    box(w - 5, h, w - 5);
    //rect(x - width / 2 + w / 2, 0, w - 2, h);
    pop();
  }
        //offset += 0.1;
}

  angle+=0.1;
}