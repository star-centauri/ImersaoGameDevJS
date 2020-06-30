class TelaInicial {
    constructor(image) {
        this._image = image;
        this._button = new Botao({
            text: "Iniciar", 
            position_x: windowWidth/2, 
            position_y: windowHeight/2+50,
            styleClass: 'botao-tela-inicial'
        });
    }

    setup() {
        this._button.setup();
    }

    keyPressed () {
        
    }

    draw () {
        this._backgroundImage();
        this._text();
        this._buttonPlay();
    }

    _backgroundImage() {
        image(this._image, 0, 0, windowWidth, windowHeight);
    }

    _text() {
        const width = windowWidth/2;
        const height = windowHeight/2;

        textFont(fontHomeScreen);
        textAlign(CENTER);
        textSize(50);
        text("As aventuras do gatinho", width, height-100);
        textSize(100);
        text("Walter", width, height);
    }

    _buttonPlay() {
        this._button.draw();
    }
}