import { UpdateSystem } from "./UpdateSystem";
import { RenderSystem } from "./RenderSystem";
import { Timon } from "../entity/Timon";

export const AnimationSystem = (activeKey) => {
    if (pause == false && gameover == false) {
        UpdateSystem(Timon)
    } else if (gameover == true) {
        elementGameover.style.display = 'flex';
    } else {
        if (activeKey['Escape'] != '') {
            elementPause.style.display = 'none';
            pause = false;
            activeKey['Escape'] = '';
        }
    }

    RenderSystem(Timon)
    requestAnimationFrame(main)
}