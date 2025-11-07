let kickImg;
let kickSound;
let snareImg;
let snareSound;
let hihatImg;
let hihatSound;

function preload() {
  // Load image and sound from your assets folder
  kickImg = loadImage("assets/kick.png");
  kickSound = loadSound("assets/kick.wav");
  snareImg = loadImage("assets/snare.png")
  snareSound = loadSound("assets/snare.wav")
  hihatImg = loadImage("assets/hihat.png")
  hihatSound = loadSound("assets/hihat.wav")
}

function setup() {
  createCanvas(800, 500);
  imageMode(CENTER);
}

function draw() {
  background(220);

  // Draw the images
  image(kickImg, 200, height / 2, 200, 200);
  image(snareImg, 400, height / 2, 200, 200);
  image(hihatImg, 600, height / 2, 200, 200);

  /* Optional: label it
  textAlign(CENTER);
  textSize(20);
  fill(0);
  text("Click the Kick Drum", width / 2, height / 2 + 150);
  */
  }

/*
function mousePressed() {
  // Play sound when mouse is clicked anywhere
  kickSound.play();
}
*/
function mouseClicked(){
  //maps each mouse click to a specific drum image + sound
  if (mouseX > 100 && mouseX < 300 && mouseY > 150 && mouseY < 350) {
    kickSound.play();
    kickSound.amp(0.2);
  } else if (mouseX > 300 && mouseX < 500 && mouseY > 150 && mouseY < 350) {
    snareSound.play();
    snareSound.amp(0.2);
  } else if (mouseX > 500 && mouseX < 700 && mouseY > 150 && mouseY < 350) {
    hihatSound.play();
    hihatSound.amp(0.2);
  }
  

  if (getAudioContext().state !== 'running') {
    getAudioContext().resume();
  }
}