import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";
import backgroundUrlImg from "/Media/Background/background-1.png";

export const Background = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg),
    vx: 0,
}