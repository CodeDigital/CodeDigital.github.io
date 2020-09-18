const EMPTY_PARTICLE = 'empty';

class Particle{

    type = EMPTY_PARTICLE;
    moved = false;
    moveCount = 0;
    density = 0;
    flammable = 0.05;
    flame = undefined;
    temperature = 20;
    colour;

    /**
     * Creates a particle.
     * @param {Cell} location
     * @param {Number} mass 
     */

    constructor(cell, density, isStatic=false){

        this.cell = cell;
        cell.particle = this;
        this.isStatic = isStatic;

        // 1 pixel is about 0.06 x 0.06 m, and assume there is depth of 10 cm (densities will be in kg / m^3)
        this.mass = 0.0625 * 0.0625 * (density/10);
    }

    setCell(cell){
        this.cell = cell;
        cell.particle = this;
    };

    step(){
        // this.moved = true;
    };

    randomDir(){};

    wantToMove(to, counter=0){

        if(!to){
            return;
        }

        if(this.moved){
            return;
        }

        // if(to.getType() == EMPTY_PARTICLE){
        if(to.particle.density < this.density){
            this.move(to);
            return;
        // }else{
        //     to.step(counter + 1);
        //     if(to.getType() == EMPTY_PARTICLE){
        //         this.move(to);
        //         return;
        //     }
        }
        // return;
    }

    move(to){
        if(to.particle.isStatic){
            return;
        }

        if(this.moved){
            return;
        }

        if(to.particle.moved){
            return;
        }

        // if(to.particle.moveCount > MAX_PARTICLE_MOVES){
        //     // this.moved = true;
        //     // return;
        // }

        // Particle.empty(this.cell);
        to.particle.setCell(this.cell);
        // to.particle.moveCount ++;
        to.particle.moved = true;
        this.setCell(to);
        // this.moveCount ++;
        this.moveCount = 0;
        this.moved = true;
    }

    setColour(){
        // noFill();
        // noStroke();
    };

    // getType(){
    //     return this.type;
    // }

    static empty(cell){
        return new Particle(cell, 0, false);
    }

    static spawn(cell, type, options){
        switch(type){
            case EMPTY_PARTICLE:
                return Particle.empty(cell);

            case WATER_PARTICLE:
                return new Water(cell);

            case SAND_PARTICLE:
                return new Sand(cell);

            case OIL_PARTICLE:
                return new Oil(cell);

            case WOOD_PARTICLE:
                return new Wood(cell);

            case SMOKE_PARTICLE:
                return new Smoke(cell);

            case FIRE_PARTICLE:
                if(options){
                    return new Fire(cell, options.temperature);
                }else{
                    return new Fire(cell);
                }

            default:
                return Particle.empty(cell);
        }
    }


}