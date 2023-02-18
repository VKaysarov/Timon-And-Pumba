import PumbaUrlImg from "/Media/sprites/PumbaTLK.png";
import { PositionComponent } from "./components/PositionComponent";
import { AppearanceComponent } from "./components/AppearanceComponent";

const Pumba = {
    PositionComponent: PositionComponent(),
    AppearanceComponent: AppearanceComponent(PumbaUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false
}
