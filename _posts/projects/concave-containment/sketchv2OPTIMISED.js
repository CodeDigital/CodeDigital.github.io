/* 
Optimisations
 - Remove Recursion (replace with a loop with just one function call)
*/

var cnv
var w, h;

let redLevel = 265;

var polygon = [];
let isDrawing = false;

let timeTaken = 0;
let timesTaken = [];
const MAX_TIMES = 1000;
let recordTimes = false;
let sendCSV = true;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-concave-containment');
    polygon = [{"x":531,"y":150,"magnitude":551.7798474029294},{"x":1199,"y":151,"magnitude":1208.4709346939214},{"x":1518,"y":312,"magnitude":1549.7315896631908},{"x":1522,"y":466,"magnitude":1591.7411849920827},{"x":1463,"y":467,"magnitude":1535.7271893145605},{"x":1431,"y":448,"magnitude":1499.4882460359602},{"x":1429,"y":351,"magnitude":1471.4761296059137},{"x":1204,"y":235,"magnitude":1226.719609364748},{"x":1204,"y":327,"magnitude":1247.6157260951786},{"x":1151,"y":380,"magnitude":1212.1060184653816},{"x":978,"y":381,"magnitude":1049.5927781763744},{"x":923,"y":335,"magnitude":981.913438140043},{"x":919,"y":225,"magnitude":946.1426953689386},{"x":807,"y":220,"magnitude":836.4502376112998},{"x":808,"y":337,"magnitude":875.4615925327621},{"x":763,"y":378,"magnitude":851.5004403991815},{"x":584,"y":377,"magnitude":695.1150983829945},{"x":535,"y":338,"magnitude":632.8262004689756}];
    // polygon = [{"x":1792,"y":189,"magnitude":1801.9392331596534},{"x":1800,"y":661,"magnitude":1917.5299215396874},{"x":1667,"y":656,"magnitude":1791.430992251725},{"x":1668,"y":290,"magnitude":1693.0221498846374},{"x":1415,"y":271,"magnitude":1440.7171825170963},{"x":1187,"y":668,"magnitude":1362.0546978737675},{"x":794,"y":669,"magnitude":1038.2663434783967},{"x":612,"y":500,"magnitude":790.2809626961794},{"x":657,"y":345,"magnitude":742.0741202871853},{"x":213,"y":480,"magnitude":525.137124949284},{"x":33,"y":47,"magnitude":57.42821606144492},{"x":938,"y":43,"magnitude":938.9850904034632},{"x":403,"y":116,"magnitude":419.36261159049457},{"x":133,"y":82,"magnitude":156.24659996300718},{"x":343,"y":161,"magnitude":378.90632087628205},{"x":268,"y":251,"magnitude":367.18523935474315},{"x":997,"y":91,"magnitude":1001.1443452369892},{"x":964,"y":430,"magnitude":1055.5548304091076},{"x":1034,"y":501,"magnitude":1148.9808527560413},{"x":1066,"y":39,"magnitude":1066.7131760693687},{"x":1795,"y":31,"magnitude":1795.2676680651273},{"x":1793,"y":106,"magnitude":1796.1305631829775},{"x":1273,"y":96,"magnitude":1276.6146638669009},{"x":1037,"y":563,"magnitude":1179.9737285211056},{"x":874,"y":418,"magnitude":968.8137075826291},{"x":910,"y":173,"magnitude":926.2985479854754},{"x":243,"y":307,"magnitude":391.53288495348636},{"x":310,"y":354,"magnitude":470.5486159792631},{"x":780,"y":259,"magnitude":821.8765114054544},{"x":760,"y":452,"magnitude":884.253357358625},{"x":932,"y":622,"magnitude":1120.494533676983},{"x":1107,"y":623,"magnitude":1270.2669010881139},{"x":1360,"y":173,"magnitude":1370.9591532937807}];
}
  
