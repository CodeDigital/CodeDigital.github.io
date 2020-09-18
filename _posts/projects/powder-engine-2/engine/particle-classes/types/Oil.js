const OIL_PARTICLE = 'oil';
const OIL_DENSITY = 875;

class Oil extends Liquid{

    type = OIL_PARTICLE;
    density = OIL_DENSITY;
    friction = 0.999;

    constructor(environment, location){
        super(environment, location);
        super.initialize();

        let pNoiseR = noise(location.x / 10, location.y / 10);
        let pNoiseG = noise(location.y / 10, location.x / 10);
        let r = map(pNoiseR, 0, 1, 207, 247);
        let g = map(pNoiseG, 0, 1, 162, 202);
        this.colour = color(r, g, 0, 200);
    }
    
}