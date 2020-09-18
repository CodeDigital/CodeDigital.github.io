const maxSize = 0;
const minSize = 50;
const space = 0;
const mouseRadius = 100;
var circle = false;
var cells = [];

const pSpeed = 10;
const pulseRadius = 50;
var pulses = [];

function setup() {
  createCanvas(800, 800);
  var cols = width / (max(minSize, maxSize) + 2 * space);
  var rows = height / (max(minSize, maxSize) + 2 * space);

  for (var a = 0; a < rows; a++) {
    for (var b = 0; b < cols; b++) {
      var cx = b * (2 * space + max(minSize, maxSize)) + (minSize > maxSize ? ((minSize - maxSize) / 2):(0));
      var cy = a * (2 * space + max(minSize, maxSize)) + (minSize > maxSize ? ((minSize - maxSize) / 2):(0));
      var c = new Cell(cx, cy);
      append(cells, c);

    }
  }
}

function draw() {
  //translate(-max(minSize,maxSize),-max(minSize,maxSize));
  background(30);

  cells.forEach(function (c) {
    c.update();
  });

  pulses.forEach(function (p, index) {
    p.update();
    if (p.check()){
    	pulses.splice(index, 1);
    }
  });

  cells.forEach(function (c) {
    c.show();
  });
  
  

}

function mouseClicked() {
  var newP = new Pulse(mouseX, mouseY);
  append(pulses, newP);
}

function keyPressed() {
  if (key == " ") {
    //print('space');
    circle = !circle;
    //print(circle);
    var cols = width / (max(minSize, maxSize) + 2 * space);
    var rows = height / (max(minSize, maxSize) + 2 * space);
    cells = [];
    for (var a = 0; a < rows; a++) {
      for (var b = 0; b < cols; b++) {
        var cx = b * (2 * space + max(minSize, maxSize)) + (minSize > maxSize ? ((minSize - maxSize) / 2):(0));
        var cy = a * (2 * space + max(minSize, maxSize)) + (minSize > maxSize ? ((minSize - maxSize) / 2):(0));
        var c = new Cell(cx, cy);
        append(cells, c);
      }
    }
  }
}

function Cell(x, y) {

  if (circle) {
    this.x = x + (maxSize / 2);
    this.y = y + (maxSize / 2);
  } else {
    this.x = x;
    this.y = y;
  }
  this.sr = 0;
  this.offset = 0;
  this.size = maxSize

  this.update = function () {
    if (circle) {
      var d = dist(mouseX, mouseY, this.x, this.y);
    } else {
      var d = dist(mouseX, mouseY, this.x + (maxSize / 2), this.y + (maxSize / 2));
    }
    this.size = map(d, 0, mouseRadius, minSize, maxSize, true);
    this.sr = map(d, 0, mouseRadius, 20, 0, true);
    this.offset = (maxSize - this.size) / 2;
    //var dSize = (mainSize / d) * sizeRation;
    //this.size = mainSize - dSize;
  }

  this.changeSize = function (d) {
    //console.log(d);
    if (d < pulseRadius && ((map(d,0,pulseRadius,minSize,maxSize,true) < this.size && maxSize > minSize) || (map(d,0,pulseRadius,minSize,maxSize,true) > this.size && maxSize < minSize))) {
      this.size = map(d, 0, pulseRadius, minSize, maxSize, true);
      this.sr = map(d, 0, pulseRadius, 20, 0, true);
      this.offset = (maxSize - this.size) / 2;
    }
  }

  this.show = function () {
    //blendMode(DIFFERENCE);
    noStroke();
    fill(0, 200, 255);
    if (circle) {
      ellipse(this.x, this.y, this.size, this.size);
    } else {
      rect(this.x + this.offset, this.y + this.offset, this.size, this.size, this.sr);
    }
  }
}

function Pulse(x, y) {
  this.x = x;
  this.y = y;
  this.disp = 0;
  //this.start = new Date();
  //this.end = new Date().setTime;


  this.update = function () {
    this.disp = this.disp + pSpeed;

    var thisX = this.x;
    var thisY = this.y;
    var thisD = this.disp;
    //print(thisX);

    cells.forEach(function (c) {
      if(circle){
      var distP = dist(thisX, thisY, c.x, c.y);
      }else{
      var distP = dist(thisX,thisY,c.x + (maxSize / 2), c.y + (maxSize/2));
      }
      //console.log(distP);
      var deltaD = abs(thisD - distP);
      c.changeSize(deltaD);

    });
  }
  
  this.check = function(){
    var maxDist = max(width - (this.x + this.disp), this.x - this.disp, height - (this.y + this.disp), this.y - this.disp);
    
    if(maxDist + max(width, height) < 0){
    	return true;
    }else{
  	return false;
    }
  }
}