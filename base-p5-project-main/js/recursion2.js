let brown1, brown2, slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    brown1 = color('#50331B');
    brown2 = color('#b6855c');
    slider = createSlider(10, 90, 45);
    //angle slider controls 
    slider.position(10, 10);
    slider.style("width", "200px");
    slider.input(draw);

}

function draw() {
    background(220);
    resetMatrix(); //re-sets the functions each time the slider is moved
    translate(width / 2, height);
    branch(450); //branch or tree height, you need to change it in the stroke weight map as well, the higher the starting number the larger the tree, the lsrger number of branches you have the more recursion is going to happen, the lower the amount that you times it by then the shorter its going to be
}
function branch(len) { //length of branch to draw
    let maxAngle = slider.value(); //smaller angles at the left hand side, larger max angle at right hand side, the max angle is dependednt on the position of the slieer and its corresponding value
    strokeWeight(map(len, 20, 450, 1, 10));
    stroke(lerpColor(brown1, brown2, random(0.4, 0.6))); //random mix point vairation, lerp = one value and another, having a random value between them you're finding a random mix point for the colours 
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 20) {
        if (len < 50) {
            //leaves
            let r = 100 + random(-20, 20); //from 180 to 220, it means plus a number between -20 and 20, adding it to 200
            let g = 20 + random(-20, 20);
            let b = 40 + random(-20, 20);
            fill(r, g, b, 100); // add (,100) makes it transparent
            let size = 15 + random(15);
            noStroke();
            //triangle(-size/2, 0, size/2, 0, 0, -size); //the three ponits for the triangle, bottom left, middle, bottom right
            beginShape();
            let radius = random(10, 30);
            for (let i = 45; i < 135; i++) {
                let x = radius * cos(i);
                let y = radius * sin(i);
                vertex(x,y);

            }
            for (let i = 135; i > 45; i--){
                let x = radius * cos(i);
                let y = radius * sin(-i);
                vertex(x,y);
            }
            endShape(CLOSE);

        } else {
            //branch 1
            push(); //PUSH + POP = saves the current drawing contex, rotateing the drawing then re-rotating it to get the desired look 
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.4);
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.6);
            pop();
            //branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.67);
            pop();
        }


    }



}