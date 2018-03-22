p5.disableFriendlyErrors = true;
var w = 1800;
var h = 1200;
var fps = 100;
var start;
var now;
var l1 = 250;
var l2 = 250;
var x1 = 0;
var x2 = -2 * w;
var y1 = 0;
var y2 = -2 * h;
var m1 = 400;
var m2 = 400;
var o1 = Math.PI/2;
var o2 = Math.PI/2;
var v1 = 0;
var v2 = 0;
var a1 = 0.000;
var a2 = 0.0;
var g = 2;
var pXs = [];
var pYs = [];
var sizer = 200;
var back;
var pX2 = -2 * w;
var pY2 = -2 * h;
var yChange = 00;

function setup() {
  createCanvas(w,h);
  var backC = color(38,38,38,255);
  background(backC);
  back = createGraphics(w,h);
  //back.resize(w/,h)
  back.background(backC);
  back.translate(w/4,h/4);
  start = new Date();
  //o1 = getRandomArbitrary(Math.PI/2,(3/2)*Math.PI);
  //o2 = getRandomArbitrary(0,2*Math.PI);
}

function draw() {
  translate(0,-200);
  frameRate(fps);
  var backC = color(38,38,38,255);
  //background(backC);
  pX2 = x2;
  pY2 = y2;
  //rotate(Math.PI/2);
  translate(w/2,(h-yChange)/2);

  for (var i = 0; i < pXs.length; i++) {
    fill(200);
    ellipse(pXs[i],pYs[i],5);
  }
  //  v1 = v1 * 0.99999;
  //  v2 = v2 * 0.99999;
  now = new Date();
  var time = (now.getTime() - start.getTime()) / 1000;
  //image(trails,0,0,w,h);
  var mu  =  1 + m1/m2;
  x1 = l1 * Math.sin(o1);
  y1 = l1 * Math.cos(o1);
  x2 = x1 + l2 * Math.sin(o2);
  y2 = y1 + l2 * Math.cos(o2);
  a1  =  (g*(Math.sin(o2)*Math.cos(o1-o2)-mu*Math.sin(o1))-(l2*v2*v2+l1*v1*v1*Math.cos(o1-o2))*Math.sin(o1-o2))/(l1*(mu-Math.cos(o1-o2)*Math.cos(o1-o2)));
  a2  =  (mu*g*(Math.sin(o1)*Math.cos(o1-o2)-Math.sin(o2))+(mu*l1*v1*v1+l2*v2*v2*Math.cos(o1-o2))*Math.sin(o1-o2))/(l2*(mu-Math.cos(o1-o2)*Math.cos(o1-o2)));

  v1 = v1 + a1;
  v2 = v2 + a2 ;

  o1 = o1 + v1 ;
  o2 = o2 + v2 ;
  //print(o2);

  //append(pXs,x2);
  //append(pYs,y2);
  if(pXs.length >= 100){
    pXs.shift();
    pYs.shift();
  }

  translate(-(w/2),-((h-yChange)/2));
  back.strokeWeight(2);
  // var r = map(noise(oX,rY),0,1,0,255);
  // var g = map(noise(oX + 1,gY),0,1,0,255);
  // var b = map(noise(oX + 2,bY),0,1,0,255);
  // oX = oX + 0.01;
  // rY = rY + 0.01;
  // gY = gY + 0.01;
  // bY = bY + 0.01;
  var rC = color(255,0,200,255);
  //back.stroke(rC);
  //var rC = color(getRandomArbitrary(0,255),getRandomArbitrary(0,255),getRandomArbitrary(0,255),255);
  back.stroke(rC);
  //back.line(0,0,pX2/2,pY2/2);
  if(pX2 != (-2 * w)){
    back.line(pX2/2,pY2/2,x2/2,y2/2);
    image(back,0,0,w,h);
    translate(w/2,(h-yChange)/2);

    //Draws Origin
    fill(255);
    noStroke();
    ellipse(0,0,20);

    stroke(255);
    strokeWeight(10);
    line(0,0,x1,y1);
    line(x1,y1,x2,y2);
    noStroke();
    fill(255,0,200,255);
    ellipse(x2,y2,40);
    ellipse(x1,y1,40);
  }

}

function keyPressed(){
  if (key === 'r' || key === 'R') {
    var backC = color(38,38,38,255);
    background(backC);
    back.background(backC);
    pX2 = -2 * w;
    pY2 = -2 * h;
    x1 = 0;
    x2 = -2 * w;
    y1 = 0;
    y2 = -2 * h;
    o1 = getRandomArbitrary(Math.PI/2,(3/2)*Math.PI);
    o2 = getRandomArbitrary(0,2*Math.PI);
    print(o1);
    v1 = 0;
    v2 = 0;
    a1 = 0;
    a2 = 0;
  }
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
