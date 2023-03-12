var mouseEvent="empty";
var lastpositionofX,lastpositionofY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
var widthofline=1;

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseleave",mymouseleave);
function mymouseleave(e){
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseEvent="mouseUP";
} 
canvas.addEventListener("mousemove",mymousemove);
function mymousemove(e){
    currentpositionofmouseX=e.clientX-canvas.offsetLeft;
    currentpositionofmouseY=e.clientY-canvas.offsetRight;
    if (mouseEvent=="mouseDown"){
        ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth="widthofline";
    console.log("last position of X and Y coordinates= ");
    console.log("X=" + lastpositionofX + " Y="+lastpositionofY);
    ctx.moveTo(lastpositionofX,lastpositionofY); 

    console.log("current position of X and Y coordinates= ");
    console.log("X=" + currentpositionofmouseX + " Y="+currentpositionofmouseY);
    ctx.lineTo(currentpositionofmouseX,currentpositionofmouseY);
    ctx.stroke();
    }
    lastpositionofX=currentpositionofmouseX;
    lastpositionofY=currentpositionofmouseY;
}