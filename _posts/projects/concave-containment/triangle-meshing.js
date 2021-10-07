class TriangleMeshing{


    isInside(poly, point){
        
        if(poly.length == 0){
            return false;
        }
    
        // Find concave points (if any) and use to check for concave portions.
        
        // Counter clockwise points array. (to the left of previous vector)
        var ccPoints = [];
    
        // clockwise points array. (to the right of prevous vector)
        var cPoints = [];
    
        // Set the previous point to check against (initially it's the last vertex).
        var pp = poly[poly.length - 1];
    
        var leftMost = poly[0];
    
        for(var i = 0; i < poly.length; i++){
            // Set the current point that is being checked for 'concave denotation'.
            var cp = poly[i];
    
            if(cp.x < leftMost.x){
                leftMost = cp;
            }
    
            // Set a vector between the previous two vertices of the polygon (initially between last point and first point).
            var pv = new Vector(cp.x - pp.x, cp.y - pp.y);
    
            // Set the next point that is used to create the next edge of the polygon.
            var np = poly[(i == poly.length - 1 ? 0:i+1)];
    
            // Get the vector between the current vertex and the next vertex.
            var nv = new Vector(np.x - cp.x, np.y - cp.y);
    
            // Find dot product between nv and the normal to the pv vector.
            // if pv = (x, y), then the normal to it is = (-y, x)
            var dotP = nv.x * -pv.y + nv.y * pv.x;
    
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
    
            var polyCopy = [...poly];
    
            // Determine which direction shape is drawn, by taking left-most (or other outmost) point and finding if it's cc or c.
    
            // find which points denote concave portions (wether it's drawn clocwise or counterclockwise).
            if(cPoints.includes(leftMost)){ // ccPoints are concave
    
                var lastPointIndex = 0;
                var lastPoint = polyCopy[lastPointIndex];
    
                var secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
                var secondPoint = polyCopy[secondPointIndex];
    
                var firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
                var firstPoint = polyCopy[firstPointIndex];
    
                var concaveSet = [firstPoint, secondPoint, lastPoint];
    
                var retracePoints = true;
                while(retracePoints){
                    if(ccPoints.includes(secondPoint)){
                        retracePoints = true;
                    }else{
                        retracePoints = false;
                    }
    
                    for(var i = 0; i < polyCopy.length; i++){
                        if((i != firstPointIndex && i != secondPointIndex) && i != lastPointIndex){
                            if(this.convexIsInside(concaveSet, polyCopy[i])){
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

                if(this.isInside(concaveSet, point)){
                    return true;
                }

                var newPCopy = [];
                for(var i = 0; i < polyCopy.length; i++){
                                
                    if(i == secondPointIndex){
                        continue;
                    }
                    newPCopy.push(polyCopy[i]);
                }
                
                polyCopy = [...newPCopy];
            
                poly = polyCopy;

            }else{ // cPoints are concave
            
                var lastPointIndex = 0;
                var lastPoint = polyCopy[lastPointIndex];
    
                var secondPointIndex = (lastPointIndex == 0 ? polyCopy.length - 1:lastPointIndex -1);
                var secondPoint = polyCopy[secondPointIndex];
    
                var firstPointIndex = (secondPointIndex == 0 ? polyCopy.length - 1:secondPointIndex -1);
                var firstPoint = polyCopy[firstPointIndex];
    
                var concaveSet = [firstPoint, secondPoint, lastPoint];
    
                var retracePoints = true;
                while(retracePoints){
                    if(cPoints.includes(secondPoint)){
                        retracePoints = true;
                    }else{
                        retracePoints = false;
                    }
    
                    for(var i = 0; i < polyCopy.length; i++){
                        if((i != firstPointIndex && i != secondPointIndex) && i != lastPointIndex){
                            if(this.convexIsInside(concaveSet, polyCopy[i])){
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

                if(this.isInside(concaveSet, point)){
                    return true;
                }

                var newPCopy = [];
                for(var i = 0; i < polyCopy.length; i++){
                    
                    if(i == secondPointIndex){
                        continue;
                    }
                    newPCopy.push(polyCopy[i]);
                }

                polyCopy = [...newPCopy];

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
        
            for(var i = 0; i < poly.length; i++){
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
     for(var a = 0; a < poly.length; a++){

        // Set a vector relative to 'a'th point.
        // If a shape is convex, then there will always be at least one point on each side of this relative vector.
        var rv = new Vector(poly[a].x - point.x, poly[a].y - point.y);

        // Set booleans to track on left and on right.
        var onLeft = false;
        var onRight = false;

        for(var b = 0; b < poly.length; b++){

            if(a == b){
                continue;
            }

            var v = poly[b];
            var pv = new Vector(v.x - point.x, v.y - point.y);
            
            // Find dot product between relative vector and the normal to the point2vertex vector.
            // if point2vertex = (x, y), then the normal to it is = (-y, x)
            var dotP = rv.x * -pv.y + rv.y * pv.x

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

    convexIsInside(poly, point){

        for(var a = 0; a < poly.length; a++){
    
            // Set a vector relative to 'a'th point.
            // If a shape is convex, then there will always be at least one point on each side of this relative vector.
            var rv = new Vector(poly[a].x - point.x, poly[a].y - point.y);
    
            // Set booleans to track on left and on right.
            var onLeft = false;
            var onRight = false;
    
            for(var b = 0; b < poly.length; b++){
    
                if(a == b){
                    continue;
                }
    
                var v = poly[b];
                var pv = new Vector(v.x - point.x, v.y - point.y);
                
                // Find dot product between relative vector and the normal to the point2vertex vector.
                // if point2vertex = (x, y), then the normal to it is = (-y, x)
                var dotP = rv.x * -pv.y + rv.y * pv.x
        
                // Point is on right if dotp is positive and on left if dotp is negative.
                if(dotP > 0){
                    onRight = true;
                }else if(dotP < 0){
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

}