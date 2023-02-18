import { World } from "../entity/World";
import { Timon } from "../entity/Timon";
import { Background } from "../entity/Background";
import { PositionComponent } from "../components/PositionComponent";

const { height } = World;

export const InitialSystem = () => {
    Timon.PositionComponent = PositionComponent(0, height - 100, 80, 100);
    Background.PositionComponent = PositionComponent(0, 0, 5000, height);
}