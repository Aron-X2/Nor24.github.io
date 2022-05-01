function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	// noLoop();
}

var count=0;
var mode =1;
function mousePressed(){
	 mode++
	 if(mode>3){
			mode=1
	 }
}

function draw() {
	background(25,200)
	angleMode(DEGREES);
	translate(width/2, height/2)

	for(let x=0;x<width;x+=1){
  scale(0.999)
			rect(x, 0, 50);
			translate(20,0)
			rotate(30)

			if(mode==1){
				strokeWeight(2)
				stroke(150)
				fill(16, 83, 124)
				rotate(second()*0.005)
			}else if(mode==2){
				stroke(255)
				fill(45, 250, 55)
				rotate(second()*0.1)

			}else if(mode==3){
				fill(178, 23, 23)
				stroke(255)
				rotate(second()*5)
			}


	}
}
