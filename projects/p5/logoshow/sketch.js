var img;
var w = 500;
var h = 500;
var timer = new Date();
var points = [];
var prevRad = [];
var stillGrowing = true;

function preload(){
  img = loadImage("projects/p5/logoshow/assets/icon.png");
}

function setup() {
  createCanvas(w,h);
  imageMode(CENTER);
  img.loadPixels();
}

function draw() {
  var backC = color(38,38,38,255);
  background(backC);
  frameRate(60);

  if(points.length < 1500){
    //var now = new Date();
    for (var i = 0; i < 20; i++) {
      //if((now.getTime() - timer.getTime()) >= 50){
      //timer = new Date();
      var newX = random((w/16),(w - (w/16)));
      var newY = random((h/16),(h - (h/16)));
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

  if(stillGrowing){
    for (var i = 0; i < points.length; i++) {
      stillGrowing = false;
      if(points[i].rad == prevRad[i]){
      }else{
        stillGrowing = true;
      }
    }
  }


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
