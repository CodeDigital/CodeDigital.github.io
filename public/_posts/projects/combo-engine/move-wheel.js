class MoveWheel{
    
    currentMove = null;

    radius = 0.3;
    x = 0.5;
    y = 0.65;
    
    constructor(){

    }

    update(dt){

    }

    show(){

        noFill();
        stroke(50);
        strokeWeight(0.01 * h);
        ellipse(this.x * w, this.y * h, 2 * this.radius * h);

    }
}