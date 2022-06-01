var sTheta, hTheta, mTheta ; 
var h, m, s ;
function setup() {
  createCanvas(500, 500) ;
  background(255) ;
}
function draw() {
  clockface() ; 
  updateTime() ;
  drawHand(120, height/2) ;
}
function timeToAngle(h,  m,  s) {
  var theta = new Array(2);
  sTheta = radians(270 + 6 * s) ; 
  mTheta =  radians(270 + 6 * m); 
  hTheta =  radians(270 + 30 * h); 
  return theta;
}

function drawHand(amplitude, offset) {
  var sx, sy, mx, my, hx, hy ; 
  timeToAngle(h, m, s) ;

  stroke(255, 0, 0) ; 
  strokeWeight(1);
  sy = sin(sTheta) ; 
  sy = amplitude * sy + offset ;
  sx = cos(sTheta) ; 
  sx = amplitude * sx + offset ;
  line(sx, sy, width/2, height/2) ; 

  stroke(0) ; 
  strokeWeight(2);
  my = sin(mTheta) ; 
  amplitude = 100 ;
  my = amplitude * my + offset ;
  mx = cos(mTheta) ; 
  mx = amplitude * mx + offset ;
  line(mx, my, width/2, height/2) ; 

  hy = sin(hTheta) ; 
  strokeWeight(3);
  amplitude = 80 ; 
  hy = amplitude * hy + offset ;
  hx = cos(hTheta) ; 
  hx = amplitude * hx + offset ;
  line(hx, hy, width/2, height/2) ;
}

function clockface() {
  stroke(0) ; 
  fill(130,170,255) ; 
  circle(width/2, height/2, 300) ;
  fill(100,100,100,100) ;
  circle(width/2, height/2, 40) ;
  
  //second ticks
  strokeWeight(3);
  beginShape(POINTS);
  for (var a = 0; a < 360; a+=6) {
    var angle = radians(a);
    var x = width/2 + cos(angle) * 120;
    var y = height/2 + sin(angle) * 120;
    vertex(x, y);
  }
}

function updateTime() {

  h = hour() ; 
  print("hour: " + h) ;
  m = minute() ; 
  print(" minute: " + m) ;
  s = second() ;
  println(" second: " + s) ;
}
