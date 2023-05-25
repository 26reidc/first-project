class Ball {
    constructor(pos,velX,velY,color,rad){
        this.x = this.pos.x;
        this.y = this.pos.y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.rad = rad;
    }

    draw(ctx,bounds){                   //bounds are a list of x and y values
        this.pos.x += this.velX
        this.pos.y += this.velY;
        this.switchVelIfHit(bounds);
        ctx.save();
        ctx.fillStyle = this.color;
        ctx.strokeStyle = "blue";
        ctx.moveTo(this.x,this.y);
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad,0,2*Math.PI, false);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }

    switchVelIfHit(bounds){
        if(this.x>=bounds.x-this.rad && this.velX>0){
            this.switchDirection(this.velX);
            this.color = generateNewColor();
        }
        if(this.x<=0+this.rad && this.velX<0){
            this.switchDirection(this.velX);
            this.color = generateNewColor();
        }
        //check for vertical direction   switch
        if(this.y>=canvas.height-this.rad && this.velY>0){ 
            this.switchDirection(this.velY);
            this.color = generateNewColor();
        }
        if(this.y<=0+this.rad && this.velY<0){
            this.switchDirection(this.velY);
            this.color = generateNewColor();
        }
    }
    generateVelocity(){
        let sign = Math.random();
        if(sign<0.5){sign = -1;}
        if(sign>0.5){sign = 1;}
        return sign*(Math.floor(Math.random()*baseSpeed)+1);
    }
    switchDirection(vel){               
        let sign;
        if(vel>0){sign=-1;}
        else if(vel<0){sign=1;}
        this.vel = sign*(Math.floor(Math.random()*baseSpeed)+1);
    }
}
