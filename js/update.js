//klasa animująca całą gre
var update = {
    //załadowanie ustawienia wrogów na poziomie
    load: function () {
        Data.enemy = []
        switch (Data.level) {
            case 0:
                stage.stage1()
                break;
            case 1:
                stage.stage2()
                break;
            case 2:
                stage.stage3()
                break;
            case 3:
                stage.stage4()
                break;
        }
        if (Data.level == 0) {
            setTimeout(function () {
                setInterval(update.animate, 1)
            }, 1500)
        } else {
            setTimeout(function () {
                Data.status = true
            }, 1500)
        }
    },
    //główna metoda animująca grę
    animate: function () {

        document.getElementById("score").innerHTML = " "
        for (var i = 0; i < Data.score.toString().length; i++) {
            var point = document.createElement("img")
            point.setAttribute('src', 'gfx/' + Data.score.toString().substr(i, 1) + '.png');
            document.getElementById("score").appendChild(point);
        }

        if (Data.status == true) {

            if (Data.count == 0) {
                Data.bullets = []
                Data.status = false

            }

            if (Data.lewo == true && Data.ship.x > 85) {
                Data.ship.x = Data.ship.x - 1.5

            } else if (Data.prawo == true && Data.ship.x < 1060) {

                Data.ship.x = Data.ship.x + 1.5
            }
            if (Data.shoot == true) {
                Data.fire++
                if (Data.fire == 1) {
                    var bullet = {
                        x: Data.ship.x + 20,
                        y: Data.ship.y - 25,
                        width: 7,
                        height: 28,
                        active: true
                    }
                    Data.bullets.push(bullet)

                } else if (Data.fire == 120) {
                    Data.fire = 0
                }
            }
            Data.ctx.clearRect(0, 0, Data.canvas.width, Data.canvas.height);

            //wykrywanie kolizji pocisk gracza->wróg

            for (var q = 0; q < Data.bullets.length; q++) {
                for (var w = 0; w < Data.enemy.length; w++) {
                    if (Data.bullets[q].y < Data.enemy[w].y + Data.enemy[w].height && Data.bullets[q].x + Data.bullets[q].width < Data.enemy[w].x + Data.enemy[w].width && Data.bullets[q].x > Data.enemy[w].x && Data.bullets[q].active == true && Data.enemy[w].active == true) {
                        Data.bullets[q].active = false
                        Data.enemy[w].active = false
                        Data.score += 20
                        Data.count--
                        document.getElementById("kill_audio").play()
                    }
                }
            }

            //wykrywanie kolizji wróg->gracz

            for (var y = 0; y < Data.enemy.length; y++) {
                if (Data.ship.y < Data.enemy[y].y + Data.enemy[y].height && Data.ship.x + Data.ship.width < Data.enemy[y].x + Data.enemy[y].width && Data.ship.x > Data.enemy[y].x) {
                    Data.life -= 1
                    Data.death = true
                }
            }



            //ruch pocisków gracza

            for (var i = 0; i < Data.bullets.length; i++) {
                Data.bullets[i].y -= 3
                if (Data.bullets[i].y < -10) {
                    Data.bullets[i].active = false
                }


                if (Data.bullets[i].active == true) {
                    Data.ctx.drawImage(Data.bullet_img, Data.bullets[i].x, Data.bullets[i].y)
                }
            }

            //ruch pocisków wroga

            for (var t = 0; t < Data.enemy_bullet.length; t++) {
                Data.enemy_bullet[t].y += 3
                if (Data.enemy_bullet[t].y > 590) {
                    Data.enemy_bullet[t].active = false
                }

                //wykrywanie kolizji pocisk wroga->gracz

                if (Data.enemy_bullet[t].y + Data.enemy_bullet[t].height > Data.ship.y && Data.enemy_bullet[t].x + Data.enemy_bullet[t].width < Data.ship.x + Data.ship.width && Data.enemy_bullet[t].x > Data.ship.x && Data.enemy_bullet[t].active == true) {
                    Data.enemy_bullet[t].active = false
                    Data.life -= 1
                    Data.death = true

                }
                
                //wyświetlanie pocisków wrogów
                if (Data.enemy_bullet[t].active == true) {
                    if (Data.level == 1) {
                        Data.ctx.drawImage(Data.enemy_bullet1_img, Data.enemy_bullet[t].x, Data.enemy_bullet[t].y)
                    } else if (Data.level == 2) {
                        Data.ctx.drawImage(Data.enemy_bullet2_img, Data.enemy_bullet[t].x, Data.enemy_bullet[t].y)
                    }
                }
            }


            //animacja botów w zależności od levelu
            switch (Data.level) {
                case 0:
                    move.move1()
                    break;
                case 1:
                    move.move2()
                    break;
                case 2:
                    move.move3()
                    break;
                case 3:
                    move.move4()
                    break;
            }


            //wyświetlanie pozycji statku gracza
            Data.ctx.drawImage(Data.ship_img, Data.ship.x, Data.ship.y);
        }

    },
    //utrata życia
    life: function () {
        document.getElementById("death").style.display = "none"
        if (Data.life == -1) {
            Data.status = false
            document.getElementById("energy").style.width = "0%"
            Data.ctx.clearRect(0, 0, Data.canvas.width, Data.canvas.height);
        } else {
            Data.death = false
            document.getElementById("life").innerHTML = " "
            Data.ship.x = 600
            Data.ship.y = 540
            level.loadEnergy()
            for (var i = 0; i < Data.life; i++) {
                var img = document.createElement("img")
                img.setAttribute('src', 'gfx/life.png');
                document.getElementById("life").appendChild(img);
            }
            Data.ctx.clearRect(0, 0, Data.canvas.width, Data.canvas.height);
            ctx.drawImage(Data.ship_img, Data.ship.x, Data.ship.y);
            setTimeout(function () {
                Data.status = true
            }, 1500)
        }
    }

}
