const MAX_LEVEL =8;
const MIN_LEVEL =0;
function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(255);
    noFill();
    noLoop();
    drawCircle(width/2, height/2, width/4, MAX_LEVEL); // width= x, height=y, the second width=diameter(d) all of them have been divided by somthing to change where the circle is drawn

}
function drawCircle(x, y, d, count) {
    ellipse(x,y,d);
    if(count > MIN_LEVEL){ //if count is greater than min level (6) take one off count (-- thats what the two minus signs mean)
        count--; //chcking it against minimum level, then reducing it by one
        drawCircle(x + d/2, y, d/2, count);
        drawCircle(x - d/2, y, d/2, count);  
        drawCircle(x, y+d/2, d/2, count);

    }

}
