const WATER_PARTICLE = 'water';
const WATER_DENSITY = 997;

class Water extends Liquid{

    type = WATER_PARTICLE;
    density = WATER_DENSITY;
    friction = 0.95;
    charged = true;

    constructor(environment, location){
        super(environment, location);
        super.initialize();

        // let pNoiseR = noise(location.x / 10, location.y / 10);
        let pNoiseG = noise(location.y / 10, location.x / 10);
        let pNoiseB = noise(location.x * location.y / 100);
        // let r = map(pNoiseR, 0, 1, 193, 194);
        let g = map(pNoiseG, 0, 1, 100, 200);
        let b = map(pNoiseB, 0, 1, 235, 255);
        this.colour = color(0, g, b, 200);
    }
    
}