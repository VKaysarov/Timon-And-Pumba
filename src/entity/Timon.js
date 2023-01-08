let height = canvas.height = window.innerHeight - 5;
const Timon = {
    PositionComponent: PositionComponent(0, height - 300, 80, 100),
    AppearanceComponent: AppearanceComponent('Media/sprites/TimonTLK.png', 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false,
    direction: 0,
}