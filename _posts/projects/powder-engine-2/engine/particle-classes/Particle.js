const EMPTY_PARTICLE = 'empty';
// const PARTICLE_ABSTRACT = 'particle';

class Particle{

    // abstractType = PARTICLE_ABSTRACT;
    type = EMPTY_PARTICLE;
    updated = false;
    wasDisplaced = false;
    isStatic = false;
    // replace = [];
    density = 0;
    mass = 0;
    colour = color(255);

    // Physical / Chemical Properties.
    fallRate = 4;
    velocity = new Vector(0, 0);
    friction = 0.99;
    neighbours = [];
    charged = false;

    constructor(environment, location){
        this.environment = environment;
        this.location = location
        this.id = this.environment.getID(this.location);
    }

    initialize(){
        this.mass = 0.0625 * 0.0625 * (this.density/10);
    }

    step(dt){
        this.neighbours = this.environment.getNeighbours(this.location);

        this.velocity.y = clamp(this.velocity.y + dt * gravity, -10, 10);

        this.updated = true;
        this.wasDisplaced = false;

        let moveDown = addVectors(this.location, new Vector(0, 1));

        if(!this.canMove(moveDown)){
            let downParticle = this.environment.getParticle(moveDown);
            // this.velocity.y = 0;
            if(downParticle && downParticle != 0){
                this.velocity.y /= 2;
                this.velocity.x *= (moveDown ? downParticle.friction : GLOBAL_FRICTION);
            }
            // this.velocity.multiply(0.5);
            // this.replace(neighbours[6]);
            // return;
        }
    }

    postStep(){
        this.updated = false;
        this.wasDisplaced = false;
        this.neighbours = [];
    }

    canMove(to){

        if(!to){
            return false;
        }

        if(!this.environment.inBounds(to)){
            return false;
        }

        let destination = this.environment.getParticle(to);

        if(destination == 0){
            return true;
        }

        if(!destination){
            return false;
        }

        // if(destination.wasDisplaced){
        //     return false;
        // }


        // if(destination.isStatic){
        //     return false;
        // }

        // if(destination.updated){
        //     return false;
        // }

        if(destination instanceof Liquid && this.density > destination.density){
            return true;
        }

        return false;
    }

    replace(to){
        let temp = this.environment.getParticle(to);
        let tempID = this.environment.getID(to);
        let oldID = this.id;
        let oldLocation = this.location;

        if(temp){
            temp.id = oldID;
            temp.location = oldLocation;
        }

        this.environment.particles[tempID] = this;
        this.id = tempID;
        this.location = to;

        Particle.setLiquidDisplaced(temp);

        this.environment.particles[oldID] = temp;

        // this.neighbours = this.environment.getNeighbours(this.location);
    }

    changeLocation(to){

    }

    /* Display Systems */
    show(){
        this.setColour();
        // rectMode(CENTER);
        rect(this.location.x * this.environment.cellSize, this.location.y * this.environment.cellSize, this.environment.cellSize, this.environment.cellSize);
    }

    setColour(){
        noStroke();
        fill(this.colour);
    }

    updateColourDepth(){

        // console.log('color');

        let depthUp = 0;
        if(this.neighbours[1]){
            let nextLocation = this.neighbours[1].copy();
            let nextParticle = this.environment.getParticle(nextLocation);
            while(nextParticle && nextParticle != 0){
                depthUp ++;
                nextLocation.add(new Vector(0, -1));
                nextParticle = this.environment.getParticle(nextLocation);
                if(!nextParticle){
                    depthUp += 1000;
                }
            }
        }

        let depthDown = 0;
        if(this.neighbours[6]){
            let nextLocation = this.neighbours[6].copy();
            let nextParticle = this.environment.getParticle(nextLocation);
            while(nextParticle && nextParticle != 0){
                depthDown ++;
                nextLocation.add(new Vector(0, 1));
                nextParticle = this.environment.getParticle(nextLocation);
                if(!nextParticle){
                    depthDown += 1000;
                }
            }
        }

        let depth = (depthUp < depthDown ? depthUp:depthDown);

        let newAlpha = 155 * sigmoid(depth, 0.3, 20) + 100;
        this.colour.setAlpha(newAlpha);
    }

    isInLiquid(){

        let neighbours = [...this.neighbours];

        while(neighbours.length > 0){
            let i = neighbours[Math.floor(Math.random() * neighbours.length)];
            let checkParticle = this.environment.getParticle(i);
            if(checkParticle instanceof Liquid){
                return i.copy();
            }
            neighbours.splice(neighbours.indexOf(i), 1);
        }

        // for(let i = 1; i < this.neighbours.length; i+=2){
        //     if(this.environment.getParticle(this.neighbours[i]) instanceof Liquid){
        //         return this.neighbours[i].copy();
        //     }
        // }

        // for(let i = 0; i < this.neighbours.length; i+=2){
        //     if(this.environment.getParticle(this.neighbours[i]) instanceof Liquid){
        //         return this.neighbours[i].copy();
        //     }
        // }

        return false;
    }

    canDissolve(){
        let neighbours = [...this.neighbours];

        while(neighbours.length > 0){
            let randomI = Math.floor(Math.random() * neighbours.length);
            let i = neighbours[randomI];
            let checkParticle = this.environment.getParticle(i);
            if(checkParticle instanceof Liquid){
                if(this.charged == checkParticle.charged){
                    // console.log('dissolve: ', );
                    return i.copy();
                }
            }
            neighbours.splice(randomI, 1);
        }

        // for(let i = 1; i < this.neighbours.length; i+=2){
        //     let checkParticle = this.environment.getParticle(this.neighbours[i]);
        //     if(checkParticle instanceof Liquid){
        //         if(this.charged == checkParticle.charged){
        //             return this.neighbours[i].copy();
        //         }
        //     }
        // }

        // for(let i = 0; i < this.neighbours.length; i+=2){
        //     let checkParticle = this.environment.getParticle(this.neighbours[i]);
        //     if(checkParticle instanceof Liquid){
        //         if(this.charged == checkParticle.charged){
        //             return this.neighbours[i].copy();
        //         }
        //     }
        // }

        return false;
    }

    isSurrounded(){
        for(let i = 0; i < this.neighbours.length; i++){
            if(this.neighbours[i] == 0){
                return false;
            }
        }

        return true;
    }

    static setLiquidDisplaced(particle){
        if(particle instanceof Liquid){
            particle.wasDisplaced = true;
        }
    }

    static spawn(environment, location, type){
        switch(type){
            case EMPTY_PARTICLE:
                return 0;

            case SAND_PARTICLE:
                return new Sand(environment, location);

            case WATER_PARTICLE:
                return new Water(environment, location);

            case OIL_PARTICLE:
                return new Oil(environment, location);

            case WOOD_PARTICLE:
                return new Wood(environment, location);

            case SALT_PARTICLE:
                return new Salt(environment, location);

            // case FIRE_PARTICLE:
            //     return new Fire();

            default:
                return 0;
            }
    }

}