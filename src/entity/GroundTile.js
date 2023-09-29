import GroundTileUrl from "/public/background/ground-tile.png";
import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";

export const GroundTile = {
    PositionComponent: PositionComponent(0, 1000, 0, 0),
    AppearanceComponent: AppearanceComponent(GroundTileUrl),
    vx: 2,
}