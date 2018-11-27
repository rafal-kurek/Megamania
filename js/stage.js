//rozstawienie botów na każdym levelu
var stage = {
    stage1: function () {
        Data.count = 17
        for (k = 0; k < 2; k++) {
            if (k == 0) {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 40,
                        xx: -230 * i,
                        yy: 40,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            } else {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 180,
                        xx: -230 * i,
                        yy: 180,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            }
        }
        for (var j = 1; j < 6; j++) {
            var enemy = {
                x: (-230 * j) - 110,
                y: 110,
                xx: (-230 * j) - 110,
                yy: 110,
                width: 57,
                height: 36,
                active: true
            }
            Data.enemy.push(enemy)
        }
    },
    stage2: function () {
        Data.count = 17
        for (k = 0; k < 2; k++) {
            if (k == 0) {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 40,
                        xx: -230 * i,
                        yy: 40,
                        licznik: 0,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            } else {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 180,
                        xx: -230 * i,
                        yy: 180,
                        licznik: 0,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            }
        }
        for (var j = 1; j < 6; j++) {
            var enemy = {
                x: (-230 * j) - 110,
                y: 110,
                xx: (-230 * j) - 110,
                yy: 110,
                licznik: 0,
                width: 57,
                height: 36,
                active: true
            }
            Data.enemy.push(enemy)
        }
    },
    stage3: function () {
        Data.count = 17
        for (k = 0; k < 2; k++) {
            if (k == 0) {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 40,
                        xx: -230 * i,
                        yy: 40,
                        licznik: 0,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            } else {
                for (var i = 1; i < 7; i++) {
                    var enemy = {
                        x: -230 * i,
                        y: 180,
                        xx: -230 * i,
                        yy: 180,
                        licznik: 0,
                        width: 57,
                        height: 36,
                        active: true
                    }
                    Data.enemy.push(enemy)
                }
            }
        }
        for (var j = 1; j < 6; j++) {
            var enemy = {
                x: (-230 * j) - 110,
                y: 110,
                xx: (-230 * j) - 110,
                yy: 110,
                licznik: 0,
                width: 57,
                height: 36,
                active: true
            }
            Data.enemy.push(enemy)
        }
    }
}
