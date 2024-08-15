function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
     stroke("orange"); 
     fill(" rgb(245,245,165)"); 
    
     if(mouseIsPressed) {
     rect(mouseX, mouseY, 20, 25);
     }
  }