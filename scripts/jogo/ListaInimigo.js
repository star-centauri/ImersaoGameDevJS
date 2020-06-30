class ListaInimigo {
    constructor(mapa) {
        this._lista = [];
        this._indexCurrent = 0;
        this._mapa = mapa;
    }

    add({matrixAnimation, image, position_x, position_y, widthPerson, heightPerson, widthSprite, heightSprite, velocity, delay}) {
        this._lista.push(new Inimigo({
            matrixAnimation: matrixAnimation, 
            image: image, 
            position_x: position_x, 
            position_y: position_y,
            widthPerson: widthPerson, 
            heightPerson: heightPerson, 
            widthSprite: widthSprite, 
            heightSprite: heightSprite,
            velocity: velocity,
            delay: delay
          })
        );
    }

    getInimigoAtual () {
        const linha = this._mapa[this._indexCurrent];

        let inimigo = this._lista[linha.inimigo];
        inimigo.velocity = linha.velocidade;
        
        if (inimigo._x < -inimigo._width) {
            this._indexCurrent++;
            inimigo.reappears();

            if (this._indexCurrent == this._mapa.length) {
                this._indexCurrent = 0;
            }
        }
        

        return inimigo;
    }
}