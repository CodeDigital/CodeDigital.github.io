p5.disableFriendlyErrors = true;
var size =20;
var cols, rows;
var cells = [];
var start = false;
var rate = 400;
var runRate = 200;
var cnv

function setup(){
    let h = window.innerHeight - 245;
    let w = window.innerWidth - 20;
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas');
	cols = floor(width/size);
	rows = floor(height/size);

  for (var a = 0; a < rows; a++) {
    for (var b = 0; b < cols; b++) {
      var cell = new Cell(b,a);
      cells.push(cell);
    }
  }
}
  
var count = 0;
function draw() {

  frameRate(rate);
  var backC = color('#222222');
  background(backC);

  for (var i = 0; i < cells.length; i++) {
    if(cells[i].timer > 0){
      cells[i].timer -= 1;
    }
    cells[i].show();
  }

  if(start){
    var sums = [];
    for (var i = 0; i < cells.length; i++) {
      var live = cells[i].checkNeighbours();
      sums.push(live);
    }

    for (var i = 0; i < sums.length; i++) {
      if(sums[i] < 2 && cells[i].alive){
        cells[i].alive = false;
        //console.log('ths happened');
      }else if ((sums[i] == 2 || sums[i] == 3 ) && cells[i].alive) {
        cells[i].alive = true;
      }else if (sums[i] > 3 && cells[i].alive) {
        cells[i].alive = false;
      }

      if (sums[i] == 3 && !cells[i].alive) {
        cells[i].alive = true;
      }
    }
  }

  if(mouseIsPressed){
    var checkX = floor(mouseX / size);
    var checkY = floor(mouseY / size);
    for (var i = 0; i < cells.length; i++) {
      if(cells[i].i == checkX && cells[i].j == checkY){
        if(cells[i].alive && cells[i].timer == 0){
          cells[i].alive = false;
          cells[i].timer = 20;
        }else{
          if(cells[i].timer == 0){
          cells[i].alive = true;
          cells[i].timer = 20;
        }
        }
        break;
      }
    }
  }
  fill(255)
  textSize(20);
  text("Rate Of Generation Increase: " + runRate,10,20);
}

function Cell(i,j){
  this.i = i;
  this.j = j;
  this.alive = false
  this.timer = 0;

  this.show = function(){
    var x = this.i * size;
    var y = this.j * size;
    stroke(115);
    if(this.alive){
      var c = color(255,102,204);
      fill(c);
    }else{
      noFill();
    }
    rect(x,y,size,size);
  }

  this.checkNeighbours = function(){
    var sum = 0;

    if(!(this.i == 0)){
      var check = cells[(this.j - 1) * cols + (this.i - 1)];
      if(check && check.alive){
        sum ++;
      }
    }

    check = cells[(this.j - 1) * cols + (this.i)];
    if(check && check.alive){
      sum ++;
    }

    if(!(this.i == cols - 1)){
      check = cells[(this.j - 1) * cols + (this.i + 1)];
      if(check && check.alive){
        sum ++;
      }
    }

    if(!(this.i == 0)){
      check = cells[(this.j) * cols + (this.i - 1)];
      if(check && check.alive){
        sum ++;
      }
    }

    if(!(this.i == cols - 1)){
      check = cells[(this.j) * cols + (this.i + 1)];
      if(check && check.alive){
        sum ++;
      }
    }

    if(!(this.i == 0)){
      check = cells[(this.j + 1) * cols + (this.i - 1)];
      if(check && check.alive){
        sum ++;
      }
    }

    check = cells[(this.j + 1) * cols + (this.i)];
    if(check && check.alive){
      sum ++;
    }

    if(!(this.i == cols - 1)){
      check = cells[(this.j + 1) * cols + (this.i + 1)];
      if(check && check.alive){
        sum ++;
      }
    }
    return sum;
  }
}

function keyPressed(){
  if(key == ' '){
    if(start){
      start = false;
    }else{
      start = true;
    }
  }
  else if(keyCode == UP_ARROW){
    if(runRate < 5){
      runRate += 1;
    }
    else if(runRate < 20){
      runRate += 5;
    }
    else if(runRate < 100){
      runRate += 20;
    }
    else if(runRate < 1000){
      runRate += 100;
    }
  }
  else if(keyCode == DOWN_ARROW){
    if(runRate > 100){
      runRate -= 100;
    }
    else if(runRate > 20){
      runRate -= 20;
    }
    else if(runRate > 5){
      runRate -= 5;
    }
    else if(runRate > 2){
      runRate -= 1;
    }
  }
  if(start){
    rate = runRate;
  }else{
    rate = 200;
  }
}


function windowResized() {
    start = false;
    let h = window.innerHeight - 245;
    let w = window.innerWidth-20;
    resizeCanvas(w,h);
    cols = floor(width/size);
    rows = floor(height/size);
  
    for (var a = 0; a < rows; a++) {
      for (var b = 0; b < cols; b++) {
        var cell = new Cell(b,a);
        cells.push(cell);
      }
    }
}