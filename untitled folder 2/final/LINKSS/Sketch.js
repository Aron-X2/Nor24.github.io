let a;
let b;
let c;
let d;

function preload() {
  let a = createA('file:///Users/icap_aron/Documents/untitled%20folder%202/final/Sketch1/index.html', 'TIM ART 1')
  a.style('font-size', '100px');
  a.style('color', 'black');
  a.position(50, 50)


  let b = createA('file:///Users/icap_aron/Documents/untitled%20folder%202/final/Sketch2/index.html', 'COOL ART!!!!')
    b.style('font-size', '100px');
    b.style('color', 'black');
    b.position(500, 500);


    let c = createA('file:///Users/icap_aron/Documents/untitled%20folder%202/final/Sketch3/index.html', 'WORLD ART 3!!!')
    c.style('font-size', '100px');
    c.style('color', 'black');
    c.position(300, 100)

    let d = createA('file:///Users/icap_aron/Documents/untitled%20folder%202/final/Sketch4/index.html', 'Final Peice:)')
    d.style('font-size', '100px');
    d.style('color', 'black');
    d.position(700, 400);

  }

  function draw() {
    background('white')
  }
