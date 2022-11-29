// This is for a square canvas. A helper function moves the origin to the center of the canvas and optionally shows grid lines for a cartesian plane. This means that all transforms afterwards are with respect to this new coordinate system.


let CANVAS_SIZE = 400;
let GRID_SQUARES = 10;
let STEP = CANVAS_SIZE/GRID_SQUARES;
let NUM_SECTIONS = 13;

var COLORS = [[216, 164, 127],[239, 131, 84],[238, 75, 106],[223, 59, 87],[15, 113, 115]]


function setupStandardAxes(showLines){
  push()
  translate(CANVAS_SIZE/2,CANVAS_SIZE/2)
  scale(1.0,-1.0)
  
  
}

function redcube(){
    fill(222,95,82)
  square(240,35,20)
}
function redcubes(){
    fill(random(255),random(255),random(255))
  square(random(200,240),random(-150,-120),15)
      fill(random(255),random(255),random(255))
  square(random(220,240),random(-145,-100),15)
        fill(random(255),random(255),random(255))
  square(random(250,280),random(-100,-80),15)
}

function greenrectang(){
    fill(95,175,82)
  rect(240,100,40,20)
      fill(140,140,140)
  rect(242,102,30,15)
}

function greycrube(){
    fill(100,100,100)
  square(235,-75,50)
}

function straightcrube(rrotat){
    fill(10,10,10)
    rotate(-rrotat)
  square(200,100,20)
      rotate(rrotat)
}

function redcubeincube(){
      fill(50,50,50)
  square(210,20,20)
      fill(72,50,100)
   square(210,20,15)
}

function whitecube(){
  
      fill (255,255,255)
  square(250,150,20)
}

function bottomwhitecube(){
  
      fill (255,255,255)
  square(250,-170,20)
}

function drawGridLines(){
  
  fill(55,80,60)
  circle(0,0,5)
  stroke(200)
  for(var i = -GRID_SQUARES;i<GRID_SQUARES;i++){
    
      line(i*STEP,-GRID_SQUARES/2*STEP,i*STEP,GRID_SQUARES/2*STEP)
      
  }
  for(var j = -GRID_SQUARES;j<GRID_SQUARES;j++){
    
      line(-GRID_SQUARES/2*STEP,j*STEP,GRID_SQUARES/2*STEP,j*STEP)
      
  }
}

function setup() {
let R =  random(20,40)
  createCanvas(CANVAS_SIZE, CANVAS_SIZE);
  background(160);
  angleMode(DEGREES);
  setupStandardAxes();
rotate(R)
              drawGridLines()
  for (var i = 0; i <NUM_SECTIONS; i++){
     square(200,2*STEP,10)
         redcubeincube()
         redcube()
    greenrectang()
    greycrube()
    redcubes()
        whitecube()
    bottomwhitecube()
    straightcrube(R)
    drawGridLines()
translate(-720/NUM_SECTIONS, 0);
  }
  
  
}

function draw() {
  
  
}
