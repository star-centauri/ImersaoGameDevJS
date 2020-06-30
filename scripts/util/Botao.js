class Botao {
    constructor({text, position_x, position_y, styleClass}) {
        this._text = text;
        this._x = position_x;
        this._y = position_y;
        this._btn = undefined;

        this._style = styleClass;
    }

    setup () {
        this._btn = createButton(this._text);
        this._btn.position(this._x, this._y);
        this._btn.addClass(this._style);
        this._btn.center('horizontal');
    }

    draw() {
        this._btn.mousePressed(() => {
            this._btn.remove();
            sceneCurrent = 'jogo';
        });
    }
}