// var canvas;
// function setup(){
// canvas = createCanvas(400, 400);
// canvas.position = (0,0);
// }

// function draw(){
//     background(200);

// }



// const canvasSize = 100;
// const grSize = canvasSize;
// function setup() {
//   createCanvas(canvasSize, canvasSize);
//   frameRate(30);
//   pg = createGraphics(grSize, grSize);
// }

// function draw() {
//   //background(0);227, 41, 103
//   pg.background(227, 41, 103);
//   pg.fill(255);
//   pg.textFont("Hind");
//   pg.textSize(canvasSize/10);
//   pg.push();
//   pg.translate(grSize/2, grSize/2);
//   pg.textAlign(LEFT, CENTER);
//   pg.textLeading(canvasSize/6.6-10);
//   pg.text("    * DISRUPTION   * ", -canvasSize/5, -canvasSize/10, 200);
//   pg.pop();

//   let tilesX = 50;
//   let tilesY = 30;

//   let tileW = int(width/tilesX);
//   let tileH = int(height/tilesY);

//   for (let y = -10; y < tilesY; y++) {
//     for (let x = 0; x < tilesX; x++) {

//       // WARP
//       let wave = int(sin(frameCount * 0.03 + ( x+50 * y+10 ) * 0.02) * 60);
//       //wave = 0;
//       // SOURCE
//       let sx = x*tileW + wave;
//       let sy = y*tileH + wave;
//       let sw = tileW;
//       let sh = tileH;


//       // DESTINATION
//       let dx = x*tileW;
//       let dy = y*tileH;
//       let dw = tileW;
//       let dh = tileH;

//       copy(pg, sx, sy, sw, sh, dx, dy, dw, dh);

//     }
//   }
// }

