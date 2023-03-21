let brown1, brown2, slider;
function setup() {
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    noLoop();
    strokeJoin(ROUND);
    brown1 = color('#621708');
    brown2 = color('#5e503f');
    slider = createSlider(10, 90, 45);

    //angle slider controls 
    slider.position(10, 10);
    slider.style("width", "200px");
    slider.input(draw);

}
function draw() {
    background(202, 240, 248);
    resetMatrix(); //re-sets the functions each time the slider is moved resets all the translations and rotations, starts again with every refresh
    translate(width / 2, height);
    branch(200); //branch or tree height, you need to change it in the stroke weight map as well, the higher the starting number the larger the tree, the lsrger number of branches you have the more recursion is going to happen, the lower the amount that you times it by then the shorter its going to be
}
function branch(len) { //length of branch to draw
    let maxAngle = slider.value(); //smaller angles at the left hand side, larger max angle at right hand side, the max angle is dependednt on the position of the slieer and its corresponding value
    strokeWeight(map(len, 20, 200, 1, 20));
    stroke(lerpColor(brown1, brown2, random(0.4, 0.6))); //random mix point vairation, lerp = one value and another, having a random value between them you're finding a random mix point for the colours 
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 20) {
        if (len < 50) {
            //leaves
            let r = 230 + random(-20, 20); //from 180 to 220, it means plus a number between -20 and 20, adding it to 200
            let g = 100 + random(-40, 40);
            let b = 160 + random(-30, 30);
            fill(r,g,b, 70); // add (,100) makes it transparent
            //noStroke();
            strokeWeight(0.4);
            let radius = random (5, 20); //size of flowers - makes all the circles that theyre made of bigger - randomises the sizes of the different flowers so theres variation
            if (random(1) > 0.5) {
                for (let i = 0; i < 360; i += 40) { //360= circle 40= position of circles around radius of the inner circle that theyre sitting on
                    let size = random(15, 20);
                    ellipse(cos(i) * radius, sin(i) * radius, radius * 2); //size of circle and size of radius

                }
            }

        } else {
            //branch 1
            push(); //PUSH + POP = saves the current drawing contex, rotateing the drawing then re-rotating it to get the desired look 
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop();
            //branch 3
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.5);
            pop();
            push(); //PUSH + POP = saves the current drawing contex, rotateing the drawing then re-rotating it to get the desired look 
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.2);
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.7);
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.7);
            pop();
            //branch 2
            push();
            rotate(random(-maxAngle, maxAngle));
            branch(len * 0.7);
            pop();
             //branch 2
             push();
             rotate(random(-maxAngle, maxAngle));
             branch(len * 0.9);
             pop();
           
        
        }
    }


}



