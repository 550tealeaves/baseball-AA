var baseball;
var w, h, tow, toh;
var x, y, tox, toy;
//var zoom = .005; //zoom step per mouse tick 

function preload() {
    baseball = loadImage("../images/other/baseball.png")
    player = loadImage("../images/other/player.png");
    jackie = loadImage("../images/other/jackie.PNG");
    hank = loadImage("../images/other/hank-aaron.png");
    satchel = loadImage("../images/other/satchel-paige.png");
    larry = loadImage("../images/other/larry-doby.png");
    moses = loadImage("../images/other/moses-fleetwood-walker.png");
    frank = loadImage("../images/other/frank-robinson.png");
    mookie = loadImage("../images/other/mookie-betts.png");
    jeter = loadImage("../images/other/derek-jeter.png");
    prince = loadImage("../images/other/prince-fielder.png");
}

//code from here: https://gist.github.com/companje/5478fff07a18a1f4806df4cf77ae1048

function setup() {
    createCanvas(windowWidth, windowHeight);
    w = currentImageWidth = baseball.width;
    h = currentImageHeight = baseball.height;
    x = tox = w / 2;
    y = toy = h / 2;
  }



function draw() {
    background(255); //change background color to white

    image(baseball, x - w / 2, y - h / 2, windowWidth, windowHeight);
    image(player, mouseX-50, mouseY-50, 100, 100); //moves player image based on cursor position mouseX-50 (moves cursor to right and puts it on img, mouseY-50 moves cursor down img, if no #s, then default cursor is up and to left of img) - last 2 numbers adjusts size (w,h) - https://editor.p5js.org/mellerbr/sketches/Jhz5uwM5
    
    // ADD THE IMAGES WITH AN X/Y, W/H - Smaller the divisor for x = moves pic to the right. Smaller divsior for y = moves the pic down
    image(jackie, x/3, y/2.55, 100, 100); //batter
    image(hank, x/3.8, y/5.1, 100, 100); //runner
    image(satchel, x/2.5, y/4.15, 100, 100); //pitcher
    image(larry, x/2.5, y/26, 100, 100); //center-fielder
    image(moses, x/2.61, y/2.20, 65, 65); //catcher
    image(frank, x/5.3, y/10, 60, 100); //left fielder
    image(mookie, x/1.8, y/10, 100, 100); //right fielder
    image(jeter, x/3, y/8.2, 80, 100); //shortstop
    image(prince, x/1.8, y/4, 80, 100); //first baseman
}