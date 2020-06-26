//Objetos do jogo
let imageBackground,
    imagePerson,
    imageEnemy,
    imageGameOver,
    soundTrail,
    soundJump;

//Classes
let cenario,
    personagem,
    inimigo,
    generatorMatrix,
    gameOver;

let countJump = 0;

function preload() {
  imageBackground = loadImage('imagens/cenario/floresta.png');
  imagePerson = loadImage('imagens/personagem/correndo.png');
  imageEnemy = loadImage('imagens/inimigos/gotinha.png');
  imageGameOver = loadImage('imagens/assets/game-over.png');
  soundTrail = loadSound('sons/trilha_jogo.mp3');
  soundJump = loadSound('sons/somPulo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  cenario = new Cenario(imageBackground, 3);
  generatorMatrix = new GeneratorMatrix();
  
  personagem = new Personagem({
    matrixAnimation: generatorMatrix.getMatrix(imagePerson, 220, 270), 
    image: imagePerson, 
    position_x: 0, 
    widthPerson: 110, 
    heightPerson: 135, 
    widthSprite: 220, 
    heightSprite: 270
  })
  
  inimigo = new Inimigo({
    matrixAnimation: generatorMatrix.getMatrix(imageEnemy, 104, 104), 
    image: imageEnemy, 
    position_x: width - 52, 
    widthPerson: 52, 
    heightPerson: 52, 
    widthSprite: 104, 
    heightSprite: 104
  });

  gameOver = new GameOver(imageGameOver);
  
  frameRate(40);
  soundTrail.loop();
}

function keyPressed() {
  if(keyCode == 32) {
    countJump++;
    let isFloor = personagem.isFloor();

    if(isFloor) {
      countJump = 0;
    }
    
    if(countJump < 2) {
      personagem.jump();
      soundJump.play();
    }
  }
}

function draw() {
  cenario.display();
  cenario.move();
  
  personagem.display();
  personagem.applyGravity();
  
  inimigo.display();
  inimigo.move(8);
  
  if(personagem.colliding(inimigo)) {
    noLoop();
    gameOver.display();
  }
}