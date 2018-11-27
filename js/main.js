//inicjalizacja całej rozgrywki
function Main() {

    Data.ship_img = document.getElementById("ship")
    Data.enemy1_img = document.getElementById("enemy1")
    Data.enemy2_img = document.getElementById("enemy2")
    Data.enemy3_img = document.getElementById("enemy3")
    Data.enemy4_img = document.getElementById("enemy4")
    Data.bullet_img = document.getElementById("bullet")
    Data.enemy_bullet1_img = document.getElementById("enemy_bullet1")
    Data.enemy_bullet2_img = document.getElementById("enemy_bullet2")
    Data.canvas = document.getElementById("can")
    Data.ctx = Data.canvas.getContext("2d")

    document.addEventListener("keydown", controls.down, false);
    document.addEventListener("keyup", controls.up, false);

    function canvas() {
        el = document.getElementById("can");
        ctx = el.getContext("2d");
        img = document.getElementById("ship");
        ctx.drawImage(Data.ship_img, Data.ship.x, Data.ship.y);
    }
    canvas()

    function startGame() {
        update.life()
        update.load()
    }


    startGame()
}
