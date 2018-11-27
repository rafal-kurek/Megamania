//schematy poruszania się botów na każdym levelu (move1 oznacza level 1 itd.)
var move = {
    move1: function () {
        for (var j = 0; j < Data.enemy.length; j++) {
            Data.enemy[j].x += 1.5
            if (Data.enemy[j].x > 1250) {
                Data.enemy[j].x = -50
            }
            if (Data.enemy[j].active == true) {
                Data.ctx.drawImage(Data.enemy1_img, Data.enemy[j].x, Data.enemy[j].y)
            }

        }
    },
    move2: function () {
        Data.atak++


        for (var j = 0; j < Data.enemy.length; j++) {
            Data.enemy[j].licznik++
            Data.enemy[j].x += 1.5
            if (Data.enemy[j].licznik > 120) {
                Data.enemy[j].licznik = 0
                Data.enemy[j].y += 2
            }

            if (Data.atak > 200) {
                Data.atak = 0
                var one
                var two
                //losowe statki wroga oddają strzał w stronę gracza
                do {

                    one = Math.floor((Math.random() * Data.enemy.length) + 0);
                    two = Math.floor((Math.random() * Data.enemy.length) + 0);
                }
                while (Data.enemy[one].active == false || Data.enemy[two].active == false);
                for (var i = 0; i < 2; i++) {
                    if (i == 0) {
                        var enemy_bullet = {
                            x: Data.enemy[one].x + 28,
                            y: Data.enemy[one].y,
                            active: true,
                            width: 7,
                            height: 28
                        }
                        Data.enemy_bullet.push(enemy_bullet)
                    } else {
                        var enemy_bullet = {
                            x: Data.enemy[two].x + 28,
                            y: Data.enemy[two].y,
                            active: true,
                            width: 7,
                            height: 28
                        }
                        Data.enemy_bullet.push(enemy_bullet)
                    }
                }
            }

            if (Data.enemy[j].x > 1250) {
                Data.enemy[j].x = -50
            }
            if (Data.enemy[j].active == true) {
                Data.ctx.drawImage(Data.enemy3_img, Data.enemy[j].x, Data.enemy[j].y)
            }

        }
    },
    move3: function () {
        Data.atak++


        for (var j = 0; j < Data.enemy.length; j++) {
            Data.enemy[j].licznik++
            Data.enemy[j].x += 1.5
            if (Data.enemy[j].licznik > 90) {
                Data.enemy[j].licznik = 0
                Data.enemy[j].y += 6
            }

            if (Data.atak > 120) {
                Data.atak = 0
                var one
                var two
                //losowe statki wroga oddają strzał w stronę gracza
                do {

                    one = Math.floor((Math.random() * Data.enemy.length) + 0);
                    two = Math.floor((Math.random() * Data.enemy.length) + 0);
                }
                while (Data.enemy[one].active == false || Data.enemy[two].active == false);
                for (var i = 0; i < 2; i++) {
                    if (i == 0) {
                        var enemy_bullet = {
                            x: Data.enemy[one].x + 28,
                            y: Data.enemy[one].y,
                            active: true,
                            width: 7,
                            height: 28
                        }
                        Data.enemy_bullet.push(enemy_bullet)
                    } else {
                        var enemy_bullet = {
                            x: Data.enemy[two].x + 28,
                            y: Data.enemy[two].y,
                            active: true,
                            width: 7,
                            height: 28
                        }
                        Data.enemy_bullet.push(enemy_bullet)
                    }
                }
            }

            if (Data.enemy[j].x > 1250) {
                Data.enemy[j].x = -50
            }
            if (Data.enemy[j].active == true) {
                Data.ctx.drawImage(Data.enemy4_img, Data.enemy[j].x, Data.enemy[j].y)
            }

        }
    }

}
