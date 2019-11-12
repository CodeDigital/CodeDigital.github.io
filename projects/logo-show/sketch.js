var cnv
p5.disableFriendlyErrors = true;
var img;
var w = 500;
var h = 500;
var timer = new Date();
var points = [];
var prevRad = [];
var stillGrowing = true;

function preload(){
  img = loadImage("projects/logo-show/assets/icon.png");
}

function setup(){
    //h = window.innerHeight - 290;
    //w = window.innerWidth - 20;
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas');
	imageMode(CENTER);
	img.loadPixels();
}
  
function draw() {
var backC = color("#222222");
  background(backC);
  frameRate(60);

  if(points.length < 2000){
    //var now = new Date();
    for (var i = 0; i < 20; i++) {
      //if((now.getTime() - timer.getTime()) >= 50){
      //timer = new Date();
      var newX = getRandomInt((w/16),(w - (w/16)));
      var newY = getRandomInt((h/16),(h - (h/16)));
      var newPoint = new Point(newX,newY);
      points.push(newPoint);
      prevRad.push(0);
      //print('1');
      //}
    }
  }

  for (var i = 0; i < points.length; i++) {
    if(stillGrowing){
      points[i].grow();
      prevRad[i] = points[i].rad;
    }
    //print(points[i].rad);
    points[i].show();
  }

  if(stillGrowing && points.length == 1500){
    for (var i = 0; i < points.length; i++) {
      stillGrowing = false;
      if(points[i].rad == prevRad[i]){
      }else{
        stillGrowing = true;
      }
    }
  }else{
    stillGrowing = true;
  }

//   var len = points.length;
//   for (var i = 0; i < len; i++) {
//     if((mouseX <= points[i].x + (points[i].rad * 0.9) && mouseX >= points[i].x - (points[i].rad * 0.9)) && (mouseY <= points[i].y + (points[i].rad * 0.9) && mouseY >= points[i].y - (points[i].rad * 0.9))){
//       splice(points,1,i);
//       splice(prevRad,1,i);
// break;
//     }
//   }
}

function Point(x,y){
  this.x = x;
  this.y = y;
  this.speed = random(0.1,2);
  this.rad = 0;
  this.canGrow = true;
  this.color = random(10,255);
  this.color = img.get(this.x,this.y);
  this.grow = function(){
    this.canGrow = check(this);
    if(this.canGrow){
      this.rad = this.rad + this.speed;
    }
  }

  this.show = function(){
    //this.color = img.get(this.x,this.y);
    //this.color = random(0,255);
    fill(this.color);
    noStroke();
    ellipse(this.x,this.y,this.rad * 2);
  }
}

function check(p){
  for (var i = 0; i < points.length; i++) {
    if(points[i].x != p.x && points[i].y != p.y){
      //var dist = int(dist(points[i].x,points[i].y,p.x,p.y));
      var d = (dist(points[i].x,points[i].y,p.x,p.y));
      //print(d);
      if(d < (points[i].rad + p.rad)){
        return false;
        break;
      }
    }
  }
  return true;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}


// function windowResized() {
//     let h = window.innerHeight - 290;
//     let w = window.innerWidth-20;
//     resizeCanvas(w,h);
// }