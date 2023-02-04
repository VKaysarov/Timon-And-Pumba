import { height } from "../helpers"
import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";

export const Timon = {
    PositionComponent: PositionComponent(0, height - 300, 80, 100),
    AppearanceComponent: AppearanceComponent('Media/sprites/TimonTLK.png', 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false,
    direction: 0,
}