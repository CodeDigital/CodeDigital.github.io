var cnv
var w, h;

var activeWheel;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-combo-engine');
    activeWheel = new MoveWheel();
}
  
function draw() {
    background(22);
    activeWheel.update(0);
    activeWheel.show();
}

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
}

function setWidthHeight(){
    h = sketchHeight();
    w = sketchWidth();
}

function unmountScript(){
	console.log('Unmounted!');
}