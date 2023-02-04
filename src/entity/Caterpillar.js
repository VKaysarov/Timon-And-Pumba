import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import caterpillarUrlImg from "/Media/Caterpillars/caterpillar003.png";

export const Caterpillar = {
    AppearanceComponent: AppearanceComponent(caterpillarUrlImg),
    PositionComponent: PositionComponent(),
    hp: 100
}