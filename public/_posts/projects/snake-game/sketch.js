p5.disableFriendlyErrors = true;
var dir = "D"
var w;
var h;
var scl = 30;
var fps = 20;
var cols,rows;
var cells = [];
var snake;
var cnv

function unmountScript(){
  remove();
}

function setup(){
  fps = 20;
    h = sketchHeight();
    w = sketchWidth();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-snake-game');
	cols = floor(w/scl);
	rows = floor(h/scl) - ceil(50/scl);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i,j);
			cells.push(cell);
		}
	}
	snake = new Snake(0,0,5);
	newFruit(snake);
}
  
function draw() {
  frameRate(fps);
  var backC = color("#222222");
  background(backC);
  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
  }
  snake.move(dir);
  snake.checkHead(cells);
  fill(255);
  textSize(32);
  text(("Snake Length: " + snake.len),0,0,w,50);
  //text('je',0,0,w,scl);
}

function Snake(i,j,len) {
  this.scX = [];
  this.scY = [];
  this.headX = i;
  this.headY = j;
  this.len = len;

  this.checkHead = function(cells){

    var dead = false;
    //check if fruit eaten with head.
    for (var i = 0; i < cells.length; i++) {
      if(cells[((this.headY * cols) + this.headX)].fruit == true){
        this.len += 1;
        cells[((this.headY * cols) + this.headX)].fruit = false;
        newFruit(snake);
      }
    }

    for(var a = 0;a < this.scX.length - 1; a++){
      if(this.scX[a] == this.scX[this.scX.length - 1] && this.scY[a] == this.scY[this.scY.length - 1]){
        dead = true;
        break;
      }
    }

    if (dead) {
      resetGame();
    }

  }

  this.updateLength = function(len){
    this.len = len;
  }

  this.move = function(dir){
    if(dir === "U"){
      if(this.headY > 0){
        this.headY -= 1;
      }else{
        this.headY = rows - 1;
      }
    }else if (dir === "D") {
      if(this.headY < rows-1){
        this.headY += 1;
      }else{
        this.headY = 0;
      }
    }else if (dir === "L") {
      if(this.headX > 0){
        this.headX -= 1;
      }else{
        this.headX = cols - 1;
      }
    }else if (dir === "R") {
      if(this.headX < cols-1){
        this.headX += 1;
      }else{
        this.headX = 0;
      }
    }

    this.scX.push(this.headX);
    this.scY.push(this.headY);

    if(this.scX.length > this.len){
      this.scX.shift();
      this.scY.shift();
    }
    //print(this.scX[0] + "  -  " + this.scY[0]);
    updateCells(this.scX,this.scY);

  }

}

function resetGame(){
  for (var i = 0; i < cells.length; i++) {
    cells[i].fruit = false;
    cells[i].snake = false;
  }
  snake = new Snake(0,0,5);
  newFruit(snake);
}

function updateCells(snakeX,snakeY){
  for (var i = 0; i < cells.length; i++) {
    if(cells[i].fruit != true){
      cells[i].snake = false;
    }
  }
  for (var i = 0; i < snakeX.length; i++) {
    cells[((snakeY[i] * cols) + snakeX[i])].snake = true;
  }
}

function newFruit(snk){
  var newX;
  var newY;
  var notSnake = false
  while (!notSnake) {
    newX = floor(random(1,cols - 2));
    newY = floor(random(1,rows - 2));
    notSnake = true;
    for (var i = 0; i < snk.scX.length; i++) {
      if(newX == snk.scX[i]|| newY == snk.scY[i]){
        notSnake = false;
      }
    }
    print(newX + "    -    " + newY);
  }
  print("it worked?");
  cells[((newY * cols) + newX)].fruit = true;

}

function Cell(i,j) {
  this.i = i;
  this.j = j;
  var x = i*scl;
  var y = j*scl + 50;
  this.fruit = false;
  this.snake = false;
  this.show = function(){
    //noFill();
    fill(11);
    //stroke(22);
    noStroke();
    if(this.fruit){
      fill(240,50,0);
    }
    if (this.snake) {
      fill(0,255,100);
    }
    rect(x,y,scl,scl);
  }
}

function keyPressed() {
  if (key === 'A') {
    if(dir != "R"){
      dir = "L";
    }
  } else if (key === 'D') {
    if(dir != "L"){
      dir = "R";
    }
  } else if (key === 'W') {
    if(dir != "D"){
      dir = "U";
    }
  } else if (key === 'S') {
    if(dir != "U"){
      dir = "D";
    }
  }
  if (keyCode === LEFT_ARROW) {
    if(dir != "R"){
      dir = "L";
    }
  } else if (keyCode === RIGHT_ARROW) {
    if(dir != "L"){
      dir = "R";
    }
  } else if (keyCode === UP_ARROW) {
    if(dir != "D"){
      dir = "U";
    }
  } else if (keyCode === DOWN_ARROW) {
    if(dir != "U"){
      dir = "D";
    }
  }
}

function windowResized() {
  h = sketchHeight();
  w = sketchWidth();
  resizeCanvas(w,h);
}