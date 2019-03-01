var settings = {
    rowsCount: 10,
    colsCount: 10,
    color1: '#AA3333',
    color2: '#8e7953',
    posX: 0,
    posY: 0,

};


var chess = {
    settings,
    containerElement: document.getElementById('chess'),

    run() {
        this.initCell();
    },

    initCell() {
        var colName = [0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0];
        var rowName = [0, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        for (var row = 0; row < this.settings.rowsCount; row++) {
            var trEl = document.createElement('tr');
            this.containerElement.appendChild(trEl);

            for (var col = 0; col < this.settings.colsCount; col++) {
                var cols = document.createElement('td');
                trEl.appendChild(cols);

                if (row === 0 && colName[col] !== 0 || row === 9 && colName[col] !== 0) {
                    cols.innerHTML = colName[col];
                }
                if (col === 0 && rowName[row] !== 0 || col === 9 && rowName[row] !== 0) {
                    cols.innerHTML = rowName[row];
                }

                if (this.getCellBrown(row, col)) {
                    cols.style.backgroundColor = this.settings.color2;
                }
            }
        }
    },

    getCellBrown(numRow, numCol) {

        if ((numRow + numCol) % 2 !== 0 && numRow !== 0 && numRow !== 9 && numCol !== 0 && numCol !== 9) {
            return true;
        }
    },

    figures: [
        {name: 'p', color: 'w', pos: 'a2'},
        {name: 'Q', color: 'w', pos: 'd1'},
        {name: 'King', color: 'w', pos: 'e1'},
        {name: 'R', color: 'w', pos: 'a1'},
        {name: 'R', color: 'w', pos: 'h8'},
        {name: 'B', color: 'w', pos: 'c1'},
        {name: 'B', color: 'w', pos: 'f1'},
        {name: 'K', color: 'w', pos: 'b1'},
        {name: 'K', color: 'w', pos: 'g1'},
    ],

    figureHtml: {
        pw: '&#9817;',
        Qw: '&#9813;'
    },

    renderFigure() {
        var figure = this.figures[0];
        var figureProperty = figure.name + figure.color;
        var figureCode = this.figureHtml[figureProperty];

    },
};


window.onload = (chess.run());

