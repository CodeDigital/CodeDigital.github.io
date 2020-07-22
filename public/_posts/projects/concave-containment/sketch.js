var cnv
var w, h;

let redLevel = 265;

var polygon = [];
let isDrawing = false;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-concave-containment');
    console.log('script v1 latest')
}
  
function draw() {

    redLevel = 265;

    background(22);

    fill(0);
    stroke(255);
    strokeWeight(5);
    beginShape();
    polygon.forEach(function(p, i) {
        vertex(p.x, p.y);
    });
    if(isDrawing){
        vertex(mouseX, mouseY);
    }
    endShape(CLOSE);

    fill(255);
    noStroke();
    polygon.forEach(function(p, i) {
        ellipse(p.x, p.y, 7);
    });
    ellipse(mouseX, mouseY, 25);

    if(!isDrawing){
        textSize(25);
        strokeWeight(3);
        let isColliding = isInside(polygon, new Vector(mouseX, mouseY));
        if(isColliding){
            fill(0, 255, 0);
            //stroke(color(0, 255, 0));
            noStroke();

        }else{
            fill(color(255, 0, 0));
            noStroke();
        }
        
        text(`Mouse is ${(isColliding ? '':'not ')}inside.`, 10, 25);
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
    if(mouseX > 0 && mouseY > 0){
        if(!isDrawing){
            isDrawing = true;
        }
        polygon.push(new Vector(mouseX, mouseY));
    }
}

function doubleClicked(){
    isDrawing = false;
    polygon.pop();
    polygon.pop();
}

function clearPolygon(){
    polygon = [];
    isDrawing = false;
}

document.getElementById('concave-containment-clear').onclick = clearPolygon;

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
}

function compareVectors(a, b){
    return (a.x == b.y && a.y == b.y);
}


// Consider redesigning by removing convex points that follow concave points only, then measuring min convex shape.

