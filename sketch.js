function preload(){

    backgroundImg = loadImage('assets/backgroudImg.png')
}

let player, grid;
let backX = -14
let backY = -14

function setup(){

    createCanvas(800, 600)
    player = new Player(width/2, height/2, 50);
    grid = new Grid();
    spawnObjects();  
    grid.addToGrid();
     
}

function draw(){

    background(220);
    drawBackground();
    player.show();   
    player.move();    
    drawObject();

    if (keyCode === 81){

        grid.show();
    }
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