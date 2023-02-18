import { World } from "../entity/World";
import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import blockUrlImg from "/Media/Caterpillars/land-vector-1.png";

const { height } = World;

export const Block = {
    AppearanceComponent: AppearanceComponent(blockUrlImg),
    PositionComponent: PositionComponent(0, height - 300, 200, 100),
    vx: 0,
}

export const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

export const generateBlocks = () => {
    const randomPosition = [];

    for (let i = 100; i < 5000; i+=100) {
        randomPosition.push(i);
    }

    const blocks = [];

    for (let i = 0; i < 1; i++) {
        let x = randomInteger(0, 4);

        if (i > 0) {
            while (blocks[i - 1].PositionComponent.x1 === randomPosition[x]) {
                x = randomInteger(0, 4);
            }
        }

        Block.PositionComponent.x1 = randomPosition[x];
        blocks.push(Block);
    }

    return blocks;
}

export const BlockList = generateBlocks();
