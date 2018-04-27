/**
 * Created by andre on 27.04.2018.
 */
function Editor () {
    const CELL_W = 50,
          CELL_H = 50;

    var curPos = point();
    var tiles = [];
    var type = 0;

    var updateCursor = function (mp) {
        curPos.x = CELL_W * Math.floor(mp.x / CELL_W);
        curPos.y = CELL_H * Math.floor(mp.y / CELL_H);
    };

    var drawCell = function (mp) {
        brush.drawRect({
           x: curPos.x,
           y: curPos.y,
           w: CELL_W,
           h: CELL_H,
           strokeColor: 'red',
           strokeWidth: 1
        });
    };
    var moveCamera = function () {
        if(key.isDown("A"))
          camera.move(point(-5,0));
        if(key.isDown("D"))
            camera.move(point(5,0));
        if(key.isDown("W"))
            camera.move(point(0,-5));
        if(key.isDown("S"))
            camera.move(point(0,5));
    };
    var addTile = function () {
        if(!type)
        {
            tiles.push(game.newRectObject({
                x: curPos.x,
                y: curPos.y,
                w: CELL_H,
                h: CELL_H,
                fillColor: pjs.colors.randomColor(100,200)
            }));
        }
    };

    this.update = function () {
        game.clear();
        updateCursor(mouse.getPosition());

        moveCamera();

        drawCell();

        OOP.forArr(tiles,function (el,id) {

        });

        if(mouse.isPress('LEFT'))
            addTile();
    };
}

game.newLoopFromClassObject('editor',new Editor());