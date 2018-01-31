var dir = "D"
var w = 1401;
var h = 701;
var scl = 25;
var fps = 10;
var cols,rows;
var cells = [];

function setup() {
  // put setup code here
  createCanvas(w,h);
  cols = floor(w/scl);
  rows = floor(h/scl);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {

      var cell = new Cell(i,j);
      cells.push(cell);

    }
  }
}

function draw() {
  background(33);
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
  }
}

function Snake() {

}

function Cell(i,j) {
  this.i = i;
  this.j = j;
  var x = i*scl;
  var y = j*scl;
  this.fruit = false;
  this.snake = false;
  this.show = function(){
    noFill();
    stroke(255);
    if(this.fruit){
      fill(240,50,0);
    }
    if (this.snake) {
      fill(0,255,100);
    }
    rect(x,y,scl,scl);
}
}
