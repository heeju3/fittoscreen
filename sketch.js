let cam;
let canvas;
let graphics;

function setup() {
  canvas = createCanvas(displayWidth, displayHeight);
  canvas.position(0,0);
  graphics = createGraphics(displayWidth, displayHeight);
  cam = createCapture(VIDEO);
  cam.size(displayWidth, displayHeight);
  cam.hide();
}

function draw() {
  background(0);
  
  image(cam,0,100,390,661);
  graphics.image(cam,0,0,390,661);
  
  fill(230);
  noStroke();
  ellipse(width/2,800,70);
  fill(230,0,0);
  ellipse(width/2,800,50);
}

function mouseReleased(){
  if(dist(mouseX, mouseY, width/2, 400) <= 35){
    let fileName = 'myCanvas_'+day()+hour()+minute()+second()+'.jpg'
    saveCanvas(canvas, fileName);
    saveCanvas(graphics, fileName);
  }
}

