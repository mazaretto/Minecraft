/**
 * Created by andre on 27.04.2018.
 */
game.newLoopFromConstructor('game',function () {
    var sound = new Audio();
        sound.src = 'minecraft.mp3';
        sound.volume = 0.10;

        damage = new Audio();
        damage.src = "damage.mp3";
        damage.volume = 0.3;

        dmob = new Audio();
        dmob.src = "unfect.mp3";
        dmob.volume = 0.3;

        damageOnZombie = new Audio();
        damageOnZombie.src = "hurt1.mp3";
        damageOnZombie.volume = 0.3;

    sound.play();
    var map = {
        width: 50,
        height: 50,
        source: [
            ' ',
            ' ',
            ' ',
            '000',
            '0 ',
            '0P0',
            '000',
            '0          HZ   Z',
            '0   /TTT  TTTTT TTK1',
            '0  /0000  00000W000K000H',
            '0  00      0000W000WOOW0000S' ,
            '0W00       0000WOOW0   SSSSZ  K      KSS',
            '0W0           0WOOW0   SSSSSSSSS   SSSS',
            '020           0 H1 0      SSSSSSSL  SSS',
            '000H      H   000000   HSSSSSSSSSSSSSSSS  ',
            '000000LLLL00000000000000000000000000000000',
            '000000LLLL00000000000000000000000000000000',
            '000000LLLL00000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            '0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
            'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB'
        ]
    };
    
     walls = [];
     cells = [];
     waters = [];
     mobs = [];
     lava = [];
     hilki = [];

    OOP.forArr(map.source,function (string,Y) {
       OOP.forArr(string,function (symbol,X) {
           if(!symbol || symbol == ' ') return;

           if(symbol === '0') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/stone.png",
                   userData: {
                       countClicks: 4
                   }
               }));
           }
           if(symbol === 'Z') {
               mobs.push(game.newImageObject({
                   w: map.width,
                   h: map.height + 20,
                   x: map.width * X,
                   y: map.height * Y - 20,
                   file: "pictures/zombie.png",
                   userData: {
                       healthMob: 12
                   }
               }));
           }
           if(symbol === 'H') {
               hilki.push(game.newImageObject({
                   w: 20,
                   h: 20,
                   x: map.width * X + 20,
                   y: map.height * Y + 20,
                   file: "pictures/health.png"
               }));
           }
           if(symbol === "W")
           {
               waters.push(game.newAnimationObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   animation: tiles.newImage("pictures/water.gif").getAnimation(0,0,50,50,2),
                   angle: 0,
                   visible: true,
                   alpha: 0.8,
                   delay: 10
               }));
           }
           if(symbol === "L")
           {
               lava.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/lava.png",
                   alpha: 0.8
               }));
           }
           if(symbol === "2")
           {
               waters.push(game.newAnimationObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   animation: tiles.newImage("pictures/water.gif").getAnimation(0,0,50,50,2),
                   angle: 0,
                   visible: true,
                   alpha: 0.8,
                   delay: 10
               }));
               cells.push(game.newImageObject({
                   w: map.width - 20,
                   h: map.height - 20,
                   x: map.width * X + map.width / 4,
                   y: map.height * Y + 10,
                   file: "pictures/al.png",
                   userData: {
                       active: true
                   }
               }));
           }
           if(symbol === '1') {
               cells.push(game.newImageObject({
                   w: map.width - 20,
                   h: map.height - 20,
                   x: map.width * X + map.width / 4,
                   y: map.height * Y + 10,
                   file: "pictures/al.png",
                   userData: {
                       active: true
                   }
               }));
           }
           if(symbol === 'B') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/b.png",
                   userData: {
                       countClicks: 100
                   }
               }));
           }
           if(symbol === '/') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/lstone.png",
                   userData: {
                       speedY: -1,
                       countClicks: 3
                   }
               }));
           }
           if(symbol === 'R') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/rstone.png",
                   userData: {
                       speedYsec: 1,
                       countClicks: 3
                   }
               }));
           }
           if(symbol === "P")
           {
               oldXplayer = map.width * X;
               oldYplayer = map.height * Y;
               player = game.newImageObject({
                   w: 30,h:30,x:map.width * X,y:map.height * Y,
                   file: "pictures/ball.png"
               });
           }
           if(symbol === 'O') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/oldstone.png",
                   userData: {
                       countClicks: 3
                   }
               }));
           }
           if(symbol === 'K') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/kaktus.jpg",
                   userData: {
                       enemyBlock: true,
                       countClicks: 2
                   }
               }));
           }
           if(symbol === "S")
           {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/sand.jpg",
                   userData: {
                       countClicks: 2
                   }
               }));
           }
           if(symbol === 'T') {
               walls.push(game.newImageObject({
                   w: map.width,
                   h: map.height,
                   x: map.width * X,
                   y: map.height * Y,
                   file: "pictures/tr.png",
                   userData: {
                       countClicks: 2
                   }
               }));
           }
       }); 
    });

    player.gr = 0.25;
    player.speed = point(0,0);

    var drawing = function(m) {
        const CELL_W = 50,
              CELL_H = 50;

        var curPos = point();
        var tiles = [];

        curPos.x = CELL_W * Math.floor(m.x / CELL_W);
        curPos.y = CELL_H * Math.floor(m.y / CELL_H);

        var block = game.newRectObject({
            x: curPos.x,
            y: curPos.y,
            w: CELL_W,
            h: CELL_H,
            strokeColor: 'red',
            strokeWidth: 1
        });
        var pick = game.newImageObject({
            w:50,h:50,
            y: m.y - 25,
            x: m.x - 25,
            file: "pictures/pick.png"
        });
        var drawCell = function () {
            block.draw();
        };
        var addTile = function () {
            tiles.push(game.newImageObject({
                x: curPos.x,
                y: curPos.y,
                w: CELL_W,
                h: CELL_H,
                file: "pictures/stone.png"
            }));
        };
        if (player.getDistance(m) < 60 && !player.isStaticIntersect(block.getStaticBox())) {
            drawCell();

            if (mouse.isPress('LEFT'))
                addTile();
        }

        var drawTiles = function () {
            OOP.forArr(tiles, function (el, id) {
                walls.push(game.newImageObject({
                    x: el.x,
                    y: el.y,
                    w: el.w,
                    h: el.h,
                    file: el.file
                }));
            });
            OOP.forArr(walls,function (val,i,arr) {
                if(player.getDistance(m) < 60)
                {
                    pick.draw();
                    if (mouse.isPeekObject('RIGHT', val)) {
                        if(countClick >= val.countClicks)
                        {
                            arr.splice(i,1);
                            countClick = 0;
                        }

                        countClick++;
                    }
                }
            });

        };
        drawTiles();
    };
    var isDown = false;
    var isMob = false;
    this.update = function () {
        game.clear();

        player.draw();
        player.speed.y += player.gr;

        if(key.isDown('A')) {
            player.speed.x = -2;
            player.turn(-5);
        }
        else if(key.isDown('D')) {
            player.speed.x = 2;
            player.turn(5);
        }
        else
            player.speed.x = 0;
        OOP.drawArr(walls,function (wall) {
            if (wall.isInCameraStatic()) {
                if(wall.isStaticIntersect(player)) {
                        if (wall.speedY) {
                            player.speed.x -= 0.5;
                            if(player.getDistance(wall.getPositionC()) < 40)
                                {player.speed.y = wall.speedY * player.speed.x;}

                            return;
                        }
                        if(wall.speedYsec)
                        {
                            player.speed.x += 0.5;
                            if(player.getDistance(wall.getPositionC()) < 40)
                                {player.speed.y = wall.speedYsec * player.speed.x;}

                            return;
                        }

                    if(player.x + player.w > wall.x+wall.w/4 && player.x  < wall.x+wall.w - wall.w/4) {
                        if (player.speed.y > 0 && player.y + player.h < wall.y + wall.h / 2) {
                            if (key.isDown('SPACE')) {
                                player.speed.y = -7;
                            }
                            else {
                                player.y = wall.y - player.h;
                                player.speed.y *= -0.3;

                                if (player.speed.y > -0.3) player.speed.y = 0;
                            }
                        } else if (player.speed.y < 0 && player.y > wall.y + wall.h / 2) {
                            player.y = wall.y + wall.h;

                            player.speed.y *= -0.1;
                        }
                    }
                    if(player.y + player.h > wall.y+wall.h/4 && player.y  < wall.y+wall.h - wall.h/4) {
                        if (player.speed.x > 0 && player.x + player.w < wall.x + wall.w/2) {
                            player.x = wall.x - player.w;
                            player.speed.x = 0;
                        }
                        if (player.speed.x < 0 && player.x > wall.x + wall.w / 2) {
                            player.x = wall.w + wall.x;
                            player.speed.x = 0;
                        }
                    }
                }
            }
        });

        var speedY = 0.1;
        OOP.drawArr(cells,function (cell) {
            if(cell.active)
            {
                if(cell.isStaticIntersect(player))
                {
                    cell.active = false;
                    cell.visible = false;
                    score++;
                }
            }
            if(score === cells.length)
            {
                alert('Победа!');

                pjs.game.stop();
            }
        });
        OOP.drawArr(hilki,function (h) {});
        OOP.forArr(hilki,function (h,i,arr) {
            if(h.isStaticIntersect(player))
            {
                health = health + 1;

                arr.splice(i,1);

                var hImg = document.createElement('img');
                hImg.src = 'pictures/health.png';
                hImg.width = 35;
                hImg.height = 35;
                healths.append(hImg);
            }
        });
        var onWater = false;
        OOP.drawArr(waters,function (water) {
            if(onWater) return;
            if(water.isStaticIntersect(player) && player.y+player.h/2 > water.y) {
                player.speed.y -= 0.2;
                onWater = true;
            }
        });
        var onLava = false;
        OOP.drawArr(lava,function (lava) {
            if(onLava) return;

            if(lava.isStaticIntersect(player) && player.y+player.h/2 > lava.y)
            {
                player.speed.y -= 0.5;
                onLava = true;

                health = 0;
                game.setLoop('game');
                player.x = oldXplayer;
                score = 0;
                player.y = oldYplayer;

                removeHealth();
            }
        });
        function drawMob()
        {
            OOP.drawArr(mobs,function (val,i) {
                if(val.getDistance(player.getPosition()) < 80)
                {
                    var obj = game.newImageObject(   {
                        file : "pictures/sword.png",
                        x : mouse.getPosition().x - 20,
                        y : mouse.getPosition().y - 20,
                        w : 40,
                        h : 40,
                        //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота
                    });
                    if(mouse.isPeekObject('LEFT',val))
                    {
                        damageOnZombie.currentTime = 1;
                        damageOnZombie.play();
                        val.healthMob--;

                        obj.rotateForAngle(180,5);
                    }
                    obj.draw();
                }
                if(val.healthMob === 0)
                {
                    dmob.play();
                    val.rotateForAngle(120,5);
                    val.y+=10;

                    if(val.y >= window.innerWidth/2)
                    {
                        mobs.splice(i,1);
                    }
                }
                var timer1 = setInterval(function () {
                    isMob = true;
                },2000);
                var timer2 = setInterval(function () {
                    isMob = false;
                },4000);
                if(isMob === false)
                {
                    val.move(point(-0.25,0));
                }

                if(isMob === true)
                {
                    val.move(point(0.25,0));
                }
            });
        }
        drawMob();
        // animation
        OOP.forArr(cells,function(cell){
            var timer1 = setInterval(function () {
                isDown = true;
            },2000);
            var timer2 = setInterval(function () {
                isDown = false;
            },4000);
            if(isDown === false)
            {
                cell.move(point(0,-speedY));
            }

            if(isDown === true)
            {
                cell.move(point(0,speedY));
            }
        });

        if(player.speed.y)
        {
            player.y += player.speed.y;
        }
        if(player.speed.x)
        {
            player.x += player.speed.x;
        }
        // start
           drawing(mouse.getPosition());
        // end
        brush.drawTextS({
            text: 'Счет:' + score,
            size: 20,
            color: 'red',
            strokeColor: '#fff',
            strokeWidth: 2,
            x: 10,
            y: 10
        });
        brush.drawTextS({
            text: 'FPS:' + pjs.system.getFPS(),
            size: 20,
            color: '#fff',
            strokeColor: '#fff',
            strokeWidth: 2,
            x: window.innerWidth - 150,
            y: 10
        });
        brush.drawTextS({
           text: 'Здоровье:' + health,
            size: 20,
            color: 'green',
            x: 10,
            y: 50
        });
        camera.follow(player,50); // плавное движение к камере

        if(health <= 0)
        {
            game.setLoop('game');
            health = 8;
            score = 0;
            player.x = oldXplayer;
            player.y = oldYplayer;

            showHealth();
        }
    };
});
var countClick = 0;
// check health without timing a 2 seconds
function check() {
    OOP.forArr(walls,function (wall) {
       if(wall.isStaticIntersect(player.getStaticBox()))
       {
           if(wall.enemyBlock)
           {
               damage.currentTime = 0.75;
               damage.play();
               pjs.camera.move(point(-10,0));
               try
               {
                   health--;
                   hs.shift();
                   var el = document.querySelectorAll('#healths > img');
                   el[el.length-1].remove();
               }
               catch(e)
               {}
           }
       }
    });
    OOP.forArr(mobs,function (mob) {
        if(mob.isIntersect(player))
        {
            try
            {
                damage.currentTime = 0.75;
                damage.play();

                health--;
                hs.shift();
                var el = document.querySelectorAll('#healths > img');
                el[el.length-1].remove();

                pjs.camera.move(point(-10,0));
            }
            catch (e) {}
        }
    });
    setTimeout(check,250);
}

check();