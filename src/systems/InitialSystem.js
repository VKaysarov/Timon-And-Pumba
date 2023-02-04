import { World } from "../entity/World";
import { Timon } from "../entity/Timon";
import { Block } from "../entity/Block";
import { Background } from "../entity/Background";
import { Caterpillar } from "../entity/Caterpillar";
import { PositionComponent } from "../components/PositionComponent";

const height = World.height;

const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

export const generateBlocks = () => {
    const randomPosition = [];

    for (var i = 100; i < 5000; i+=100) {
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

export const generateCaterpillars = (blocks) => {
    const caterpillars = [];
    for (let i = 0; i < 1; i++) {
        Caterpillar.PositionComponent = PositionComponent(blocks[i].PositionComponent.x1, height - 300 - blocks[i].PositionComponent.y2, 100, 50);
        caterpillars.push(Caterpillar);
    }

    return caterpillars;
}

export const InitialSystem = () => {
    Timon.PositionComponent = PositionComponent(0, height - 100, 80, 100);
    Background.PositionComponent = PositionComponent(0, 0, 5000, height);
    Block.PositionComponent = PositionComponent(0, height - 300);
}