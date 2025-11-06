let i = 0;
let j = 0;

// This is a list of some of the most used words on social media in 2025
const modernwrds = "Aesthetic Core Delulu Rizz Gyatt NPC Sigma Skibidi POV Real Glow-up Soft-launch Hard-launch Situationship Main-character FYP Trend Algorithm Cancelled Valid Ate Slay Gatekeep Gaslight Girl-math Boy-math Girl-dinner Mood Vibe Unbothered Ratio Based No-cap Mid Cooked Tap-in Down-bad Lowkey Highkey Fit-check Storytime Drop Collab GRWM Manifest Energy De-influencing Pick-me Core-memory";
const modernwrdsArray = modernwrds.split(" "); 

// This is a list of some of the most used words on social media in 2015
const oldwrds = "BAE On-fleek Turnt TBH Zero-chill Slay AF Feels Yas Squad FOMO Fam Lit Basic Ghosting Relationship goals Netflix-and-chill Shade Mic-drop No-chill Adulting Man-bun Sharewashing Relevant YOLO Woke Clapback Savage Goals Lowkey Highkey Squad-goals Turn-up Shook Extra Bop Dank Ship Throwback Hella Ship Snatched Cray Basic AF Real-talk Mood Vibes Lit On-point"
const oldwrdsArray = oldwrds.split(" "); 

function setup(){
  createCanvas(500, 500); 
  frameRate(4);
  textAlign(CENTER, CENTER)
}

function draw(){
  background(255, 50); // This means the words fade out as opposed to disappeearing immediately 



//I took this line of code from a prior example and thought of a way to incorporate it into my code.
  let myText = "media evolution"; 

  fill(0);
  textSize(width/15);
  textAlign(CENTER, CENTER);
  text(myText, width / 2, height / 2);

  let safeZone = {
    x1: width / 2 - 150,
    x2: width / 2 + 150,
    y1: height / 2 - 50,
    y2: height / 2 + 50
  };

  function getOutsideCoords(side = "right"){
    let x, y;
    do{
      x = (side === "right")? random(width / 2, width): random(0,width / 2);
      y = random(height);
    }while (x > safeZone.x1 && x < safeZone.x2 && y > safeZone.y1 && y < safeZone.y2);
    return {x,y};
  }

//This will generate the first group of words on the right hand side of the main text
  if (i < modernwrdsArray.length) { 
    let {x,y} = getOutsideCoords("right")
    fill(0, 200, 0); //New words will appear as green
    stroke(100);
    console.log(i);
    textSize(20);
    text(modernwrdsArray[i], x, y); 
    i++;
  }

//This will generate the second group of words on the left hand side of the main text    
  if (j < oldwrdsArray.length) {
    let {x, y} = getOutsideCoords("left")
    fill(200, 0, 0); //Old words will appear as red
    stroke(100);
    console.log(j);
    textSize(20);
    text(oldwrdsArray[j], x, y);
    j++;
  }
  if (i >= modernwrdsArray.length && j >= oldwrdsArray.length) {
    i=0; 
    j=0;
    
  }

}