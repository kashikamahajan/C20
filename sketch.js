var r=100; 
var g=50; 
var b=225;  
//the three variables for the colors
function setup() { 
    
    // Create Canvas 
    createCanvas(800,200); 
} 
   
function draw() { 
      
    // Set background color 
    background(r,255-g,b);  
      
//the color of the elllipse
    fill("white"); 
      
  
    

       //the ellipse positions itself according to the mouse
    ellipse(mouseX, mouseY, 50, 50); 
} 
  
function mouseMoved() { 
    r = mouseX%255; 
    g = mouseX%255; 
    b = (mouseX%255)+50;
} 