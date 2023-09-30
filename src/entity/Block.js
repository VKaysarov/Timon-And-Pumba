import { World } from "../entity/World";
import { AppearanceComponent } from "../components/AppearanceComponent";
import { PositionComponent } from "../components/PositionComponent";
import blockUrlImg from "/Media/Caterpillars/land-vector-1.png";

const { height } = World;
const BLOCK_WIDTH = 200;
const MAP_WIDTH = 3000;

export const randomInteger = (min, max) => {
    const rand = min + Math.random() * (max + 1 - min);

    return Math.floor(rand);
}

export const generateBlocks = (number = 2) => {
    const blocks = [];
    const randomPosition = [];

    for (let i = 100; i < MAP_WIDTH; i += BLOCK_WIDTH) {
        randomPosition.push(i);
    }

    let randomIndexList = Array.from({ length: randomPosition.length }, (_, index) => index);

    for (let i = 0; i < number; i++) {
        const x = randomInteger(0, randomIndexList.length - 1);
        const randomIndex = randomIndexList[x];
        const block = {
            AppearanceComponent: AppearanceComponent(blockUrlImg),
            PositionComponent: PositionComponent(randomPosition[randomIndex], height - 250, BLOCK_WIDTH, 100),
            vx: 0,
        }

        randomIndexList.splice(x, 1); 
        blocks.push(block);
    }

    return blocks;
}

export const BlockList = generateBlocks(10);
