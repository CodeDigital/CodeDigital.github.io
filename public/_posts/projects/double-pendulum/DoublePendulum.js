class DoublePendulum{
    /**
     * Creates a Double Pendulum with options
     * {
        *  origin, [REQUIRED]
        *  a1, a2, [REQUIRED]
        *  av1, av2,
        *  m1, m2, [REQUIRED]
        *  len1, len2 [REQUIRED]
        *  integrator [REQUIRED] 
        Where 0 = Euler, 1 = RK4 Standard, 2 = Symplectic RK4
    * }
    * @param {Object} options 
    */    
    constructor(options){
        this.options = options;
        this.origin = options.origin;
        this.a1 = options.a1;
        this.a2 = options.a2;
        this.m1 = options.m1;
        this.m2 = options.m2;
        this.len1 = options.len1;
        this.len2 = options.len2;
        this.integrator = options.integrator

        if(typeof options.av1 == "number"){
            this.av1 = options.av1;
        }else{
            this.av1 = 0;
        }

        if(typeof options.av2 == "number"){
            this.av2 = options.av2;
        }else{
            this.av2 = 0;
        }

        this.pa1 = 0;
        this.pa2 = 0;

        this.gpe = (this.m1 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1)))+(this.m2 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1) - this.len2 * Math.cos(this.a2)));
        this.ke = (0.5 * (this.m1 + this.m2) * this.av1 * this.av1 * this.len1 * this.len1) + (0.5 * this.m2 * (this.av2 * this.av2 * this.len2 * this.len2 + 2 * this.len1 * this.len2 * this.av1 * this.av2 * Math.cos(this.a1 - this.a2)));
        this.initialE = this.ke + this.gpe;

        this.size1 = 15 * this.m1; // ppm * Math.sqrt(this.m1 / Math.PI);
        this.size2 = 15 * this.m2; // ppm * Math.sqrt(this.m2 / Math.PI);
    }

    /**
     * Steps through the integrator of the pendulum to find next state.
     * @param {number} dt 
     */
    step(dt){

        switch(this.integrator){
            case 0:
                stepEuler(this, dt);
                break;
            case 1:
                stepRK4(this, dt);
                break;
            case 2:
                stepSymplecticRK4(this, dt);
                break;
            default:
                stepEuler(this, dt);
                break;
        }

        this.ke = (0.5 * (this.m1 + this.m2) * this.av1 * this.av1 * this.len1 * this.len1) + (0.5 * this.m2 * (this.av2 * this.av2 * this.len2 * this.len2 + 2 * this.len1 * this.len2 * this.av1 * this.av2 * Math.cos(this.a1 - this.a2)));
        this.gpe = (this.m1 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1)))+(this.m2 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1) - this.len2 * Math.cos(this.a2)));

    }

    /**
     * Show the double pendulum
     */
    show(){
        push();

        let ox = this.origin; // * ppm;
        // let oy = this.origin.y; // * ppm;

        translate(ox, 0);

        let x1 = ppm * this.len1 * Math.sin(this.a1);
        let y1 = ppm * this.len1 * Math.cos(this.a1);
        let x2 = x1 + ppm * this.len2 * Math.sin(this.a2);
        let y2 = y1 + ppm * this.len2 * Math.cos(this.a2);  

        fill(255);
        stroke(255);
        strokeWeight(3);

        drawingContext.shadowBlur = 10;
        drawingContext.shadowColor = "white";
        ellipse(0, 0, 10);
        line(0, 0, x1, y1);
        line(x1, y1, x2, y2);

        noStroke();

        fill("#FF4400");
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = "#FF4400";
        ellipse(x1, y1, this.size1);

        fill("#0044FF");
        drawingContext.shadowBlur = 20;
        drawingContext.shadowColor = "#0044FF";
        ellipse(x2, y2, this.size2);

        drawingContext.shadowBlur = 0;
        drawingContext.shadowColor = "#0044FF";

        if(w < 750){
            return;
        }

        let maxLen = ppm * (this.len1 + this.len2);
        let type = '';
        switch(this.integrator){
            case 0:
                type = "Euler Method";
                break;
            case 1:
                type = "RK4 Method";
                break;
            case 2:
                type = "Symplectic RK4 Method";
                break;
            default:
                type = "Euler Method";
                break;
        }


        let textY = maxLen + ppm;
        let teColor = "#0044FF";
        let gpeColor = "#00FF00";
        let keColor = "#FF0000";

        noStroke();
        // stroke(255);
        fill(34);
        // rectMode(CENTER);
        rect(-w/6, textY-30, w/3, w/3);

        textSize(20);
        fill(255);
        noStroke();
        textAlign(CENTER);
        text(type, 0, textY);

        textY += 30;
        let eWidth = 2*ppm;
        let rectX = -eWidth / 2;

        rectMode(CORNER);
        noStroke();

        let gpeW = eWidth * (this.initialE == 0 ? 0:this.gpe/this.initialE);
        fill(gpeColor);
        rect(rectX, textY-10, gpeW, 20);
      
        rectX += gpeW;
        let keW = eWidth * (this.initialE == 0 ? 0:this.ke/this.initialE);
        fill(keColor);
        rect(rectX, textY-10, keW, 20);

        rectMode(CENTER);
        noFill();
        strokeWeight(4);

        stroke(255);
        rect(0, textY, eWidth, 20);

        noFill();
        stroke(teColor);
        strokeWeight(6);
        let te = this.ke + this.gpe
        let teW = eWidth * (this.initialE == 0 ? 0:te/this.initialE);
        line(-eWidth / 2, textY-10,(-eWidth / 2) + teW, textY-10);

        textAlign(RIGHT);
        // let textX = -120;
        let textX = 120;
        textY += 40;
        let energyUnit = " Joules"

        textSize(20);
        fill(255);
        noStroke();
        fill(gpeColor);
        text("GPE: " + roundDP(this.gpe, 2) + energyUnit, textX, textY);
        textY += 30;
        fill(keColor);
        text("KE: " + roundDP(this.ke, 2) + energyUnit, textX, textY);
        textY += 30;
        fill(teColor);
        text("Total Energy: " + roundDP(te, 2) +energyUnit, textX, textY);
        textY += 30;
        fill(255);
        text("Initial Energy: " + roundDP(this.initialE, 2) + energyUnit, textX, textY);

        pop();
    }

    /**
     * Resets the pendulum to the beginning.
     */
    reset(){
        this.origin = this.options.origin;
        this.a1 = this.options.a1;
        this.a2 = this.options.a2;
        this.m1 = this.options.m1;
        this.m2 = this.options.m2;
        this.len1 = this.options.len1;
        this.len2 = this.options.len2;
        this.integrator = this.options.integrator

        if(typeof this.options.av1 == "number"){
            this.av1 = this.options.av1;
        }else{
            this.av1 = 0;
        }

        if(typeof this.options.av2 == "number"){
            this.av2 = this.options.av2;
        }else{
            this.av2 = 0;
        }

        if(typeof this.options.aa1 == "number"){
            this.aa1 = this.options.aa1;
        }else{
            this.aa1 = 0;
        }

        if(typeof this.options.aa2 == "number"){
            this.aa2 = this.options.aa2;
        }else{
            this.aa2 = 0;
        }

        this.pa1 = 0;
        this.pa2 = 0;

        this.initialGPE = (this.m1 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1)))+(this.m2 * G * (this.len1 + this.len2 - this.len1 * Math.cos(this.a1) - this.len2 * Math.cos(this.a2)));
        this.gpe = this.initialGPE;
        this.ke = 0;
    }

    getOptions(){
        return Object.assign({}, this.options);
    }
}