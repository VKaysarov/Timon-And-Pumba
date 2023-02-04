import { MovementSystem } from "./MovementSystem";

export const UpdateSystem = (hero) => {
    MovementSystem(hero, activeKey);

    if(timer == false){
        if(Date.now() - currentTime >= 1000){
            currentTime = Date.now();
            if (s < 59) {
                    s++;
                } else {
                    s = 0;
                    m++;
                }
                if (hero.hp > 1) {
                    hero.hp--;
                } else {
                    gameover = true;
                }
        }
    }

    if (activeKey['Escape'] != '' && pause == false) {
        elementPause.style.display = 'flex';
        pause = true;
        activeKey['Escape'] = '';
    }
} 