function draw() {

    let prevTime = millis();

    redLevel = 265;

    background("#222222");

    fill(0);
    stroke(255);
    strokeWeight(5);
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "white";
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
        // if(i == 0){
        //     rectMode(CENTER);
        //     rect(p.x, p.y, 30, 30);   
        // }else if(i == 1){
        //     rect(p.x, p.y, 15, 15);   
        // }else{
            ellipse(p.x, p.y, 10);
        // }
    });
    drawingContext.shadowBlur = 10;
    drawingContext.shadowColor = "white";

    let textColour;

    if(!isDrawing){
        textSize(25);
        strokeWeight(3);
        let point = new Vector(mouseX, mouseY);
        // let point = new Vector(600, 200);
        // ellipse(point.x, point.y, 20);
        let isColliding = isInside(polygon, point);
        // timeTaken = (millis() - prevTime)/1000;
        // if(timesTaken.length >= MAX_TIMES){
        //     recordTimes = false;
        //     if(sendCSV){
        //         exportCSV(timesTaken);
        //         sendCSV = false;
        //     }
        // }



        // if(recordTimes){
        //     timesTaken.push(timeTaken);
        // }

        if(isColliding){
            fill(0, 255, 0);
            //stroke(color(0, 255, 0));
            noStroke();

            let prevPoint = polygon[polygon.length - 1];
            let closest = {distSq:Number.MAX_SAFE_INTEGER};

            for(let i = 0; i < polygon.length; i++){
            //     midpoints[i] = midpoint(prevPoint, polygon[i]);
                test = linePointData(polygon[i], prevPoint, point);

                if(test.distSq <= closest.distSq){
                    closest = test;
                }

                prevPoint = polygon[i];
            }

            drawingContext.shadowBlur = 10;
            drawingContext.shadowColor = color(0, 255, 255).toString();
            stroke(color(0, 255, 255));
            line(closest.x.x + closest.cTox.x, closest.x.y + closest.cTox.y, closest.x.x, closest.x.y);
            push();
                translate(closest.x.x + closest.cTox.x, closest.x.y + closest.cTox.y);
                rotate(closest.cTox.getAngle() + (Math.PI / 2));
                triangle(0, 0, 2.5, -5, -2.5, -5);
            pop();

            // drawingContext.shadowBlur = 10;
            // drawingContext.shadowColor = color(0, 200, 0).toString();
            fill(color(0, 255, 255));
            noStroke();
            ellipse(closest.x.x, closest.x.y, 10, 10);

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

// function keyPressed(){
//     if(key === 'a'){
//         console.log(timeTaken);
//         recordTimes = true;
//     }
// }

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
    while(cPoints.length > 0 && ccPoints.length > 0){

        redLevel -= 30;

        let polyCopy = [...poly];

        // Determine which direction shape is drawn, by taking left-most (or other outmost) point and finding if it's cc or c.

        // find which points denote concave portions (wether it's drawn clocwise or counterclockwise).
        if(cPoints.includes(leftMost)){ // ccPoints are concave

            // let lastPoint = ccPoints[ccPoints.length - 1];
            // let lastPointIndex = polyCopy.indexOf(lastPoint);

            let lastPointIndex = 0;
            let lastPoint = polyCopy[lastPointIndex];

            let secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
            let secondPoint = polyCopy[secondPointIndex];

            let firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
            let firstPoint = polyCopy[firstPointIndex];

            let concaveSet = [firstPoint, secondPoint, lastPoint];

            let retracePoints = true;
            while(retracePoints){
                if(ccPoints.includes(secondPoint)){
                    retracePoints = true;
                }else{
                    retracePoints = false;
                }

                for(let i = 0; i < polyCopy.length; i++){
                    if((i != firstPointIndex && i != secondPointIndex) && i != lastPointIndex){
                        if(convexIsInside(concaveSet, polyCopy[i])){
                            retracePoints = true;
                            break;
                        }
                    }
                }
                
                if(!retracePoints){
                    break;
                }
                
                lastPoint = secondPoint;
                lastPointIndex = secondPointIndex;
                secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
                secondPoint = polyCopy[secondPointIndex];
                firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
                firstPoint = polyCopy[firstPointIndex];
                concaveSet = [firstPoint, secondPoint, lastPoint];
            }

            // let addIndex = (firstPointIndex == 0 ? polyCopy.length - 1:firstPointIndex -1);
            // let addSet = [];
            // let noteIndex = -1;
            // while(addIndex != lastPointIndex){
            //     let p = polyCopy[addIndex];
            //     addSet.push(p);
            //     if(convexIsInside(concaveSet, p)){
            //         noteIndex = addIndex;
            //     }
            //     addIndex = (addIndex == 0 ? polyCopy.length - 1:addIndex -1);
            // }

            // if(noteIndex != -1){
            //     for(let i = 0; i < addSet.length; i++){
            //         if(polyCopy.indexOf(addSet[i]) == noteIndex){
            //             concaveSet.unshift(addSet[i]);
            //             break;
            //         }
            //         concaveSet.unshift(addSet[i]);
            //     }
            // }

            // let pv = concaveSet[concaveSet.length - 1]
            // concaveSet.forEach(function(p, i){
            //     // stroke(color(redLevel,0,0));
            //     stroke(color(255,0,0))
            //     line(pv.x, pv.y, p.x, p.y);
            //     ellipse(p.x, p.y, 10);
            //     pv = p;
            // });

            // ellipse(lastPoint.x, lastPoint.y, 10, 40);

            
            if(isInside(concaveSet, point)){

                // let midA = midpoint(concaveSet[0], concaveSet[1]);
                // let midB = midpoint(concaveSet[1], concaveSet[2]);

                // let distA = distanceSquared(midA, point);
                // let distB = distanceSquared(midB, point);

                // if(distA < distB){

                //     stroke(color(0, 0, 255));
                //     line(concaveSet[0].x, concaveSet[0].y, concaveSet[1].x, concaveSet[1].y);
                //     ellipse(concaveSet[0].x, concaveSet[0].y, 20);
                //     ellipse(concaveSet[1].x, concaveSet[1].y, 20);

                // }else{

                //     stroke(color(0, 0, 255));
                //     line(concaveSet[1].x, concaveSet[1].y, concaveSet[2].x, concaveSet[2].y);
                //     ellipse(concaveSet[1].x, concaveSet[1].y, 20);
                //     ellipse(concaveSet[2].x, concaveSet[2].y, 20);

                // }

                return true;
            }

            // lastPointIndex = (noteIndex != -1 ? noteIndex:lastPointIndex);

            let newPCopy = [];
            for(let i = 0; i < polyCopy.length; i++){
                            
                if(i == secondPointIndex){
                    continue;
                }

                // if(concaveSet.includes(polyCopy[i])){
                //     if(i != firstPointIndex && i != lastPointIndex){
                //         continue;
                //     }
                // }
                
                newPCopy.push(polyCopy[i]);

                // if(i != firstPointIndex && i != lastPointIndex){
                //     newPCopy.push(polyCopy[i]);
                // }
                // if(i != secondPointIndex){
                //     newPCopy.push(polyCopy[i]);
                // }
            }

            polyCopy = [...newPCopy];
        
            poly = polyCopy;
            // return isInside(polyCopy, point);

        }else{ // cPoints are concave

            // let lastPoint = ccPoints[ccPoints.length - 1];
            // let lastPointIndex = polyCopy.indexOf(lastPoint);

            let lastPointIndex = 0;
            let lastPoint = polyCopy[lastPointIndex];

            let secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
            let secondPoint = polyCopy[secondPointIndex];

            let firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
            let firstPoint = polyCopy[firstPointIndex];

            let concaveSet = [firstPoint, secondPoint, lastPoint];

            let retracePoints = true;
            while(retracePoints){
                if(cPoints.includes(secondPoint)){
                    retracePoints = true;
                }else{
                    retracePoints = false;
                }

                for(let i = 0; i < polyCopy.length; i++){
                    if((i != firstPointIndex && i != secondPointIndex) && i != lastPointIndex){
                        if(convexIsInside(concaveSet, polyCopy[i])){
                            retracePoints = true;
                            break;
                        }
                    }
                }

                if(!retracePoints){
                    break;
                }
                
                lastPoint = secondPoint;
                lastPointIndex = secondPointIndex;
                secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
                secondPoint = polyCopy[secondPointIndex];
                firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
                firstPoint = polyCopy[firstPointIndex];
                concaveSet = [firstPoint, secondPoint, lastPoint];
            }

            // let addIndex = (firstPointIndex == 0 ? polyCopy.length - 1:firstPointIndex -1);
            // let addSet = [];
            // let noteIndex = -1;
            // while(addIndex != lastPointIndex){
            //     let p = polyCopy[addIndex];
            //     addSet.push(p);
            //     if(convexIsInside(concaveSet, p)){
            //         noteIndex = addIndex;
            //     }

            //     addIndex = (addIndex == 0 ? polyCopy.length - 1:addIndex -1);
            // }

            // if(noteIndex != -1){
            //     for(let i = 0; i < addSet.length; i++){
            //         if(polyCopy.indexOf(addSet[i]) == noteIndex){
            //             concaveSet.unshift(addSet[i]);
            //             break;
            //         }
            //         concaveSet.unshift(addSet[i]);
            //     }
            // }

            if(isInside(concaveSet, point)){

                // let midA = midpoint(concaveSet[0], concaveSet[1]);
                // let midB = midpoint(concaveSet[1], concaveSet[2]);

                // let distA = distanceSquared(midA, point);
                // let distB = distanceSquared(midB, point);

                // if(distA < distB){

                //     stroke(color(0, 0, 255));
                //     line(concaveSet[0].x, concaveSet[0].y, concaveSet[1].x, concaveSet[1].y);
                //     ellipse(concaveSet[0].x, concaveSet[0].y, 20);
                //     ellipse(concaveSet[1].x, concaveSet[1].y, 20);

                // }else{

                //     stroke(color(0, 0, 255));
                //     line(concaveSet[1].x, concaveSet[1].y, concaveSet[2].x, concaveSet[2].y);
                //     ellipse(concaveSet[1].x, concaveSet[1].y, 20);
                //     ellipse(concaveSet[2].x, concaveSet[2].y, 20);

                // }

                return true;
            }

            // lastPointIndex = (noteIndex != -1 ? noteIndex:lastPointIndex);

            let newPCopy = [];
            for(let i = 0; i < polyCopy.length; i++){
                
                if(i == secondPointIndex){
                    continue;
                }

                // if(concaveSet.includes(polyCopy[i])){
                //     if(i != firstPointIndex && i != lastPointIndex){
                //         continue;
                //     }
                // }

                newPCopy.push(polyCopy[i]);

                // if(i != firstPointIndex && i != lastPointIndex){
                //     newPCopy.push(polyCopy[i]);
                // }
                // if(i != secondPointIndex){
                //     newPCopy.push(polyCopy[i]);
                // }
            }

            polyCopy = [...newPCopy];

            // let pv = concaveSet[concaveSet.length - 1]
            // concaveSet.forEach(function(p, i){
            //     // stroke(color(redLevel,0,0));
            //     stroke(color(255,0,0))
            //     line(pv.x, pv.y, p.x, p.y);
            //     // ellipse(p.x, p.y, 20);
            //     pv = p;
            // });

            // return isInside(polyCopy, point)
            poly = polyCopy;
        }


        if(poly.length == 0){
            return false;
        }
    
        // Find concave points (if any) and use to check for concave portions.
        
        // Counter clockwise points array. (to the left of previous vector)
        ccPoints = [];
    
        // clockwise points array. (to the right of prevous vector)
        cPoints = [];
    
        // Set the previous point to check against (initially it's the last vertex).
        pp = poly[poly.length - 1];
    
        leftMost = poly[0];
    
        for(let i = 0; i < poly.length; i++){
            // Set the current point that is being checked for 'concave denotation'.
            cp = poly[i];
    
            if(cp.x < leftMost.x){
                leftMost = cp;
            }
    
            // Set a vector between the previous two vertices of the polygon (initially between last point and first point).
            pv = new Vector(cp.x - pp.x, cp.y - pp.y);
    
            // Set the next point that is used to create the next edge of the polygon.
            np = poly[(i == poly.length - 1 ? 0:i+1)];
    
            // Get the vector between the current vertex and the next vertex.
            nv = new Vector(np.x - cp.x, np.y - cp.y);
    
            // Find dot product between nv and the normal to the pv vector.
            // if pv = (x, y), then the normal to it is = (-y, x)
            dotP = nv.x * -pv.y + nv.y * pv.x;
    
            // Check if next vector (nv) goes to the left or right
            if(dotP > 0){
                cPoints.push(cp);
            }else if(dotP < 0){
                ccPoints.push(cp);
            }
    
            pp = cp;
        }

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

    // let midpoints = [];
    // let prevPoint = poly[poly.length - 1];
    // let closest = {distSq:Number.MAX_SAFE_INTEGER};

    // for(let i = 0; i < poly.length; i++){
    // //     midpoints[i] = midpoint(prevPoint, poly[i]);
    //     test = linePointData(poly[i], prevPoint, point);

    //     if(test.distSq <= closest.distSq){
    //         closest = test;
    //     }

    //     prevPoint = poly[i];
    // }

    // stroke(color(0, 0, 200));
    // line(closest.x.x + closest.cTox.x, closest.x.y + closest.cTox.y, closest.x.x, closest.x.y);

    // fill(color(0, 200, 0));
    // noStroke();
    // ellipse(closest.x.x, closest.x.y, 20, 20);

    // let shortestDistSq = Number.MAX_SAFE_INTEGER;
    // let shortestIndex = 0;

    // for(let i = 0; i < midpoints.length; i++){
    //     let distSq = distanceSquared(midpoints[i], point);
    //     if(distSq < shortestDistSq){
    //         shortestDistSq = distSq;
    //         shortestIndex = i;
    //     }
    // }

    // let prevIndex = (shortestIndex == 0 ? poly.length - 1:shortestIndex - 1);
    // stroke(color(0, 0, 255));
    // line(poly[prevIndex].x, poly[prevIndex].y, poly[shortestIndex].x, poly[shortestIndex].y);
    // ellipse(poly[prevIndex].x, poly[prevIndex].y, 20);
    // ellipse(poly[shortestIndex].x, poly[shortestIndex].y, 20);


    return true;

}

function convexIsInside(poly, point){

    
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