import { World } from "../entity/World";
import { Timon } from "../entity/Timon";
import { GroundTile } from "../entity/GroundTile";
import { Backgrounds } from "../entity/Background";
import { PositionComponent } from "../components/PositionComponent";

const { width, height } = World;

export const InitialSystem = () => {
    Timon.PositionComponent = PositionComponent(0, height - 100, 80, 100);
    GroundTile.PositionComponent = PositionComponent(0, height - 150, width, 150);
    Backgrounds.map((Background) => {
        Background.PositionComponent = PositionComponent(0, 0, width, height);
    })
}