const FIRE_PARTICLE = 'fire';
const FIRE_DENSITY = 3;
const FIRE_START_TEMP = 100;
const FIRE_FIZZLE_TEMP = 15;
const FIRE_DECAY = 0.75;

class Fire extends Particle{

    density = FIRE_DENSITY;
    type = FIRE_PARTICLE;
    temperature = FIRE_START_TEMP;

    constructor(cell, temperature){
        super(cell, FIRE_DENSITY);
        if(typeof temperature === "number"){
            this.temperature = temperature;
        }

        if(this.temperature < FIRE_FIZZLE_TEMP){
            this.fizzleOut();
        }
    }

    setColour(){
        stroke(200, 100, 0);
        // strokeWeight(5);
        fill(255, 50, 0);
        // console.log(fire);
    }

    step(){
        this.temperature *= FIRE_DECAY;

        // if(this.checkFuel()){
            // this.fizzleOut();
        // }

        if(this.temperature < FIRE_FIZZLE_TEMP){
            this.fizzleOut();
        }

        this.spread(this.cell.below);

        this.spread(this.cell.belowLeft);

        this.spread(this.cell.belowRight);

        this.spread(this.cell.left);

        this.spread(this.cell.right);

        this.spread(this.cell.above);

        this.spread(this.cell.aboveLeft);

        this.spread(this.cell.aboveRight);
    }

    spread(to){
        if(!to){
            return;
        }

        if(to.getType() == FIRE_PARTICLE){
            return;
        }

        let burnLottery = Math.random();
        if(burnLottery < to.particle.flammable){
            this.temperature /= to.particle.flammable * 2;
            Particle.spawn(to, FIRE_PARTICLE, {temperature:this.temperature *= FIRE_DECAY});
            to.particle.moved = true;
        }else{
            if(to.getType() == EMPTY_PARTICLE){
                Particle.spawn(to, SMOKE_PARTICLE);
            }
        }

        this.moved = true;
    }

    checkAir(){
        if(this.cell.below){
            if(this.cell.below.getType() == EMPTY_PARTICLE){
                return true;
            }
        }

        if(this.cell.belowLeft){
            if(this.cell.belowLeft.getType() == EMPTY_PARTICLE){
                return true;
            }
        }

        if(this.cell.belowRight){
            if(this.cell.belowRight.getType() == EMPTY_PARTICLE){
                return true;
            }
        }
        if(this.cell.left){
            if(this.cell.left.getType() == EMPTY_PARTICLE){
                return true;
            }
        }
        if(this.cell.right){
            if(this.cell.right.getType() == EMPTY_PARTICLE){
                return true;
            }
        }
        if(this.cell.above){
            if(this.cell.above.getType() == EMPTY_PARTICLE){
                return true;
            }
        }
        if(this.cell.aboveLeft){
            if(this.cell.aboveLeft.getType() == EMPTY_PARTICLE){
                return true;
            }
        }
        if(this.cell.aboveRight){
            if(this.cell.aboveRight.getType() == EMPTY_PARTICLE){
                return true;
            }
        }

        return false;
    }

    fizzleOut(){
        // let smokeSize = 3;
        // for(let a = 0; a < smokeSize; a++){
            // for(let b = 0; b < smokeSize; b++){
                // Particle.spawn(this.cell, SMOKE_PARTICLE);
                Particle.empty(this.cell);                
            // }
        // }
    }
}