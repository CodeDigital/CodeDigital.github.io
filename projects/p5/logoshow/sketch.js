var image;
var w = 1000;
var h = 1000;
var timer = new Date();

function preload(){
  image = loadImage("assets/icon.png");
}

function setup() {
  createCanvas(1000,1000);
  imageMode(CENTER);
  image.loadPixels();
}

function draw() {
  frameRate(60);


  var now = new Date();
  if((now.getTime() - timer.getTime()) >= 100){

  }

  for (var i = 0; i < points.length; i++) {
    points[i].grow();
    points[i].show();
  }
}

function Point(x,y){
  this.x = x;
  this.y = y;
  this.speed = random(0,5);
  this.rad = 0
  this.grow = function(){
    this.rad = this.rad + this.speed;
  }

  this.draw = function(){
    var color = image.get(this.x,this.y);
    fill(color);
    ellipse(x,y,w,[h])
  }
}
