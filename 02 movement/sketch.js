let xPositions = [];
let yPositions = [];

let xSpeeds = [];

function setup() {
  createCanvas(400, 400);
  
  let numSquares = 10;
  
  // Puts them diagonally across the canvas
  for (let i = 0; i < numSquares; i++) {
    // Distribute positions evenly along the diagonal
    xPositions.push(i * (width / numSquares));
    yPositions.push(i * (height / numSquares));
    
    // Assigns each square a random speed along the x-axis
    xSpeeds.push(random(1, 2) * (random() > 0.5 ? 1 : -1));
  }
}

function draw() {
  background(220);
  
  // Loop through each square to draw and move them
  for (let i = 0; i < xPositions.length; i++) {
    // Color gradient
    let r = map(i, 0, xPositions.length - 1, 50, 255);
    let g = map(i, 0, xPositions.length - 1, 100, 50);
    let b = map(i, 0, xPositions.length - 1, 255, 150);
    fill(r, g, b);
    noStroke();
    
    // Drawing the square
    rect(xPositions[i], yPositions[i], 40, 40);
    
    // Move the square along the x-axis
    xPositions[i] += xSpeeds[i];
    
    // If it hits the left or right edge, it will bounce
    if (xPositions[i] <= 0 || xPositions[i] + 40 >= width) {
      xSpeeds[i] *= -1;
    }
    
  }
}
