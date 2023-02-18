import hyenasUrlImg from "/Media/sprites/Hyenas.png";
import { PositionComponent } from "./components/PositionComponent";
import { AppearanceComponent } from "./components/AppearanceComponent";

const Hyena = {
    PositionComponent: PositionComponent(),
    AppearanceComponent: AppearanceComponent(hyenasUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
}