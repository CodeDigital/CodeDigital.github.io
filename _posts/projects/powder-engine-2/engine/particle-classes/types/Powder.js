class Powder extends Particle{

    spreadRate = 1;

    constructor(environment, location){
        super(environment, location);
        super.initialize();
    }

    step(dt){

        if(!this.updated){
            super.step(dt);
        }

        // Physics
        let goal = this.location.copy();
        goal.add(this.velocity);
        goal.round();

        // console.log(this.canMove(goal));

        if(this.canMove(goal)){ // Can go to the goal from velocity
            // console.log('goal');
            let goalParticle = this.environment.getParticle(goal);

            if(goalParticle == 0){
                this.replace(goal);

                this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
                this.velocity.y += (gravity * dt);
    
                return;
            // }else if(!goalParticle.updated && Math.abs(goalParticle.velocity.magnitude() - this.velocity.magnitude()) < 10){
            }else if(!goalParticle.updated){
                let preM1 = magnitudeVector(this.velocity, this.mass);
                let preM2 = magnitudeVector(goalParticle.velocity, goalParticle.mass);
                let momentumBefore = addVectors(preM1, preM2);
                goalParticle.velocity = magnitudeVector(momentumBefore, -1/goalParticle.mass);

                // goalParticle.velocity = magnitudeVector(momentumBefore, 1/goalParticle.mass);
                // goalParticle.velocity = magnitudeVector(this.velocity, (- this.mass) / goalParticle)
                // Particle.setLiquidDisplaced(this.neighbours[6]);
                Particle.setLiquidDisplaced(goalParticle);
                // this.environment.moveRandomly(this, 5, [0, 1]);
                this.replace(goal);
                // this.environment.moveRandomly(goalParticle, 10, [0, 1]);
                // this.replace(goal);
                this.velocity.x = (this.isInLiquid() ? 0:(randomBoolean() ? -1:1));
                this.velocity.y += (gravity * dt);
    

                return;
            }
        }

        let r = (randomBoolean() ? this.spreadRate : -this.spreadRate);
        let l = -r;
        let u = this.fallRate;
        let moveBottomLeft = addVectors(new Vector(l, u), this.location);
        let moveBottomRight = addVectors(new Vector(r, u), this.location);
        let moveBottom = addVectors(new Vector(0, u), this.location);

        r = (randomBoolean() ? 1 : -1);
        l = -r;
        u = 1;

        if(this.canMove(moveBottom)){
            this.replace(moveBottom);
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

        moveBottom = addVectors(new Vector(0, u), this.location);

        if(this.canMove(moveBottom)){
            this.replace(moveBottom);
            this.velocity.y += (gravity * dt);
            return;
        }

        let liquidLocation = this.isInLiquid();
        if(liquidLocation && Math.random() >= 0.99){
            Particle.setLiquidDisplaced(liquidLocation);
            this.replace(liquidLocation);
            return;
        }

    }
}