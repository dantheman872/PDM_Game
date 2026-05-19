let myFont;
let angle = 0;
let player;
let item;
let grid;
let shop, shopImage, shopkeeper, furnaceRoom, furnace;
let backgroundImg, backWidth, backHeight;
let playerAttackDown, playerAttackRight, playerAttackLeft, playerAttackUp, playerIdle, playerWalkingDown, playerWalkingRight, playerWalkingLeft, playerWalkingUp;
let stone, stonePickup;

backHeight = 910;
backWidth = 900;

let cols = (backWidth / 50)// + 2
let rows = (backHeight / 50) - 4
let gridA = []

function preload(){

    myFont = loadFont("assets/OldStandardTT-Regular.ttf")

    backgroundImg = loadImage('assets/background.png')

    stone = loadImage('assets/stone.png')
    stonePickup = loadImage('assets/stone_pickup.png')
   
    playerAttackLeft = loadImage('assets/Player/Left/player_mining_left.gif')
    playerWalkingLeft = loadImage('assets/Player/Left/player_walking_left.gif')

    playerAttackRight = loadImage('assets/Player/Right/player_mining_right.gif')
    playerWalkingRight = loadImage('assets/Player/Right/player_walking_right.gif')

    playerAttackUp = loadImage('assets/Player/Up/player_mining_up.gif')
    playerWalkingUp = loadImage('assets/Player/Up/player_walking_up.gif')

    playerAttackDown = loadImage('assets/Player/Down/player_mining_down.gif')
    playerWalkingDown = loadImage('assets/Player/Down/player_walking_down.gif')

    playerIdle = loadImage('assets/Player/Down/player_walking_down.gif')

    shopImage = loadImage('assets/Shop/shop.png')
    shopkeeper = loadImage('assets/Shop/shopkeeper.gif')
    furnaceRoom = loadImage('assets/Shop/furnace_Room.png')
    furnace = loadImage('assets/Shop/furnace.png')
    

    
}


function setup(){
    textFont(myFont)
    createCanvas(500, 500)
    angleMode(DEGREES)
    keyCode = 13
    
    let p = createP("Use the arrow keys to move and to mine rocks and sell them to the forge")
    p.position(windowWidth / 2 - 230, windowHeight * 3/4 + 20)
    player = new Player(30, -125, 50);
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
        
        grid.addToGrid(5,1);
        grid.addToGrid(6,1);
        grid.addToGrid(7,1);    
        grid.addToGrid(9,1);
    }
      
}

function draw(){
    

    drawBackground();
    player.move();
    shop.show()
    player.show();
    
    item.show()
    item.isColliding()
    shop.isColliding()
    player.isColliding()

    if(keyCode === 82){

        item.rockA = 0
        player.x = width * 1/4
        player.y = height * 1/4
    }
    //console.log(item.rockA)

    if(breaking == true){

        //console.log("true")
    }
        //console.log(angle)
        //console.log(player.x + " + " + player.y)
    if(keyCode === 13 && shop.isColliding()){

        
    } else {

        drawObject();
    }
    
    if(keyCode === 81){

        grid.show();    
    } 

    //text("Rocks Collected: ", 20, 30)
    //text(item.rockA, 120, 3    
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