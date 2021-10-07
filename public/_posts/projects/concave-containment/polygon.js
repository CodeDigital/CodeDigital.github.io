function Polygon(){
    this.vertices = [];

    this.show = function(){

        fill(0);
        stroke(255);
        strokeWeight(5);

        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = "white";

        beginShape();
        this.vertices.forEach(v => {
            vertex(v.x, v.y);
        });

        // draw the mouse point if still adding stuff
        if(isDrawing && mobileDrawing) vertex(mouseX, mouseY);

        endShape(CLOSE);

        fill(255);
        noStroke();
        this.vertices.forEach(function(p, i) {
            ellipse(p.x, p.y, 10);
        });
    
    }

    this.add = function(v) {this.vertices.push(v);}
    this.pop = function() {this.vertices.pop();}
    this.clear = function() {this.vertices = [];}
}

/**
 * Creates a vector with components x and y.
 * @param {number} x 
 * @param {number} y 
 */
 function Vector(x, y){
    this.x = x;
    this.y = y;
    this.magnitude = Math.sqrt(this.x**2 + this.y**2);

    this.getAngle = function (){
        let atangle = Math.atan2(this.y, this.x);
        return Math.PI + atangle;
    }

    this.normal = function(){
        return new Vector(this.x / this.magnitude, this.y / this.magnitude);
    }

    this.negative = function(){
        return new Vector(-this.x, -this.y);
    }
}

function compareVectors(a, b){
    return (a.x == b.y && a.y == b.y);
}

function distanceSquared(a, b){
    return (b.x - a.x)**2 + (b.y - a.y)**2;
}

function midpoint(a, b){
    return new Vector((a.x + b.x) / 2, (a.y + b.y) / 2);
}

function findProjection(a, b, c){
    let ab = new Vector(b.x - a.x, b.y - a.y);
    let ac = new Vector(c.x - a.x, c.y - a.y);

    let lambda = (ab.x * ac.x + ab.y * ac.y) / (ab.x**2 + ab.y**2);
    // fill(color(0, 200, 0));
    // noStroke();
    // ellipse(a.x + lambda * ab.x, a.y + lambda * ab.y, 20, 20);

    return new Vector(a.x + lambda * ab.x, a.y + lambda * ab.y);

}

function linePointData(a, b, c){

    let x = findProjection(a,b,c);

    let ab = new Vector(b.x - a.x, b.y - a.y);
    let ac = new Vector(c.x - a.x, c.y - a.y);
    let bc = new Vector(c.x - b.x, c.y - b.y);

    let lambda = (ab.x * ac.x + ab.y * ac.y) / (ab.x**2 + ab.y**2);
    // console.log(lambda);
    // stroke(color(0, 200, 0));
    // line(a.x, a.y, a.x + lambda * ab.x, a.y + lambda * ab.y);

    let cx = new Vector(lambda * ab.x - ac.x, lambda * ab.y - ac.y);
    // stroke(color(0, 0, 200));
    // line(x.x + cx.x, x.y + cx.y, x.x, x.y);
    // ellipse(cx.x, cx.y, 10, 10);

    let distSq = ((lambda >= 0 && lambda <= 1) ? (cx.x ** 2 + cx.y ** 2):Number.MAX_SAFE_INTEGER);

    if((ac.x ** 2 + ac.y ** 2) < distSq){
        distSq = (ac.x ** 2 + ac.y ** 2);
        x = a;
        cx = ac.negative();
    }

    if((bc.x ** 2 + bc.y ** 2) < distSq){
        distSq = (bc.x ** 2 + bc.y ** 2);
        x = b;
        cx = bc.negative();
    }

    return {
        x:x,
        cTox:cx,
        distSq:distSq
    };

}

function findExitNormal(poly, point){
    let polySize = poly.length;
    let prevPoint = poly[polySize - 1];
    let closest = {distSq:Number.MAX_SAFE_INTEGER};

    for(let i = 0; i < polySize; i++){

        test = linePointData(poly[i], prevPoint, point);

        if(test.distSq <= closest.distSq){
            closest = test;
        }

        prevPoint = poly[i];
    }

    return closest;
}