var canvas;
var bgImg;
var form;
var player;

function preload(){
  bgImg = loadImage("bg.png");
}

function setup() {
  canvas = createCanvas(displayWidth,displayHeight-145);

  form = new Form();
  form.display();

  player = new Player();
}

function draw() {
 // background(255,255,255);
  background(bgImg);  
}