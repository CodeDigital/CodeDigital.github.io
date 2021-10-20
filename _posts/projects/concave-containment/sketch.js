// This will just be where the different checking methods are implemented

const ALG_TRIANGLE_MESHING = new TriangleMeshing();
const ALG_VERTICAL_SLICING = new VerticalSlicing();
const CHOSEN_ALG = ALG_VERTICAL_SLICING;

var cnv
var w, h;

let redLevel = 265;

var polygon = new Polygon();
let isDrawing = false;
let mobileDrawing = true;
let justSwitchedMobile = false;

let timeTaken = 0;
let timesTaken = [];
const MAX_TIMES = 1000;
let recordTimes = false;
let sendCSV = true;

const DEBUGGING = false;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-concave-containment');

    polygon.add(new Vector(100, 100));
    polygon.add(new Vector(200, 100));
    polygon.add(new Vector(200, 200));
    polygon.add(new Vector(100, 200));
    polygon.add(new Vector(150, 150));

}

function draw(){

    let prevTime = millis();

    redLevel = 265;

    background("#222222");

    polygon.show();

    let textColour;
    if(!isDrawing){
        textSize(25);
        strokeWeight(3);

        let point = new Vector(mouseX, mouseY);
        let isColliding = CHOSEN_ALG.isInside(polygon.vertices, point);

        if(isColliding){
            let normalData = findExitNormal(polygon.vertices, point);

            drawingContext.shadowBlur = 10;
            drawingContext.shadowColor = color(0, 255, 255).toString();
            stroke(color(0, 255, 255));
            line(normalData.x.x + normalData.cTox.x, 
                normalData.x.y + normalData.cTox.y, 
                normalData.x.x, normalData.x.y);
            push();
                translate(normalData.x.x + normalData.cTox.x, 
                    normalData.x.y + normalData.cTox.y);
                rotate(normalData.cTox.getAngle() + (Math.PI / 2));
                triangle(0, 0, 2.5, -5, -2.5, -5);
            pop();

            // drawingContext.shadowBlur = 10;
            // drawingContext.shadowColor = color(0, 200, 0).toString();
            fill(color(0, 255, 255));
            noStroke();
            ellipse(normalData.x.x, normalData.x.y, 10, 10);

            textColour = color(0, 200, 0);
        }else{
            textColour = color(255, 0, 0);
            noStroke();
        }

        fill(textColour);
        drawingContext.shadowBlur = 5;
        drawingContext.shadowColor = textColour.toString();
        text(`Mouse is ${(isColliding ? '':'not ')}inside.`, 10, 25);

    }

    noStroke();
    fill(color('#FF2277'));
    drawingContext.shadowBlur = 15;
    drawingContext.shadowColor = "#FF2277";
    ellipse(mouseX, mouseY, 10);
}

function switchDrawing(event){
    console.log(event);
    console.log("yo");
    mobileDrawing = !mobileDrawing
    isDrawing = mobileDrawing;
    justSwitchedMobile = true;
    if(!mobileDrawing){
        event.target.innerText = "Start Drawing"
    }else{
        event.target.innerText = "Stop Drawing"
    }
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

function mouseClicked(){
    if(!mobileDrawing || justSwitchedMobile) {
        justSwitchedMobile = false;
        return;
    }

    if(mouseX > 0 && mouseY > 0){
        if(!isDrawing){
            isDrawing = true;
        }
        polygon.add(new Vector(mouseX, mouseY));
    }
}

function doubleClicked(){
    isDrawing = false;
    polygon.pop();
    polygon.pop();
}

function clearPolygon(){
    polygon.clear();
    isDrawing = false;
}

function exportCSV(arr){
    let csvContent = "data:text/csv;charset=utf-8," 
    + arr.join(',');
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "my_data.csv");
    document.body.appendChild(link); // Required for FF

    link.click(); // This will download the data file named "my_data.csv".
}

// add clearing the polygon on button press.
document.getElementById('concave-containment-clear').onclick = clearPolygon;

// add stop drawing functionality
document.getElementById('concave-containment-stop-drawing').onclick = switchDrawing;