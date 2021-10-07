class VerticalSlicing{


    isInside(poly, point){
        
        var polySize = poly.length;
        var vertexA = poly[polySize - 1];
        var vertexB;

        var numAbove = 0;
        var numBelow = 0;

        for (var index = 0; index < polySize; index++) {
            var vertexB = poly[index];

            // check the x of the point overlaps with the edge.
            if(vertexB.x >= point.x && vertexA.x < point.x){

                // calculate lhs and rhs of inequality
                if(this.yRelative(vertexA, vertexB, point)){
                    numAbove ++;
                }else{
                    numBelow ++;
                }

            }

            if(vertexA.x >= point.x && vertexB.x < point.x){

                // calculate lhs and rhs of inequality
                if(this.yRelative(vertexB, vertexA, point)){
                    numAbove ++;
                }else{
                    numBelow ++;
                }

            }

            // set the B vertex as the A vertex of the next edge.
            var vertexA = vertexB;
        }
    
        // it's inside if it's odd.
        return ((numAbove % 2) == 1);
    }

    // return true if y is above
    yRelative(vertexA, vertexB, point){
        // calculate rhs and lhs of the inequality
        var lhs = vertexA.y * (vertexB.x - vertexA.x) + (vertexB.y - vertexA.y) * (point.x - vertexA.x);
        var rhs = point.y * (vertexB.x - vertexA.x);

        return lhs > rhs;

    }

}