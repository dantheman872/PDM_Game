// Variable creation
let myFont;
let angle = 0;
let player;
let item;
let grid;

//Image variable creation
let shop, shopImage, shopkeeper, furnaceRoom, furnace;
let backgroundImg, backWidth, backHeight;
let playerAttackDown, playerAttackRight, playerAttackLeft, playerAttackUp, playerIdle;
let playerWalkingDown, playerWalkingRight, playerWalkingLeft, playerWalkingUp;
let stone, stonePickup;

//Setting the dimensions for the background
backHeight = 910;
backWidth = 900;

//Grid setup
let cols = (backWidth / 50)// + 2
let rows = (backHeight / 50) - 4
let gridA = []

function preload(){

    
    myFont = loadFont("assets/OldStandardTT-Regular.ttf")

    backgroundImg = loadImage('assets/background.png')

    stone = loadImage('assets/stone.png')
    stonePickup = loadImage('assets/stone_pickup.png')
   
    //Player movement and attack
    playerAttackLeft = loadImage('assets/Player/Left/player_mining_left.gif')
    playerWalkingLeft = loadImage('assets/Player/Left/player_walking_left.gif')

    playerAttackRight = loadImage('assets/Player/Right/player_mining_right.gif')
    playerWalkingRight = loadImage('assets/Player/Right/player_walking_right.gif')

    playerAttackUp = loadImage('assets/Player/Up/player_mining_up.gif')
    playerWalkingUp = loadImage('assets/Player/Up/player_walking_up.gif')

    playerAttackDown = loadImage('assets/Player/Down/player_mining_down.gif')
    playerWalkingDown = loadImage('assets/Player/Down/player_walking_down.gif')

    playerIdle = loadImage('assets/Player/Down/player_walking_down.gif')

    //Shop preloading
    shopImage = loadImage('assets/Shop/shop.png')
    shopkeeper = loadImage('assets/Shop/shopkeeper.gif')
    furnaceRoom = loadImage('assets/Shop/furnace_Room.png')
    furnace = loadImage('assets/Shop/furnace.png')   
}


function setup(){
   
    //General setup
    textFont(myFont)
    createCanvas(500, 500)
    angleMode(DEGREES)
    keyCode = 13
    
    //Draws instructions outside of canvas
    let p = createP("Use the arrow keys to move and to mine rocks and sell them to the forge")
    p.position(windowWidth / 2 - 230, windowHeight * 3/4 + 20)

    //Creates each object
    player = new Player(30, -125, 50, 50);
    grid = new Grid();
    item = new Item();
    shop = new Shop();

    //Fills grid with empty tiles
    grid.fillGrid();

    //Starts the first rock spawning
    spawnObjects();  
    
    //Fill blocked grid tiles with true
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
        
        grid.addToGrid(5,1);
        grid.addToGrid(6,1);
        grid.addToGrid(7,1);    
        grid.addToGrid(9,1);
    }
      
}

function draw(){
    
    drawBackground();

    //Runs the functions for the objects to move show and check collision
    player.move();

    shop.show()
    
    item.show()

    item.isColliding()
    shop.isColliding()
    player.isColliding()

    //Resets the game on pressing R
    if(keyCode === 82){

        item.rockA = 0
        player.x = width * 1/4
        player.y = height * 1/4
    }

    //Checks if the player is open in the shop
    if(keyCode === 13 && shop.isColliding()){
        
    } else {

        //Draws the rocks
        drawObject();
    }
    player.show();
    
    //Show the grid after pressing Q for debugging
    if(keyCode === 81){

        grid.show();    
    } 
}

/**
 * Checks to start movement
 */
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

/**
 * Checks to stop movement
 */
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

/**
 * Draws the Background
 */
function drawBackground(){

    background(24, 10, 7);
    image(backgroundImg, -15 - player.getX(), -150 - player.getY(), backHeight, backWidth)
}