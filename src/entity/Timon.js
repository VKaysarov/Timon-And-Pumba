import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";
import timonUrlImg from "/Media/sprites/Timon2.png";

export const Timon = {
    PositionComponent: PositionComponent(0, 0, 80, 100),
    AppearanceComponent: AppearanceComponent(timonUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false,
    direction: 0,
}