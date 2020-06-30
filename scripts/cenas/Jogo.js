class Jogo {
    constructor() {
        this._mapa = cartuchoPrimeiraFase.mapa;
    }

    setup() {
        cenario = new Cenario(3);
        generatorMatrix = new GeneratorMatrix();
        listaInimigo = new ListaInimigo(this._mapa);
        pontuacao = new Pontuacao();
        life = new Vida({
            total: cartuchoPrimeiraFase.configuracoes.vidaMaxima, 
            initial: cartuchoPrimeiraFase.configuracoes.vidaInicial
        });

        listaInimigo.add({
            matrixAnimation: generatorMatrix.getMatrix(imageEnemyMouse, 16, 11), 
            image: imageEnemyMouse, 
            position_x: width, 
            position_y: 20,
            widthPerson: 58, 
            heightPerson: 43, 
            widthSprite: 16, 
            heightSprite: 11,
            velocity: 7,
            delay: 100
        });

        listaInimigo.add({
            matrixAnimation: generatorMatrix.getMatrix(imageEnemyBat, 21, 12), 
            image: imageEnemyBat, 
            position_x: width, 
            position_y: 200,
            widthPerson: 73, 
            heightPerson: 46, 
            widthSprite: 21, 
            heightSprite: 12,
            velocity: 8,
            delay: 100
        });

        listaInimigo.add({
            matrixAnimation: generatorMatrix.getMatrix(imageEnemyDog, 64, 40), 
            image: imageEnemyDog, 
            position_x: width, 
            position_y: 20,
            widthPerson: 104, 
            heightPerson: 80, 
            widthSprite: 64, 
            heightSprite: 40,
            velocity: 3,
            delay: 100
        });

        personagem = new Personagem({
            matrixAnimation: generatorMatrix.getMatrix(imagePerson, 82, 64), 
            image: imagePerson, 
            position_x: 0, 
            position_y: 20,
            widthPerson: 102, 
            heightPerson: 84, 
            widthSprite: 82, 
            heightSprite: 64
        });
        personagem.soundJump = 'sons/somPulo.mp3';

        soundTrail.loop();
    }

    keyPressed () {
        if(keyCode == 32) {
            personagem.jump();
        }
    }

    draw () {
        cenario.display();
        cenario.move();

        pontuacao.display();
        
        personagem.display();
        personagem.applyGravity();

        inimigoAtual = listaInimigo.getInimigoAtual();
        inimigoAtual.display();
        inimigoAtual.move();

        life.draw();

        if (inimigoAtual.leftScreen) {
            pontuacao.points = 1;
        }

        if(personagem.colliding(inimigoAtual)) {
            life.loseLife();

            if (life.isZero()) {
                noLoop();
                gameOver.draw();
            }
        }
    }
}