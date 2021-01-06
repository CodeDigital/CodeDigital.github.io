// const LIQUID_ABSTRACT = 'liquid';

class Liquid extends Particle{

    // abstractType = LIQUID_ABSTRACT;
    spreadRate = 3;
    fallRate = 2;
    depth = 0;

    constructor(environment, location){
        super(environment, location);
        super.initialize();
    }

    // updateColourDepth(){}

    step(dt){
        
        if(!this.updated){
            super.step(dt);
        }

        // this.updateColourDepth();

        let r = (randomBoolean() ? this.spreadRate : -this.spreadRate);
        let l = -r;
        let u = this.fallRate;
        let moveBottomLeft = addVectors(new Vector(l, u), this.location);
        let moveBottomRight = addVectors(new Vector(r, u), this.location);
        let moveBottom = addVectors(new Vector(0, u), this.location);
        let moveLeft = addVectors(moveBottomLeft, new Vector(0, -u));
        let moveRight = addVectors(moveBottomRight, new Vector(0, -u))

        r = (randomBoolean() ? 1 : -1);
        l = -r;
        u = 1;

        let goal = this.location.copy();
        goal.add(this.velocity);
        goal.round();

        if(this.canMove(goal)){
            this.replace(goal);
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);
            return;
        }

        if(this.canMove(moveBottom)){
            this.replace(moveBottom);
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);
            return;
        }

        if(this.canMove(moveBottomLeft)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveBottomLeft);
            return;
        }

        moveBottomLeft = addVectors(new Vector(l, u), this.location);

        if(this.canMove(moveBottomLeft)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveBottomLeft);
            return;
        }


        if(this.canMove(moveBottomRight)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveBottomRight);
            return;
        }

        moveBottomRight = addVectors(new Vector(r, u), this.location);

        if(this.canMove(moveBottomRight)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveBottomRight);
            return;
        }

        if(this.canMove(moveLeft)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveLeft);
            return;
        }

        moveLeft = addVectors(moveBottomLeft, new Vector(0, -u));

        if(this.canMove(moveLeft)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveLeft);
            return;
        }        

        if(this.canMove(moveRight)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveRight);
            return;
        }

        moveRight = addVectors(moveBottomRight, new Vector(0, -u))

        if(this.canMove(moveRight)){
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);

            this.replace(moveRight);
            return;
        }

        moveBottom = addVectors(new Vector(0, u), this.location);

        if(this.canMove(moveBottom)){
            this.replace(moveBottom);
            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
            this.velocity.y += (gravity * dt);
            return;
        }

        // let liquidLocation = this.isInLiquid();
        // if(liquidLocation && Math.random() >= 0.9){
        //     this.replace(liquidLocation);
        //     return;
        // }

        if(this.isSurrounded()){
            return;
        }else{
            for(let i = 0; i < this.fallRate; i++){
                for(let j = this.spreadRate; j > 0; j--){
                    if(randomBoolean()){
                        let goalLocationL = this.location.copy();
                        goalLocationL.add(new Vector(j, i));
                        if(this.canMove(goalLocationL)){
                            this.replace(goalLocationL);
                            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
                            this.velocity.y += (gravity * dt);
                            return;
                        }

                        let goalLocationR = this.location.copy();
                        goalLocationR.add(new Vector(-j, i));
                        if(this.canMove(goalLocationR)){
                            this.replace(goalLocationR);
                            this.velocity.x = (this.isInLiquid(this.neighbours) ? 0:(randomBoolean() ? -1:1));
                            this.velocity.y += (gravity * dt);
                            return;
                        }
                    }else{
                        let goalLocationR = this.location.copy();
                        goalLocationR.add(new Vector(-j, i));
                        if(this.canMove(goalLocationR)){
                            this.replace(goalLocationR);
                            this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
                            this.velocity.y += (gravity * dt);
                            return;
                        }

                        let goalLocationL = this.location.copy();
                        goalLocationL.add(new Vector(j, i));
                        if(this.canMove(goalLocationL)){
                            this.replace(goalLocationL);
                            this.velocity.x = (this.isInLiquid(this.neighbours) ? 0:(randomBoolean() ? -1:1));
                            this.velocity.y += (gravity * dt);
                            return;
                        }
                    }
                }
            }
        }
    }
}