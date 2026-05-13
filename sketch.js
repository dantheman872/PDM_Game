
let player;
let item;
let grid;
let shop;
let backgroundImg, backWidth, backHeight;
let playerAttackDown, playerAttackRight, playerAttackLeft, playerAttackUp, playerIdle;
let stone;

backHeight = 910;
backWidth = 900;

let cols = (backWidth / 50)// + 2
let rows = (backHeight / 50) - 4
let gridA = []

function preload(){

    backgroundImg = loadImage('assets/background.png')
    playerAttackDown = loadImage('assets/player_attack_down.gif')
    playerAttackRight = loadImage('assets/player_attack_right.gif')
    playerAttackLeft = loadImage('assets/player_attack_left.gif')
    playerAttackUp = loadImage('assets/player_attack_up.gif')
    playerIdle = loadImage('assets/player_idle.gif')

    stone = loadImage('assets/stone.png')
}


function setup(){

    createCanvas(500, 500)
    player = new Player(width * 1/4, height * 1/4, 50);
    grid = new Grid();
    item = new Item();
    shop = new Shop();
    grid.fillGrid();
    spawnObjects();  
    
    for(let i = 0; i < gridA.length; i++){

        grid.addToGrid(i, 0);
        grid.addToGrid(0, i);
        grid.addToGrid(17, i);
        grid.addToGrid(i, 14);

        grid.addToGrid(1,1);
        grid.addToGrid(1,2);
        grid.addToGrid(2,1);
        grid.addToGrid(3,1);
        grid.addToGrid(2,2);
        grid.addToGrid(1,3);

        grid.addToGrid(16,12);
        grid.addToGrid(16,13);
        grid.addToGrid(15,13);
        grid.addToGrid(16,11);
        grid.addToGrid(15,12);
        grid.addToGrid(14,13);

        grid.addToGrid(1,12);
        grid.addToGrid(1,13);
        grid.addToGrid(2,13);
        grid.addToGrid(1,11);
        grid.addToGrid(2,12);
        grid.addToGrid(3,13);

        grid.addToGrid(14,1);
        grid.addToGrid(15,2);
        grid.addToGrid(15,1);
        grid.addToGrid(16,1);
        grid.addToGrid(16,2);
        grid.addToGrid(16,3);      

    }
      
}

function draw(){

    drawBackground();
    player.move();
    player.show();
    shop.show()
    item.show()
    item.isColliding()
    shop.isColliding()
    player.isColliding()

    if(breaking == true){

        //console.log("true")
    }
        
    
    drawObject();
    if(keyCode === 81){

        grid.show();    
    } 

    text("Rocks Collected: ", 20, 30)
    text(item.rockA, 120, 30)
}

function keyPressed() {

    switch(keyCode) {
        case LEFT_ARROW:
            player.setXDir(-5);
            player.setYDir(0);
            break;

        case RIGHT_ARROW:
            player.setXDir(5);
            player.setYDir(0);
            break;

        case UP_ARROW:
            player.setYDir(-5);
            player.setXDir(0);
            break;

        case DOWN_ARROW:
            player.setYDir(5);
            player.setXDir(0);
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
    image(backgroundImg, -15 - player.getX(), -150 - player.getY(), backHeight, backWidth)
}