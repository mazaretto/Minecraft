/**
 * Created by andre on 27.04.2018.
 */
var pjs = new PointJS(400,400, {
    backgroundColor : '#e9e9e9'
});

pjs.system.initFullPage();
pjs.system.setTitle('Game');

var log = pjs.system.log;
var game = pjs.game;
var point = pjs.vector.point;
var camera = pjs.camera;
var brush = pjs.brush;
var OOP = pjs.OOP;
var math = pjs.math;
var tiles = pjs.tiles;

var mouse = pjs.mouseControl.initMouseControl();
var key  = pjs.keyControl.initKeyControl();

pjs.system.initFPSCheck();

var score = 0;
var record = 0;
var health = 8;

var touch = pjs.touchControl.initTouchControl();

function showHealth() {
    hs = [];
    healths = document.querySelector('#healths');
    for(var i = 0; i < health; i++)
    {
        var hImg = document.createElement('img');
        hImg.src = 'pictures/health.png';
        hImg.width = 35;
        hImg.height = 35;
        hs.push(hImg);

        healths.append(hs[i]);
    }
}
function removeHealth()
{
    var h = document.querySelectorAll('#healths > img');
    for(var i = 0; i < h.length; i++)
    {
        h[i].remove();
    }
}

showHealth();