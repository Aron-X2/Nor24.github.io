let img1;
let img2;
let img3;
let img4;
let txt1;

function preload() {
  img1 = createImg('https://images.unsplash.com/photo-1619428410865-ff2e196f54e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80', 'Flying car'); //origin url and alt text
  img2 = createImg('https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1914&q=80', 'Robot friend');
  img3 = createImg('https://images.unsplash.com/photo-1543955946-8d33e764d8f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'Transformer');
  img4 = createImg('https://images.unsplash.com/photo-1512364615838-8088a04a778b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80', 'futurstic city');
  txt1 = createP(' Welcome To The New Furture ');
}

function setup() {
  createCanvas(1920, 1080);
  img1.position(700, 900);
  img1.size(300, 500);

  img2.position(200, 200);
  img2.size(150, 150)

  img3.position(200, 400);
  img3.size(150, 150)

  img4.position(200, 600);
  img4.size(150, 150);

  txt1.style('font-size', '25px');
  txt1.style('color', 'grey');
  txt1.position(275, 575);
}

function draw() {
  background(255, 0, 255);
}
