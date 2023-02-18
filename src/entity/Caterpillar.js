import { BlockList } from "./Block";
import { World } from "./World";
import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import caterpillarUrlImg from "/Media/Caterpillars/caterpillar003.png";

const { height } = World;

export const Caterpillar = {
    AppearanceComponent: AppearanceComponent(caterpillarUrlImg),
    PositionComponent: PositionComponent(),
    hp: 100
}

export const generateCaterpillars = (blocks) => {
    const caterpillars = [];

    for (let i = 0; i < 1; i++) {
        Caterpillar.PositionComponent = PositionComponent(blocks[i].PositionComponent.x1, height - 300 - blocks[i].PositionComponent.y2, 100, 50);
        caterpillars.push(Caterpillar);
    }

    return caterpillars;
}

export const Caterpillars = generateCaterpillars(BlockList);
