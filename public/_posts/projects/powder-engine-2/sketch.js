p5.disableFriendlyErrors = true;

var cnv
var w, h;

let sandbox;
let sandboxSize;
let cellSize;
var brushSize = 40;
// var brush = [WATER_PARTICLE, SAND_PARTICLE, OIL_PARTICLE, WOOD_PARTICLE, SMOKE_PARTICLE, FIRE_PARTICLE, EMPTY_PARTICLE];
var brush = [WATER_PARTICLE, SAND_PARTICLE, WOOD_PARTICLE, OIL_PARTICLE, SALT_PARTICLE, EMPTY_PARTICLE];
var timeDilation = 1;

var fps = 10;
let dt = 1/fps;
let frameStart;
let accumulator = 0;
let frameCounter = 0;
const MAX_COUNTER_FRAMES = 2;

let gui;

let font;

const useWEBGL = false;

const MAX_DEPTH_CHECKS = 10;
const MAX_PARTICLE_MOVES = 2;

function unmountScript(){
    remove();
  }

function preload(){
    font = loadFont("/_posts/projects/powder-engine-2/assets/VT323-Regular.ttf");
    // textFont('VT323-Regular');
}

function setup(){
    setWidthHeight();

    if(useWEBGL){
        cnv = createCanvas(w, h, WEBGL);
    }else{
        cnv = createCanvas(w, h);
    }


    cnv.parent('p5-canvas-powder-engine-2');

    // sandboxSize = new Vector(320, 180);
    // sandboxSize = new Vector(640, 360);
    sandboxSize = new Vector(400, 200);
    // sandboxSize = new Vector(200, 100);
    // sandboxSize = new Vector(100, 50);
    sandbox = new Sandbox(sandboxSize);
    // sandbox.populate();

    sandbox.updateCellSize();

    noSmooth();
    // smooth();
    // pixelDensity(3);
    // frameRate(30);

    gui = createGui("Powder Engine");
    // gui.setPosition(50, 200);
    gui.setPosition(50, 50);
    sliderRange(1,100,1);
    gui.addGlobals("brush", "brushSize");
    sliderRange(0.1, 2, 0.1);
    gui.addGlobals("timeDilation");

    // noLoop();

    frameStart = getCurrentTime();
    // frameRate(fps);

    textFont(font);
    textSize(32);
}
  
function draw() {

    fps = frameRate();
    // dt = 1 / fps;

    push();

    if(useWEBGL){
        translate(-w/2, -h/2);
    }

    background(22);
    sandbox.show();

    const currentTime = getCurrentTime();
    accumulator += currentTime - frameStart;

    frameStart = currentTime;

    if(accumulator > 0.2){
        accumulator = 0.2;
    }

    while(accumulator > (dt/timeDilation)){
        sandbox.step((dt/timeDilation), frameCounter);
        accumulator -= (dt/timeDilation);

        frameCounter ++;
        if(frameCounter >= MAX_COUNTER_FRAMES){
            frameCounter = 0;
        }
    }

    // for(let i = 0; i < 10; i++){
    //     sandbox.step();
    // }

    if(mouseIsPressed){
        // console.log(frameRate())
        for(let a = 0; a < brushSize; a++){
            for(let b = 0; b < brushSize; b++){
                let ij = sandbox.getCellCoordinates(new Vector(mouseX - (brushSize/2) + a, mouseY - (brushSize/2) + b));
                sandbox.addParticle(ij, brush);
            }
        }
    }

    // pop();

    fill(255, 255, 0);
    text(roundDP(fps, 0), 40, 40);
    pop();

}

// function setFont(font){
//     textFont(font);
// }

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
    sandbox.updateCellSize();
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

/**
 * Returns current time in seconds (from 1 Jan. 1970)
 */
function getCurrentTime(){
    return (new Date()).getTime() / 1000;
}