const OIL_PARTICLE = 'oil';
const OIL_DENSITY = 15;

class Oil extends Liquid{

    density = OIL_DENSITY;
    type = OIL_PARTICLE;
    flammable = 0.99;

    constructor(cell){
        super(cell, OIL_DENSITY);

        let pNoise = noise(this.cell.location.x / 10, this.cell.location.y / 10);
        let r = map(pNoise, 0, 1, 135, 175);
        let g = map(pNoise, 0, 1, 100, 140);
        this.colour = color(r, g, 0, 150);
    }

    setColour(){
        noStroke();
        fill(this.colour);
    }

    step(counter=0){
        super.step();
    }
}