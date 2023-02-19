import PumbaUrlImg from "/Media/sprites/PumbaTLK.png";
import { FrameComponent } from "../components/FrameComponent";
import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";

export const Pumba = {
    FrameComponent: FrameComponent(),
    PositionComponent: PositionComponent(),
    AppearanceComponent: AppearanceComponent(PumbaUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false,
    direction: "",
}
