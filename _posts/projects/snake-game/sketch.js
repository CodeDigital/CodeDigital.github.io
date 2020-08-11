p5.disableFriendlyErrors = true;
var dir = "D"
var w;
var h;
var scl = 30;
var fps = 30;
var cols,rows;
var cells = [];
var snake;
var cnv
let newStyle = false;
let dt = 1/fps;
let prevTime;
let rumble = false;
let touchX, touchY;

function unmountScript(){
  remove();
}

function setup(){
  h = sketchHeight();
  w = sketchWidth();
  cnv = createCanvas(w, h);
  if(w < 750){
    scl = 20;
    fps = 10;
    dt = 1/fps;
  }
  cnv.parent('p5-canvas-snake-game');
	cols = floor(w/scl) - 1;
  rows = floor(h/scl) - ceil(50/scl);

	for (var j = 0; j < rows; j++) {
		for (var i = 0; i < cols; i++) {
			var cell = new Cell(i,j);
			cells.push(cell);
		}
	}
  snake = new Snake(0,0,5);
  newFruit(snake);
  prevTime = currentDate().getTime();
}
  
function draw() {
  // clear();
  push();
  if(rumble){
    translate((scl/2) + (snake.len - 5)*(Math.random()-0.5), (snake.len - 5)*(Math.random()-0.5));
  }else{
    translate((scl/2), 0);
  }

  // rotate((Math.random()-0.5)/(5*Math.PI));
  currentTime = currentDate().getTime();
  let elapsedTime = (currentTime - prevTime) / 1000;
  // frameRate(fps);
  var backC = color("#222222");
  drawingContext.shadowColor = "none";
  drawingContext.shadowBlur = 0;
  background(backC);
  noStroke();
  fill(11);
  rect(0, 50, cols*scl, rows * scl);

  for (var i = 0; i < cells.length; i++) {
    cells[i].show();
  }

  // for (var i = 0; i < cells.length; i++) {
  //   cells[i].show();
  // }

  // if(elapsedTime > dt){
  while(elapsedTime > dt){
    snake.move(dir);
    snake.checkHead(cells);
    elapsedTime -= dt;
    prevTime = currentTime;
  }

  // fill(255);
  // drawingContext.shadowBlur = 0;
  // drawingContext.shadowColor = "none";
  // rect(0, (rows+1)*scl, width, 2*scl);


  pop();
  drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = "white";
  fill(255);
  if(w < 750){
    textSize(16);
  }else{
    textSize(32);
  }
  textAlign(LEFT);
  text(("Snake Length: " + snake.len),10,10,w,50);
  textAlign(RIGHT);
  text(("Rumble is " + (rumble ? "ON":"OFF")),0,10,w,50)
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
    if(cells[((this.headY * cols) + this.headX)].fruit == true){
      this.len += 1;
      cells[((this.headY * cols) + this.headX)].fruit = false;
      newFruit(snake);
      dt *= 0.999;
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
    cells[i].snakePercent = -1;
  }
  snake = new Snake(0,0,5);
  newFruit(snake);
}

function updateCells(snakeX,snakeY){
  for (var i = 0; i < cells.length; i++) {
    if(cells[i].fruit != true){
      cells[i].snake = false;
    }
    cells[i].snakePercent = -1;
  }
  for (var i = 0; i < snakeX.length; i++) {
    cells[((snakeY[i] * cols) + snakeX[i])].snake = true;
    cells[((snakeY[i] * cols) + snakeX[i])].snakePercent = (i+1)/snakeX.length;
  }
}

function newFruit(snk){
  var newX;
  var newY;
  var notSnake = false
  while (!notSnake) {
    newX = floor(random(0,cols));
    newY = floor(random(0,rows));
    notSnake = true;
    for (var i = 0; i < snk.scX.length; i++) {
      if(newX == snk.scX[i] && newY == snk.scY[i]){
        notSnake = false;
        break;
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
  this.snakePercent = -1;
  this.show = function(){

    if(!this.snake && !this.fruit){
      //noFill();
      // fill(11);
      //stroke(22);
      // noStroke();
      // drawingContext.shadowBlur = 0;
      // drawingContext.shadowColor = "none";
      // rect(x,y, scl, scl);
      return;
    }

    //noFill();
    fill(11);
    //stroke(22);
    noStroke();
    // rect(x,y, scl, scl);
    let cellColor;
    let edgeRadius = 0;
    if(this.fruit){
      cellColor = color(240,50,0);
      edgeRadius = 10;
    }
    if (this.snake) {
      cellColor = color(0,255,100);
    }
    let sizeFunction = 1;
    if(this.snakePercent > 0 && newStyle){
      sizeFunction = (sigmoid(this.snakePercent, 3, 0.5) + 0.2 > 1 ? 1:sigmoid(this.snakePercent, 3, 0.5) + 0.2);
    }
    let offset = scl * (1 - sizeFunction) / 2;
    drawingContext.shadowBlur = 20;
    drawingContext.shadowColor = cellColor.toString('#rrggbb');
    // if(!this.fruit){
    //   blendMode(LIGHTEST);
    // }
    // let shaderReach = 10;
    // let shaderColor = color(red(cellColor), green(cellColor), blue(cellColor), 20);
    // noFill();
    // stroke(shaderColor);
    // for(let i = shaderReach; i > 0; i--){
    //   strokeWeight(50 * (i+1)/shaderReach);
    //   rect(offset + x,offset + y,sizeFunction * scl, sizeFunction * scl, edgeRadius);  
    // }

    // blendMode(BLEND);
    noStroke();
    // stroke(0);
    // strokeWeight(0.5);
    fill(cellColor);
    rect(offset + x,offset + y,sizeFunction * scl, sizeFunction * scl, edgeRadius);

  }
}

function touchStarted(){
  touchX = mouseX;
  touchY = mouseY;
}

function touchEnded(){
  let dx = mouseX - touchX;
  let dy = mouseY - touchY;

  if(dx + dy == 0){
    return;
  }

  if(Math.abs(dx) > Math.abs(dy)){
    if(dx > 0){
      if(dir != "L"){
        dir = "R";
      }
    }else{
      if(dir != "R"){
        dir = "L";
      }
    }
  }else{
    if(dy > 0){
      if(dir != "U"){
        dir = "D";
      }
    }else{
      if(dir != "D"){
        dir = "U";
      }
    }
  }
}

function keyPressed() {
  if (key === 'a') {
    if(dir != "R"){
      dir = "L";
    }
  } else if (key === 'd') {
    if(dir != "L"){
      dir = "R";
    }
  } else if (key === 'w') {
    if(dir != "D"){
      dir = "U";
    }
  } else if (key === 's') {
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

function sigmoid(x, a, b){
  return 1 / (1 + Math.exp(-a * (x - b)));
}

function currentDate(){
  return new Date();
}

function toggleRumble(){
  rumble = !rumble;
}

document.getElementById('snake-game-rumble').onclick = toggleRumble;