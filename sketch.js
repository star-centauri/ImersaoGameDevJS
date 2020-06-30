function preload() {
  imageForestBack = loadImage('imagens/cenario/parallax-forest-back-trees.png');
  imageForestFront = loadImage('imagens/cenario/parallax-forest-front-trees.png');
  imageForestLight = loadImage('imagens/cenario/parallax-forest-lights.png');
  imageForestMiddle = loadImage('imagens/cenario/parallax-forest-middle-trees.png');


  imagePerson = loadImage('imagens/personagem/gato_correndo_sprite.png');
  imageEnemyMouse = loadImage('imagens/inimigos/rato_correndo_sprite.png');
  imageEnemyDog = loadImage('imagens/inimigos/cachorro_correndo_sprite.png');
  imageEnemyBat = loadImage('imagens/inimigos/morcego_sprite.png');
  imageGameOver = loadImage('imagens/assets/game-over.png');
  imageLife = loadImage('imagens/assets/vida_gato.png');
  imageHomeScreen = loadImage('imagens/cenario/telainicial.png');

  fontHomeScreen = loadFont('imagens/assets/fonteTelaInicial.otf');

  soundTrail = loadSound('sons/trilha_jogo.mp3');

  cartuchoPrimeiraFase = loadJSON('cartucho/primeira_fase.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  jogo = new Jogo();
  telaInicial = new TelaInicial(imageHomeScreen);
  gameOver = new GameOver(imageGameOver);

  scenes = {
      jogo: jogo,
      telaInicial: telaInicial,
      gameOver: gameOver
  }

  jogo.setup();
  telaInicial.setup();
  
  frameRate(20);
}

function keyPressed() {
  jogo.keyPressed();
}

function draw() {
  scenes[sceneCurrent].draw();
}