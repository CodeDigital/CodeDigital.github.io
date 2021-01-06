const SALT_PARTICLE = 'salt';
const SALT_DENSITY = 2160;

class Salt extends Powder{

    type = SALT_PARTICLE;
    density = SALT_DENSITY;
    friction = 0.999;

    fallRate = 2;
    spreadRate = 5;
    charged = true;

    dissolveChance = 0.9;

    constructor(environment, location){
        super(environment, location);
        super.initialize();

        let pNoise = noise(location.x / 10, location.y / 10);
        this.colour = color(map(pNoise, 0, 1, 215, 255));
    }

    step(dt){

        this.neighbours = this.environment.getNeighbours(this.location);

        this.velocity.y = clamp(this.velocity.y + dt * gravity, -10, 10);

        this.updated = true;
        this.wasDisplaced = false;

        if(!this.canMove(this.neighbours[6])){
            this.velocity.y /= 2;
            // this.velocity.y = 0;
            this.velocity.x *= (this.neighbours[6] ? this.neighbours[6].friction : GLOBAL_FRICTION);
            // this.velocity.multiply(0.5);
            // this.replace(neighbours[6]);
            // return;
        }

        let dissolveLocation = this.canDissolve();
        if(dissolveLocation){
            if(Math.random() < this.dissolveChance){
                Particle.setLiquidDisplaced(this.environment.getParticle(dissolveLocation));
                this.velocity.y = -1;
                this.replace(dissolveLocation);
                return;
            }
        }

        super.step(dt);
    }
}