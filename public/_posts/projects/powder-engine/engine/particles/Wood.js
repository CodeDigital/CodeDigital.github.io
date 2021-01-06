const WOOD_PARTICLE = "wood";
const WOOD_DENSITY = 12;

class Wood extends Particle{

    density = WOOD_DENSITY;
    type = WOOD_PARTICLE;
    flammable = 0.4;

    constructor(cell){
        super(cell, WOOD_DENSITY, true);

        let pNoise = noise(this.cell.location.x, this.cell.location.y);
        let r = map(pNoise, 0, 1, 55, 75);
        let g = map(pNoise, 0, 1, 35, 55);
        let b = map(pNoise, 0, 1, 0, 20);
        this.colour = color(r, g, b);
    }

    setColour(){
        strokeWeight(-1);
        stroke(this.colour);
        fill(this.colour);
    }

    step(counter=0){
        super.step();
        return;
    }
}