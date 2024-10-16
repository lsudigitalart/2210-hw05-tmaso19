function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES)
}

function draw() {
  background(250);

  push()
  translate(width/2, height/2);
  translate(100, 30)

  rotate(45)
  fill(75, 151, 188)
  noStroke()
  square(0, 0, 110)
  pop();

  push()
  translate(width/2, height/2);
  translate(45,50)

  
  fill(75, 151, 188)
  noStroke()
  square(0, 0, 110)
  pop();
  
  push()
  translate(240, 0)
 
  fill(249, 213, 73)
  noStroke()
  triangle(0, 150, 58, 20, 120, 150)
  pop()

  push()
  translate(width/2, height/2)
  translate(160, 0)
 
  rotate(180)
  fill(249, 213, 73)
  noStroke()
  triangle(0, 150, 58, 20, 120, 150)
  pop()

  push()

  fill(28, 23, 11)
  noStroke()
  beginShape()
  vertex(95, 10)
  vertex(120, 60)
  vertex(180, 60)
  vertex(125, 95)
  vertex(160, 170)
  vertex(95, 120)
  vertex(35,170)
  vertex(65, 95)
  vertex(10, 60)
  vertex(70, 60)
  endShape(CLOSE)
  pop()
  
  push()
  translate(10, 1)

  fill(210, 67, 87)
  noStroke()
  beginShape()
  vertex(85, 232)
  vertex(110, 255)
  vertex(150, 255)
  vertex(140, 290)
  vertex(160, 310)
  vertex(129, 330)
  vertex(117, 370)
  vertex(85, 350)
  vertex(50, 370)
  vertex(40, 330)
  vertex(10, 310)
  vertex(30, 290)
  vertex(20, 255)
  vertex(60, 255)
  endShape(CLOSE)
  pop()
  
  












 
} 
