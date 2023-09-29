import { World } from "../entity/World";
import { BlockList } from "../entity/Block";
import { GroundTile } from "../entity/GroundTile";
import { Backgrounds } from "../entity/Background";
import { Caterpillars } from "../entity/Caterpillar";
import { UpdateSystem } from "./UpdateSystem";
import { RenderSystem } from "./RenderSystem";
import { ParallaxBackgroundSystem } from "./ParallaxBackgroundSystem";

const elementPause = document.getElementById('pause');
const elementGameover = document.getElementById('gameover');
const { width, height, context } = World;
let pause = false;

export const AnimationSystem = (activeKey, hero) => {
    if (pause == false && World.isGameover == false) {
        UpdateSystem(hero, activeKey)
    } else if (World.isGameover == true) {
        elementGameover.style.display = 'flex';
    } else {
        if (!!activeKey['Escape']) {
            elementPause.style.display = 'none';
            pause = false;
            activeKey['Escape'] = '';
        }
    }

    context.clearRect(0, 0, width, height);

    ParallaxBackgroundSystem([...Backgrounds, GroundTile], activeKey, hero);
    RenderSystem([hero]);
    RenderSystem(Caterpillars);
    RenderSystem(BlockList);

    if (!activeKey['Escape']) {
        requestAnimationFrame(() => AnimationSystem(activeKey, hero));
    }
}