function isInside(poly, point){

    if(poly.length == 0){
        return false;
    }

    // Find concave points (if any) and use to check for concave portions.
    
    // Counter clockwise points array. (to the left of previous vector)
    let ccPoints = [];

    // clockwise points array. (to the right of prevous vector)
    let cPoints = [];

    // Set the previous point to check against (initially it's the last vertex).
    let pp = poly[poly.length - 1];

    let leftMost = poly[0];

    for(let i = 0; i < poly.length; i++){
        // Set the current point that is being checked for 'concave denotation'.
        let cp = poly[i];

        if(cp.x < leftMost.x){
            leftMost = cp;
        }

        // Set a vector between the previous two vertices of the polygon (initially between last point and first point).
        let pv = new Vector(cp.x - pp.x, cp.y - pp.y);

        // Set the next point that is used to create the next edge of the polygon.
        let np = poly[(i == poly.length - 1 ? 0:i+1)];

        // Get the vector between the current vertex and the next vertex.
        let nv = new Vector(np.x - cp.x, np.y - cp.y);

        // Find dot product between nv and the normal to the pv vector.
        // if pv = (x, y), then the normal to it is = (-y, x)
        let dotP = nv.x * -pv.y + nv.y * pv.x;

        // Check if next vector (nv) goes to the left or right
        if(dotP > 0){
            cPoints.push(cp);
        }else if(dotP < 0){
            ccPoints.push(cp);
        }

        pp = cp;
    }

    // It's concave if there are both clockwise and counterclockwise points along its edge path.
    if(cPoints.length > 0 && ccPoints.length > 0){

        redLevel -= 1;

        let polyCopy = [...poly];

        // Determine which direction shape is drawn, by taking left-most (or other outmost) point and finding if it's cc or c.

        // find which points denote concave portions (wether it's drawn clocwise or counterclockwise).
        if(cPoints.includes(leftMost)){

            let p = ccPoints[ccPoints.length - 1];
            let polyIndex = polyCopy.indexOf(p);

            // create a set of points that contain a concave area.
            let concaveSet = [p];
            // set points before the found concave point.
            let fpIndex = (polyIndex == 0 ? poly.length:polyIndex) - 1;
            let fp = poly[fpIndex];
            concaveSet.unshift(fp);
            let previousIndex = fpIndex;

            // set points after found concave point.
            fpIndex = (polyIndex == poly.length - 1 ? -1:polyIndex) + 1;
            fp = poly[fpIndex];
            concaveSet.push(fp);

            let addInside = false;
            let addSet = [];
            fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
            let v = poly[fpIndex];

            while(fpIndex != previousIndex){
                if(addInside){
                    addSet.push(v);
                    fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
                    v = poly[fpIndex];
                    continue;
                }

                if(isInside(concaveSet, v)){
                    addSet.push(v);
                    addInside = true;
                }

                fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
                v = poly[fpIndex];
            }

            // for(let i = 0; i < polyCopy.length; i++){
            //     let v = polyCopy[i];
            //     if(!concaveSet.includes(v)){
            //         if(addInside){
            //             addSet.push(v);
            //             continue;
            //         }
            //         if(isInside(concaveSet, v)){
            //             addSet.push(v);
            //             addInside = true;
            //         }
            //     }else{

            //     }
            // }

            concaveSet.unshift(...addSet);

            let newpCopy = []

            for(let i = 0; i < polyCopy.length; i++){
                let v = polyCopy[i];
                if(concaveSet.includes(v)){
                    if(concaveSet.indexOf(v) > 0 && concaveSet.indexOf(v) < concaveSet.length - 1){
                        continue;
                    }
                }
                newpCopy.push(v);
            }
            polyCopy = newpCopy;

            // let pv = concaveSet[concaveSet.length - 1]
            // concaveSet.forEach(function(p, i){
            //     stroke(color(redLevel,0,0));
            //     line(pv.x, pv.y, p.x, p.y);
            //     ellipse(p.x, p.y, 20);
            //     pv = p;
            // });

            if(isInside(concaveSet, point)){
                return false;
            }

            return isInside(polyCopy, point);

        }else{

            let p = cPoints[cPoints.length - 1];
            let polyIndex = polyCopy.indexOf(p);

            // create a set of points that contain a concave area.
            let concaveSet = [p];
            // set points before the found concave point.
            let fpIndex = (polyIndex == 0 ? poly.length:polyIndex) - 1;
            let fp = poly[fpIndex];
            concaveSet.unshift(fp);
            let previousIndex = fpIndex;

            // set points after found concave point.
            fpIndex = (polyIndex == poly.length - 1 ? -1:polyIndex) + 1;
            fp = poly[fpIndex];
            concaveSet.push(fp);

            let addInside = false;
            let addSet = [];
            fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
            let v = poly[fpIndex];

            while(fpIndex != previousIndex){
                if(addInside){
                    addSet.push(v);
                    fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
                    v = poly[fpIndex];
                    continue;
                }

                if(isInside(concaveSet, v)){
                    addSet.push(v);
                    addInside = true;
                }

                fpIndex = (fpIndex == poly.length - 1 ? -1:fpIndex) + 1;
                v = poly[fpIndex];
            }
            
            // for(let i = 0; i < polyCopy.length; i++){
            //     let v = polyCopy[i];
            //     if(!concaveSet.includes(v)){
            //         //console.log('is not in array: ', v)
            //         if(addInside){
            //             addSet.push(v);
            //             continue;
            //         }
            //         if(isInside(concaveSet, v)){
            //             addSet.push(v);
            //             addInside = true;
            //         }
            //     }
            // }

            concaveSet.unshift(...addSet);

            let newpCopy = []

            for(let i = 0; i < polyCopy.length; i++){
                let v = polyCopy[i];
                if(concaveSet.includes(v)){
                    // if(!compareVectors(firstVertex, v) && concaveSet.indexOf(v) < concaveSet.length - 1){
                    if(concaveSet.indexOf(v) > 0 && concaveSet.indexOf(v) < concaveSet.length - 1){
                        continue;
                    }
                }
                newpCopy.push(v);
            }
            polyCopy = newpCopy;

            // let pv = concaveSet[concaveSet.length - 1]
            // concaveSet.forEach(function(p, i){
            //     stroke(color(redLevel,0,0));
            //     line(pv.x, pv.y, p.x, p.y);
            //     ellipse(p.x, p.y, 20);
            //     pv = p;
            // });

            if(isInside(concaveSet, point)){
                return false;
            }

            return isInside(polyCopy, point)
        }
    }else{
        // console.log('Is convex');
    }

    //console.log('new poly check');
    for(let a = 0; a < poly.length; a++){

        // Set a vector relative to 'a'th point.
        // If a shape is convex, then there will always be at least one point on each side of this relative vector.
        let rv = new Vector(poly[a].x - point.x, poly[a].y - point.y);

        // Set booleans to track on left and on right.
        let onLeft = false;
        let onRight = false;

        for(let b = 0; b < poly.length; b++){

            if(a == b){
                continue;
            }

            let v = poly[b];
            let pv = new Vector(v.x - point.x, v.y - point.y);
            
            // Find dot product between relative vector and the normal to the point2vertex vector.
            // if point2vertex = (x, y), then the normal to it is = (-y, x)
            let dotP = rv.x * -pv.y + rv.y * pv.x

            //console.log(dotP);

            // Point is on right if dotp is positive and on left if dotp is negative.
            if(dotP > 0){
                //console.log('is on right');
                onRight = true;
            }else if(dotP < 0){
                //console.log('is on left');
                onLeft = true;
            }

            if(onRight && onLeft){
                break;
            }
        }

        if(onRight && onLeft){
            continue;
        }else{
            return false;
        }
    }

    return true;

}

