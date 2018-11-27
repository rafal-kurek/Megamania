var fire
var controls = {
    //metoda odpowiedzialna za pociski
    shoot: function () {
        //przy każdym strzale tworzy obiekt pocisku i dodaje go do tablicy pocisków
        var bullet = {
            x: Data.ship.x + 20,
            y: Data.ship.y - 25,
            width: 7,
            height: 28,
            active: true
        }
        Data.bullets.push(bullet)
    },
    //obsługa klawiszy/sterowanie
    up: function (event) {
        var keyCode = event.which
        switch (keyCode) {
            case 65:
                Data.lewo = false
                break;
            case 68:
                Data.prawo = false
                break;
            case 32:

                Data.shoot = false
                Data.fire = 0
                break;
        }
    },

    down: function (event) {
        var keyCode = event.which
        switch (keyCode) {
            case 65:
                Data.lewo = true
                break;
            case 68:
                Data.prawo = true
                break;
            case 32:
                if (Data.prawo == true || Data.lewo == true || Data.prawo == false || Data.lewo == false)
                    document.getElementById("shoot_audio").play()
                Data.shoot = true
                break;
        }

    },



}
