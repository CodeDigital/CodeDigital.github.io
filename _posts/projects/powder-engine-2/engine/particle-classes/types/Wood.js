const WOOD_PARTICLE = 'wood';
const WOOD_DENSITY = 750;

class Wood extends Particle{

    type = WOOD_PARTICLE;
    density = WOOD_DENSITY;
    isStatic = true;

    constructor(environment, location){
        super(environment, location);
        super.initialize();

        let pNoise = noise(location.x/5, location.y * 2);
        let r = map(pNoise, 0, 1, 70, 110);
        let g = map(pNoise, 0, 1, 29, 50);
        let b = map(pNoise, 0, 1, 0, 19);
        this.colour = color(r, g, b);
    }

    step(dt){
        return;
    }

}