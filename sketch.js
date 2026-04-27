function preload(){
 backgroundImg = loadImage('assets/backgroudImg.png')
}


let player;
let backX = 0
let backY = 0

function setup(){

    createCanvas(800, 600)
    player = new Player(width/2-30, height/2-30, 60);   
    angleMode(DEGREES) 
}

function draw(){

    background(220);
    drawBackground();
    player.show();   
    player.move(); 
    
    
}

function keyPressed() {
    switch(keyCode) {
        case LEFT_ARROW:
            player.setXDir(-5);
            break;

        case RIGHT_ARROW:
            player.setXDir(5);
            break;

        case UP_ARROW:
            player.setYDir(-5);
            break;

        case DOWN_ARROW:
            player.setYDir(5);
            break;
    }
}

function keyReleased(){

    switch(keyCode){

        case LEFT_ARROW:
        case RIGHT_ARROW:
            player.setXDir(0);
            break;

        case UP_ARROW:
        case DOWN_ARROW:
            player.setYDir(0);
            break;
    }
}

function drawBackground(){

    image(backgroundImg, backX, backY, 1000, 1000)
}