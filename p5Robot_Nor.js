//to be saved as a .js file
// CHANGE the digits themselves, the 2d shape-type, the number of those shapes, where/how they relate to everyother
//DO NOT CHANGE the stuff in the setup related to the Canvas

let boat=26;


function setup() {
  createCanvas(720, 480);  //do not touch!
  strokeWeight(2);
  ellipseMode(RADIUS);
}
function draw() {
  background(204);
  // Neck
  stroke(102); // Set stroke to gray
  line(266, 257, 266, 162); // Left
  line(276, 257, 276, 162); // Middle
  line(286, 257, 286, 162); // Right
  // Antennae
  line(276, 155, 246, 112); // Small
  line(276, 155, 306, 56); // Tall
  line(276, 155, 342, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill("BLUE"); // Set fill to gray
  ellipse(120, 140, 130, 120); // Antigravity orb
  fill("red"); // Set fill to black
  rect(219, 257, 190, 120); // Main body
  fill("green"); // Set fill to gray
  rect(219, 274, 90, 6); // Gray stripe
  fill("orange"); // Set fill to black
  ellipse(276, 155, 45, 45); // Head
  fill("pink"); // Set fill to white
  ellipse(288, 150, 14, 14); // Large eye
  fill("red"); // Set fill to black
  ellipse(288, 150, 3, 3); // Pupil
  fill("yellow"); // Set fill to light gray
  ellipse(263, 148, 5, 5); // Small eye 1
  ellipse(296, 130, 4, 4); // Small eye 2
  ellipse(305, 162, 3, 3); // Small eye 3
}
