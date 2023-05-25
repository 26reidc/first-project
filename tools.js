const canvas = document.getElementById("space");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);

function clearScreen(){
    ctx.fillStyle = "rgba(0,0,0)";
ctx.fillRect(0,0,canvas.clientWidth,canvas.clientHeight);
}
clearScreen();


                                                                        //                          -----------
// var rad = 20;
// var color = generateNewColor();
// var baseSpeed = canvas.width/200;
// var verticalSpeed = 1*baseSpeed;
// var horizontalSpeed = 1*baseSpeed;



// var slideRight = true;
// var slideDown = true;
// var position = 0;

// var balls = [];

// for(var i = rad; i<canvas.height-rad; i+=rad*3){
//     balls.push(new Ball(0+rad,i,horizontalSpeed,verticalSpeed,generateNewColor()));
// }

// function createNewBall(e){
//     balls.push(new Ball(e.x,e.y,generateVelocity(),generateVelocity()))
// }

var red;
var green;
var blue;
 

//The angle needs to reduce according to the radius.  The angular speed needs to change while the linear speed
//needs to be consistent.


function generateNewColor(){
    red = Math.floor(Math.random()*256);
    green =  Math.floor(Math.random()*256);
    blue =  Math.floor(Math.random()*256);
    return "rgb("+red+","+green+","+blue+")";

}


function checkPosition(ball){
     //check for horizontal direction switch
    
    }

let ballPit = new SystemOfBalls(5,{x:canvas.width,y:canvas.height},10)          //bounds are the max width and height. minimum is 0 for both.

function animate(){
   //clearScreen();
   ballPit.draw(ctx);

    //animate
    requestAnimationFrame(animate);
}
window.requestAnimationFrame(animate);