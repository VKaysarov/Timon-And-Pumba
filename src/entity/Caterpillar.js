import { BlockList } from "./Block";
import { World } from "./World";
import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import caterpillarUrlImg from "/Media/Caterpillars/caterpillar003.png";

const { height } = World;

export const Caterpillar = {
    AppearanceComponent: AppearanceComponent(caterpillarUrlImg),
    PositionComponent: PositionComponent(),
    width: 100,
    height: 50,
    hp: 100
}

export const generateCaterpillars = (blocks) => {
    const caterpillars = [];
    const y1 = height - 250 - Caterpillar.height;
    
    for (let i = 0; i < 1; i++) {
        const x1 = blocks[i].PositionComponent.x1 + Caterpillar.width / 2;

        Caterpillar.PositionComponent = PositionComponent(x1, y1, Caterpillar.width, Caterpillar.height);
        caterpillars.push(Caterpillar);
    }

    return caterpillars;
}

export const Caterpillars = generateCaterpillars(BlockList);
