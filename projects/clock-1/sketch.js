var cnv

function setup(){
    let h = window.innerHeight - 290;
    let w = window.innerWidth - 20;
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas');
    background(105);
    angleMode(DEGREES);
}
  
function draw() {
	var backC = color("#222222");
  background(backC);
  var size = height - 200;
  var thickness = size / 8;
  var hr = hour();
  var mn = minute();
  var sc = second();
  translate(width/2,height/2);
  rotate(-90);

  noFill();
  var backColor = color(100,100,100);
  stroke(backColor);
//  fill(backColor);
  ellipse(0,0,size,size);
  ellipse(0,0,size-2*thickness,size-2*thickness);
  ellipse(0,0,size-4*thickness,size-4*thickness);

  //strokeWeight(10);
  //Hours Clock
  hourEnd = map(hr,0,24,0,360);
  noFill();
  var hrC = color(255,102,204);
  stroke(hrC);
//  fill(hrC);
  arc(0,0,size,size,0,hourEnd);
//  arc(0,0,size,size,0,hourEnd,PIE);


  //Minutes Clock
  minuteEnd = map(mn,0,60,0,360);
  noFill();
  var mnC = color(204,255,102);
  stroke(mnC);
//  fill(mnC);
  arc(0,0,size - 2*thickness,size - 2*thickness,0,minuteEnd);
//  arc(0,0,size - 40,size - 40,0,minuteEnd,PIE);

  //Seconds Clock
  secondEnd = map(sc,0,60,0,360);
  noFill();
  var scC = color(102,204,255);
  stroke(scC);
  //fill(scC);
  arc(0,0,size - 4*thickness, size - 4*thickness,0,secondEnd);
  //arc(0,0,size - 80, size - 80,0,secondEnd,PIE);

  strokeWeight(thickness);
  stroke(255);
  point(0,0);

  ellipseMode(CENTER);
  fill(255);
  noStroke();
  ellipse(4*thickness,0,thickness,thickness);
  ellipse(3*thickness,0,thickness,thickness);
  ellipse(2*thickness,0,thickness,thickness);

  fill(255)
  //strokeWeight(10);
//  ellipse(0,0,size - 120,size - 120);


  //TEXT Time (DIGITAL)
  //textFont(myFont);
  textAlign(CENTER);
  push();
  rotate(90);
  //textSize(50);
  textSize((thickness * 3) / 4);
  fill(backColor);
  noStroke();
  //text(([hr>9 ? hr : ("0" + '' + hr)] + ':' + [mn>9 ? mn : ("0" + '' + mn)] + ':' + [sc>9 ? sc : ("0" + '' + sc)]),-97,17);
  text([hr>9 ? hr : ("0" + '' + hr)],0,-4*thickness + thickness/4);
  text([mn>9 ? mn : ("0" + '' + mn)],0,-3*thickness + thickness/4);
  text([sc>9 ? sc : ("0" + '' + sc)],0,-2*thickness + thickness/4);

  // text([hr>9 ? hr : ("0" + '' + hr)],175,10);
  // text([mn>9 ? mn : ("0" + '' + mn)],135,10);
  // text([sc>9 ? sc : ("0" + '' + sc)],95,10);

  //pop();
}

function windowResized() {
    let h = window.innerHeight - 290;
    let w = window.innerWidth-20;
    resizeCanvas(w,h);
}