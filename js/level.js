//obsługa wszytkich incydentów podczas gry
var level = {
    //ładowanie energii po śmierci
    loadEnergy: function () {
        setTimeout(function () {
            document.getElementById("loadEnergy_audio").play()
            document.getElementById("lowEnergy_audio").loop = false
        }, 1)
        var el = document.getElementById("energy");
        var widthUp = 1;
        var up = setInterval(animateUp, 15);

        function animateUp() {
            if (widthUp >= 100) {
                clearInterval(up);
                el.style.width = "100%"
                level.energy()
            } else {
                widthUp++;
                el.style.width = widthUp + '%';
            }
        }
    },
    //metoda animująca pasek energii w czasie gry
    energy: function () {
        var el = document.getElementById("energy");
        var el2 = document.getElementById("energy_font")
        var widthDown = 100;
        var down = setInterval(animateDown, 500);

        function animateDown() {
            if (Data.lowEnergy == false) {
                el2.style.display = "block"
            } else {
                el2.style.display = "none"
            }
            if (Data.count == 0) {
                clearInterval(down);
                level.bonus()

            }
            if (Data.death == true) {
                clearInterval(down);
                level.death()

            }
            if (widthDown <= 0) {
                clearInterval(down);
                Data.life -= 1
                level.death()
            } else {
                if (widthDown <= 22 && widthDown > 0) {
                    document.getElementById("lowEnergy_audio").loop = true
                    document.getElementById("lowEnergy_audio").play()
                    Data.lowEnergy = !Data.lowEnergy
                }
                widthDown -= 1;
                el.style.width = widthDown + '%';
            }
        }
    },
    //metoda animująca pasek energii podczas przyznawania bonusu
    bonus: function () {
        document.getElementById("bonus_audio").loop = true
        document.getElementById("bonus_audio").play()
        var el = document.getElementById("energy");
        var proc = el.style.width
        var dl = el.style.width.length
        var wartosc = proc.substr(0, dl - 1)
        var points = setInterval(countBonus, 15);

        function countBonus() {

            if (wartosc <= 0) {
                document.getElementById("bonus_audio").loop = false
                clearInterval(points);
                Data.level++
                level.loadEnergy()
                update.load()
            }
            Data.score = Data.score + Math.round(wartosc / 4)
            wartosc -= 1;
            el.style.width = wartosc + '%';
        }

    },
    //śmierć gracza i utrata życia
    death: function () {
        for (var i = 0; i < Data.enemy.length; i++) {
            Data.enemy[i].x = Data.enemy[i].xx
            Data.enemy[i].y = Data.enemy[i].yy
        }
        document.getElementById("lowEnergy_audio").loop = false
        document.getElementById("death_audio").play()
        document.getElementById("energy_font").style.display = "block"
        document.getElementById("death").style.display = "block"
        document.getElementById("death").style.top = Data.ship.y + 10 + "px"
        document.getElementById("death").style.left = Data.ship.x + 10 + "px"
        Data.lowEnergy = false
        Data.status = false
        Data.bullets = []

        setTimeout(function () {
            update.life()
        }, 3000)
    }
}
