import { World } from "../entity/World";
import { Timon } from "../entity/Timon";
import { BlockList } from "../entity/Block";
import { Background } from "../entity/Background";
import { Caterpillars } from "../entity/Caterpillar";
import { UpdateSystem } from "./UpdateSystem";
import { RenderSystem } from "./RenderSystem";

const elementPause = document.getElementById('pause');
const { width, height, context } = World;
let pause = false;
let gameover = false;

export const AnimationSystem = (activeKey) => {
    if (pause == false && gameover == false) {
        UpdateSystem(Timon, activeKey)
    } else if (gameover == true) {
        elementGameover.style.display = 'flex';
    } else {
        if (!!activeKey['Escape']) {
            elementPause.style.display = 'none';
            pause = false;
            activeKey['Escape'] = '';
        }
    }

    context.clearRect(0, 0, width, height);

    RenderSystem([Timon]);
    RenderSystem([Background, Timon]);
    RenderSystem(BlockList);
    RenderSystem(Caterpillars);

    if (!activeKey['Escape']) {
        requestAnimationFrame(() => AnimationSystem(activeKey));
    }
}