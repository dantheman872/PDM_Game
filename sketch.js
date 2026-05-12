
let player;
let grid;
let backgroundImg, backWidth, backHeight;

backHeight = 800;
backWidth = 800;

let cols = (backWidth / 50) + 2
let rows = (backHeight / 50) + 2
let gridA = []

function preload(){

    backgroundImg = loadImage('assets/backgroudImg.png')
}

function setup(){

    createCanvas(500, 500)
    player = new Player(width/2, height/2, 50);
    grid = new Grid();
    grid.fillGrid();
    spawnObjects();  
    
    for(let i = 0; i < gridA.length; i++){

        grid.addToGrid(i, 0);
        grid.addToGrid(0, i);
        grid.addToGrid(17, i);
        grid.addToGrid(i, 17);
    }
      
}

function draw(){

    drawBackground();
    player.move();
    player.show();   
        
    
    drawObject();
    //if(keyCode === 81){

        grid.show();    
    //}
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

    background(220);
    fill(200)
    rect(50 - player.getX(), 50 - player.getY(), backHeight, backWidth)
}