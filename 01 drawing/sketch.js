function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Define how many squares we want across the diagonal.
  let numSquares = 10;
  
  // Loop through each square’s position.
  for (let i = 0; i < numSquares; i++) {
    // Calculate the x and y position so the squares generate diagonally.
    let x = i * (width / numSquares);
    let y = i * (height / numSquares);
    
    // Create a color gradient from blue to pink.
    // As 'i' increases, the color shifts gradually.
    let r = map(i, 0, numSquares - 1, 50, 255);   // red increases
    let g = map(i, 0, numSquares - 1, 100, 50);   // green slightly decreases
    let b = map(i, 0, numSquares - 1, 255, 150);  // blue decreases
    
    // Set the fill color for each square.
    fill(r, g, b);
    
    // Draw the square.
    rect(x, y, 40, 40);
    
   
  }
}
