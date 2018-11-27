//klasa przechowująca wszystkie parametry obiektów w grze
var Data = {
    ship: {
        x: 600,
        y: 540,
        width: 45,
        height: 64
    },
    ship_img: null,
    bullet_img: null,
    enemy_bullet1_img: null,
    enemy_bullet2_img: null,
    enemy1_img: null,
    enemy2_img: null,
    enemy3_img: null,
    enemy4_img: null,
    lewo: false,
    prawo: false,
    fire: 0,
    shoot: false,
    bullets: [],
    enemy: [],
    enemy_bullet: [],
    life: 3,
    score: 0,
    status: true,
    lowEnergy: false,
    level: 0,
    count: null,
    kierunek: true,
    dol: false,
    death: false,
    atak: 0
}
