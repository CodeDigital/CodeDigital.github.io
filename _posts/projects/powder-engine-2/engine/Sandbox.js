class Sandbox{

    constructor(size){
        this.size = size;
        this.particles = [];
        this.cellSize = Math.min((w) / this.size.x,(h) / this.size.y);

        for(let i = 0; i < size.x * size.y; i++){
            this.particles[i] = 0;
        }
    }

    step(dt, counter){
        // for(let i = this.size.y - 1; i >= 0; i--){
        //     for(let j = 0; j < this.size.x; j++){
        //         if(this.particles[i * this.size.x + j]){
        //             this.particles[i * this.size.x + j].step(dt);
        //         }
        //     }
        // }

        let particlesLength = this.particles.length;

        if(typeof counter === 'number'){
            // console.clear();
            // console.log("test");
            switch(counter % 2){
                case 0:
                    for(let i = this.size.y - 1; i >= 0; i--){
                        for(let j = 0; j < this.size.x; j++){
                            if(this.particles[i * this.size.x + j]){
                                this.particles[i * this.size.x + j].step(dt);
                            }
                        }
                    }
                    break;
                case 1:
                    for(let i = this.size.y - 1; i >= 0; i--){
                        for(let j = this.size.x - 1; j >= 0; j--){
                            if(this.particles[i * this.size.x + j]){
                                this.particles[i * this.size.x + j].step(dt);
                            }
                        }
                    }
                    break;
                default:
                    for(let i = this.size.y - 1; i >= 0; i--){
                        for(let j = 0; j < this.size.x; j++){
                            if(this.particles[i * this.size.x + j]){
                                this.particles[i * this.size.x + j].step(dt);
                            }
                        }
                    }
                    break;
            }
        }else{

            // for(let i = particlesLength - 1; i >= 0; i-= 2){
            //     if(this.particles[i]){
            //         this.particles[i].step(dt);
            //     }
            // }

            // for(let i = (particlesLength - 1 % 2 == 0 ? 1:0); i < particlesLength; i+=2){
            //     if(this.particles[i]){
            //         this.particles[i].step(dt);
            //     }
            // }

            // for(let i = particlesLength - 1; i >= 0; i--){
            //     if(this.particles[i]){
            //         this.particles[i].step(dt);
            //     }
            // }

            // for(let i = 0; i < this.size.y; i+= 2){
            //     for(let j = 0; j < this.size.x; j+= 2){
            //         if(this.particles[i * this.size.x + j]){
            //             this.particles[i * this.size.x + j].step(dt);
            //         }
            //     }
            // }

            // for(let i = this.size.y - 1; i >= 0; i--){
            //     for(let j = 0; j < this.size.x; j++){
            //         if(this.particles[i * this.size.x + j]){
            //             this.particles[i * this.size.x + j].step(dt);
            //         }
            //     }
            // }

            let everyNRows = 2;
            let everyNCols = 2;

            for(let a = 0; a < everyNRows; a++){
                for(let b = 0; b < everyNCols; b++){
                    if(a % 2 == 0){
                        if(b % 2 == 0){
                            for(let i = a; i < this.size.y; i++){
                                for(let j = b; j < this.size.x; j++){
                                    if(this.particles[i * this.size.x + j]){
                                        // if(!this.particles[i * this.size.x + j].updated){
                                            this.particles[i * this.size.x + j].step(dt);
                                        // }
                                    }
                                }
                            }
                        }else{
                            for(let i = a; i < this.size.y; i++){
                                for(let j = this.size.x - (b+1); j >= 0; j--){
                                    if(this.particles[i * this.size.x + j]){
                                        // if(!this.particles[i * this.size.x + j].updated){
                                            this.particles[i * this.size.x + j].step(dt);
                                        // }
                                    }
                                }
                            }
                        }
                    }else{
                        if(b % 2 == 0){
                            for(let i = this.size.y - (a + 1); i >= 0; i--){
                                for(let j = b; j < this.size.x; j++){
                                    if(this.particles[i * this.size.x + j]){
                                        // if(!this.particles[i * this.size.x + j].updated){
                                            this.particles[i * this.size.x + j].step(dt);
                                        // }
                                    }
                                }
                            }
                        }else{
                            for(let i = this.size.y - (a + 1); i >= 0; i--){
                                for(let j = this.size.x - (b+1); j >= 0; j--){
                                    if(this.particles[i * this.size.x + j]){
                                        // if(!this.particles[i * this.size.x + j].updated){
                                            this.particles[i * this.size.x + j].step(dt);
                                        // }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }


        // let particlesLength = this.particles.length;
        for(let i = 0; i < particlesLength; i++){
            if(this.particles[i]){
                this.particles[i].postStep();
            }
        }        
    }

    show(){
        push();
        // if(this.size.x * this.cellSize < w){
        //     translate((w - this.size.x * this.cellSize)/2 + this.cellSize/2, this.cellSize/2);
        // }
        rectMode(CORNER);
        fill(0);
        noStroke();
        rect(0, 0, this.size.x * this.cellSize, this.size.y * this.cellSize);

        let particlesLength = this.particles.length;
        for(let i = 0; i < particlesLength; i++){
            if(this.particles[i]){
                this.particles[i].show();
            }
        }
        pop();
    }

    addParticle(ij, type){
        if(!this.inBounds(ij)){
            return;
        }
        let id = this.getID(ij);
        if(this.particles[id] != 0 && type != EMPTY_PARTICLE){
            return;
        }
        this.particles[id] = Particle.spawn(this, ij, type);
    }

    getParticle(ij){
        if(ij && (ij != 0 && this.inBounds(ij))){
            return this.particles[this.getID(ij)];
        }

        return undefined;
    }

    inBounds(ij){
        if((ij.x < this.size.x && ij.x >= 0) && (ij.y < this.size.y && ij.y >= 0)){
            return true;
        }
        return false;
    }

    getID(ij){
        return ij.y * this.size.x + ij.x;
    }

    
    getNeighbours(ij){
        let neighbours = [];

        /*
        0  1  2
        3  X  4
        5  6  7 
        */

        if((ij.y - 1) < 0){
            neighbours[1] = undefined;
        }else{
            neighbours[1] = new Vector(ij.x, ij.y - 1);
        }

        if((ij.x - 1) < 0){
            neighbours[3] = undefined;
        }else{
            neighbours[3] = new Vector(ij.x - 1, ij.y);
        }

        if((ij.y + 1) >= this.size.y){
            neighbours[6] = undefined;
        }else{
            neighbours[6] = new Vector(ij.x, ij.y + 1);
        }

        if((ij.x + 1) >= this.size.x){
            neighbours[4] = undefined;
        }else{
            neighbours[4] = new Vector(ij.x + 1, ij.y);
        }

        if(neighbours[1] && neighbours[3]){
            neighbours[0] = new Vector(ij.x - 1, ij.y - 1);
        }

        if(neighbours[1] && neighbours[4]){
            neighbours[2] = new Vector(ij.x + 1, ij.y - 1);
        }

        if(neighbours[6] && neighbours[3]){
            neighbours[5] = new Vector(ij.x - 1, ij.y + 1);
        }

        if(neighbours[6] && neighbours[4]){
            neighbours[7] = new Vector(ij.x + 1, ij.y + 1);
        }

        return neighbours;
    }
  
    moveRandomly(particle, radius, quadrants){
        let xmin = 0, xmax = 0, ymin = 0, ymax = 0;
        for(let i = 0; i < quadrants.length; i++){
            switch(quadrants[i]){
                case 0:
                    ymin = -radius;
                    xmax = radius;
                    break;

                case 1:
                    ymin = -radius;
                    xmin = -radius;
                    break;

                case 2:
                    xmin = -radius;
                    ymax = radius;
                    break;

                case 3:
                    xmax = radius;
                    ymax = radius;
                    break;

                default:
                    break;
            }
        }

        let pLocation = particle.location.copy();
        for(let i = ymin; i < ymax; i++){
            for(let j = xmin; j < xmax; j++){
                let newLocation = addVectors(pLocation, new Vector(j, i));
                if(this.getParticle(newLocation) == 0){
                    particle.replace(newLocation);
                    return;
                }
            }
        }
    }

    updateCellSize(){
        this.cellSize = Math.min((w) / this.size.x,(h) / this.size.y);
    }

    getCellCoordinates(location){
        let ij = location.copy();
        ij.multiply(1 / this.cellSize);
        ij.round();
        return ij;
    }

    clearParticles(){
        for(let i = 0; i < this.particles.length; i++){
            this.particles[i] = 0;
        }
    }
}