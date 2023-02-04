import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import blockUrlImg from "/Media/Caterpillars/land-vector-1.png";

export const Block = {
    AppearanceComponent: AppearanceComponent(blockUrlImg),
    PositionComponent: PositionComponent(),
    vx: 0,
}