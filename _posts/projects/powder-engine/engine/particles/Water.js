const WATER_PARTICLE = 'water';
const WATER_DENSITY = 20;

class Water extends Liquid{

    density = WATER_DENSITY;
    type = WATER_PARTICLE;

    constructor(cell){
        super(cell, WATER_DENSITY);

        // this.spreadTendency = Math.random();
        // this.spreadTendency = 0.5;

        let pNoise = noise(this.cell.location.x / 10, this.cell.location.y / 10);
        let g = map(pNoise, 0, 1, 130, 150);
        let b = map(pNoise, 0, 1, 200, 255);
        this.colour = color(0, g, b, 150);
    }

    setColour(){
        noStroke();
        // strokeWeight(0.5);
        // stroke(0, 150, 255);
        fill(this.colour);
    }

    step(counter=0){
        super.step();
    }
}