var cnv
var w, h;

let sandbox;
let sandboxSize;
let cellSize;
var brushSize = 40;
var brush = [WATER_PARTICLE, SAND_PARTICLE, OIL_PARTICLE, WOOD_PARTICLE, SMOKE_PARTICLE, FIRE_PARTICLE, EMPTY_PARTICLE];

let fps = 30;
let dt = 1/fps;
let prevTime;
let frameCounter = 0;
const MAX_FRAME_COUNTER = 2;

let gui;

const MAX_DEPTH_CHECKS = 10;
const MAX_PARTICLE_MOVES = 2;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-powder-engine');

    // sandboxSize = new Vector(320, 180);
    // sandboxSize = new Vector(640, 360);
    // sandboxSize = new Vector(400, 200);
    sandboxSize = new Vector(200, 100);
    sandbox = new Sandbox(sandboxSize);
    sandbox.populate();

    Sandbox.updateCellSize();

    // noSmooth();
    // smooth();
    // pixelDensity(3);
    // frameRate(30);

    gui = createGui("Powder Engine");
    gui.setPosition(50, 200);
    sliderRange(1,100,1);
    gui.addGlobals("brush", "brushSize");

    // noLoop();

    prevTime = millis();
}
  
function draw() {
    // background(22);
    sandbox.show();

    let currTime = millis();
    let timeElapsed = (currTime - prevTime)/1000;

    while(timeElapsed > dt){
        sandbox.step(dt);
        timeElapsed -= dt;
        prevTime = currTime;
    }

    frameCounter ++;

    if(frameCounter >= MAX_FRAME_COUNTER){
        frameCounter = 0;
    }

    // for(let i = 0; i < 10; i++){
    //     sandbox.step();
    // }

    if(mouseIsPressed){
        for(let a = 0; a < brushSize; a++){
            for(let b = 0; b < brushSize; b++){
                let ij = Sandbox.getCellCoordinates(new Vector(mouseX - (brushSize/2) + a, mouseY - (brushSize/2) + b));
                sandbox.addParticle(ij, brush);
            }
        }
    }
}

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
    Sandbox.updateCellSize();
}

function setWidthHeight(){
    h = sketchHeight();
    w = sketchWidth();
}

function unmountScript(){
	console.log('Unmounted!');
}

// function mouseClicked(){
    // if(mouseX > 0 && mouseY > 0){
    //     sandbox.addParticle(new Vector(mouseX, mouseY), WATER_PARTICLE);
    // }
// }