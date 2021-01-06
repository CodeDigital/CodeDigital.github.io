class Vector{
    /**
     * Defines a 2-dimensional vector class
     * @param {number} x 
     * @param {number} y 
     */
    constructor(x, y){
        if(typeof y == 'number'){
            this.x = x;
            this.y = y;
        }else{
            this.x = Math.cos(x);
            this.y = Math.sin(x);
        }
    }

    /**
     * Sets a vector to a normal based on an angle in radians
     * @param {number} radians 
     */
    set(radians){
        this.x = Math.cos(radians);
        this.y = Math.sin(radians);
    }

    /**
     * Adds v to vector
     * @param {Vector} v 
     */
    add(v){
        this.x += v.x;
        this.y += v.y;
    }

    /**
     * Subtracts v from vector
     * @param {Vector} v 
     */
    subtract(v){
        this.x -= v.x;
        this.y -= v.y;
    }

    /**
     * Multiplies vector by a scalar value
     * @param {number} s 
     */
    multiply(s){
        this.x *= s;
        this.y *= s;
    }

    normal(){
        let magnitude = this.magnitude();
        return magnitudeVector(this, (magnitude != 0 ? 1/magnitude:0));
    }

    normalize(){
        let magnitude = this.magnitude();
        this.multiply((magnitude != 0 ? 1/magnitude:0));
    }

    negative(){
        return new Vector(-this.x, -this.y);
    }

    magnitude(){
        return Math.sqrt(this.x**2 + this.y**2);
    }

    magnitudeSquared(){
        return this.x**2 + this.y**2;
    }

    round(){
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
    }

    zero(){
        this.x = 0;
        this.y = 0;
    }

    copy(){
        return new Vector(this.x, this.y);
    }

    toString(){
        return `x: ${Math.round(this.x)}, y: ${Math.round(this.y)}`;
    }
}