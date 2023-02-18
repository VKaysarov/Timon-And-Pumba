import { Timer } from "../entity/Timer";
import { World } from "../entity/World";
import { MovementSystem } from "./MovementSystem";
let currentTime = Date.now();

export const UpdateSystem = (hero, activeKey) => {

    MovementSystem(hero, activeKey);

    if (Timer.isActive == false) {
        if (Date.now() - currentTime >= 1000) {
            currentTime = Date.now();

            if (Timer.s < 59) {
                Timer.s++;
            } else {
                Timer.s = 0;
                Timer.m++;
            }

            if (hero.hp > 1) {
                hero.hp--;
            } else {
                World.isGameover = true;
            }
        }
    }

    if (activeKey['Escape'] != '' && pause == false) {
        elementPause.style.display = 'flex';
        pause = true;
        activeKey['Escape'] = '';
    }
} 