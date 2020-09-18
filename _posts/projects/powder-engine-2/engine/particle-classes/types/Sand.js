const SAND_PARTICLE = 'sand';
const SAND_DENSITY = 1442;

class Sand extends Powder{

    type = SAND_PARTICLE;
    density = SAND_DENSITY;
    friction = 0.999;

    constructor(environment, location){
        super(environment, location);
        super.initialize();

        let pNoiseR = noise(location.x / 10, location.y / 10);
        let pNoiseG = noise(location.y / 10, location.x / 10);
        let pNoiseB = noise(location.x * location.y / 100);
        let r = map(pNoiseR, 0, 1, 193, 194);
        let g = map(pNoiseG, 0, 1, 154, 178);
        let b = map(pNoiseB, 0, 1, 107, 128);
        this.colour = color(r, g, b);
    }

    // step(dt){
    //     super.step(dt);
    // }
}