class SystemOfBalls {
    balls;
    boundaries;

    constructor(count,boundaries,rad){
        this.balls = [];
        this.count = count;
        this.boundaries = boundaries; //This is a list with x and y values.
        this.rad = rad;
        this.init();


    }

    init(){
        let interval = this.boundaries.y/this.count;
        for(let i = this.rad; i<this.boundaries.y; i+=interval){
            let location = i;
            this.createBall(location,this.rad);
        }
        console.log("Initialized!");
    }

    createBall(yPos,rad){
        let pos = {
            x:0,
            y:yPos
        }
        let color = generateNewColor();
        let velX = 30;
        let velY = 0;
        let ball = new Ball(pos,velX,velY,color,this.rad);
        this.balls.push(ball);
        console.log("Ball created!");
    }

    draw(ctx){
        for(let i=0;i<this.balls.length;i++){
            this.balls[i].draw(ctx,this.boundaries);
        }
    }
 }