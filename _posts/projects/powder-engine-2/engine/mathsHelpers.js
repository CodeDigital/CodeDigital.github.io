const EPSILON = 0.0001;
const gravity = 9.81;
const GLOBAL_FRICTION = 0.90;

/**
 * Finds the distance squares between two vectors
 * @param {Vector} a 
 * @param {Vector} b 
 */
function distanceSquared(a, b){
    return (a.x - b.x)**2 + (a.y - b.y)**2;
}

/**
 * Finds the distance between two vectors
 * @param {Vector} a 
 * @param {Vector} b 
 */
function distance(a, b){
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2);
}

/**
 * Returns a vector that is the sum of two vectors
 * @param {Vector} a 
 * @param {Vector} b 
 */
function addVectors(a, b){
    return new Vector(a.x + b.x, a.y + b.y);
}

/**
 * Returns a vector that has the scalar b added to both components
 * @param {Vector} a 
 * @param {number} b 
 */
function addVectorScalar(a, b){
    return new Vector(a.x + b, a.y + b);
}

/**
 * Returns a vector from a to b or b - a
 * @param {Vector} a 
 * @param {Vector} b 
 */
function subtractVectors(a, b){
    return new Vector(b.x - a.x, b.y - a.y);
}

/**
 * Returns a vector multiplied by a scalar value
 * @param {Vector} a 
 * @param {number} scale 
 */
function magnitudeVector(a, scale){
    return new Vector(a.x * scale, a.y * scale);
}

/**
 * Finds the dot product of two 2d vectors
 * @param {Vector} a 
 * @param {Vector} b 
 */
function dotProduct(a, b){
    return (a.x * b.x) + (a.y * b.y);
}

/**
 * Finds the cross product of two 2d vectors
 * @param {Vector} a 
 * @param {Vector} b 
 */
function crossProduct(a, b){
    return (a.x * b.y) - (a.y * b.x);
}

/**
 * Finds a X b, where a is a vector and b is a scalar
 * @param {Vector} a 
 * @param {number} b 
 */
function crossProductVectorScalar(a, b){
    return new Vector(a.y * b, a.x * -b);
}



/**
 * Finds a X b, where a is a scalar and b is a vector
 * @param {number} a 
 * @param {Vector} b 
 */
function crossProductScalarVector(a, b){
  return new Vector( -a * b.y, a * b.x );
}

/**
 * Clamps a value so it is between hi and lo
 * @param {number} val 
 * @param {number} lo 
 * @param {number} hi 
 */
function clamp(val, lo, hi){
    // if(val < lo) return lo;
    // if(val > hi) return hi;
    // return val;
    return (val < lo ? lo : (val > hi ? hi : val));
}

/**
 * Compares two vectors to see whether their components are the same
 * @param {Vector} a 
 * @param {Vector} b 
 */
function compareVectors(a, b){
    return (equal(a.x, b.x) && equal(a.y, b.y));
}

/**
 * Multiply a matrix by a vector
 * @param {Matrix} a 
 * @param {Vector} b 
 */
function multiplyMatrixVector(a, b){
    return new Vector(
        a.m00 * b.x + a.m01 * b.y, 
        a.m10 * b.x + a.m11 * b.y
        );
}

/**
 * Multiply two matrices together
 * @param {Matrix} a 
 * @param {Matrix} b 
 */
function multiplyMatrices(a, b){
    return new Matrix(
        a.m00 * b.m00 + a.m01 * b.m10,
        a.m00 * b.m01 + a.m01 * b.m11,
        a.m10 * b.m00 + a.m11 * b.m10,
        a.m10 * b.m01 + a.m11 * b.m11
    );
}

/**
 * Returns true if both values are equal (within EPSILON value of each other)
 * @param {number} a 
 * @param {number} b 
 */
function equal(a, b){
    return Math.abs(a - b) <= EPSILON;
}

/**
 * Determines whether a > b with a bias
 * @param {number} a 
 * @param {number} b 
 */
function biasGreaterThan(a, b){
    let biasRelative = 0.95;
    let biasAbsolute = 0.01;
    return (a >= ((b * biasRelative) + (a * biasAbsolute)));
}

/**
 * Generates a random value between hi and lo.
 * @param {number} lo 
 * @param {number} hi 
 */
function generateRandom(lo, hi){
    let a = Math.random();
    return ((hi - lo) * a) + l;
}

/**
 * Returns a number in scientific notation (a * 10^b)
 * @param {number} a 
 * @param {number} b 
 */
function sciNum(a, b){
    return a * (10 ** b);
}

/**
 * Returns a number rounded to dp decimal places
 * @param {number} a 
 * @param {number} dp 
 */
function roundDP(a, dp){
    return Math.round(a * 10**dp) / 10**dp;
}

function randomBoolean(){
    return Math.random() >= 0.5;
}

function randomIJ(){
    let dirX = map(Math.random(), 0, 1, -1.49, 1.49);
    dirX = Math.round(dirX);
    let dirY = map(Math.random(), 0, 1, -1.49, 1.49);
    dirY = Math.round(dirY);

    // while(dirX == 0 && dirY == 0){
    //     let dirX = map(Math.random(), 0, 1, -1.49, 1.49);
    //     dirX = Math.round(dirX);
    //     let dirY = map(Math.random(), 0, 1, -1.49, 1.49);
    //     dirY = Math.round(dirY);
    // }

    return new Vector(dirX, dirY);
}

function sigmoid(x, a, b){
    return 1 / (1 + Math.exp(-a * (x - b)));
  }