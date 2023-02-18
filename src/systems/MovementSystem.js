import { World } from "../entity/World";
import { BlockList } from "../entity/Block";
import { Background } from "../entity/Background";
import { Caterpillars } from "../entity/Caterpillar";
import { collisions, handleConllision } from "../systems/CollisionSystem";

export const MovementSystem = (hero, activeKey) => {
    const { width, height } = World;

    if (activeKey['ArrowLeft'] && hero.digin == false) {
        if (hero.PositionComponent.x1 <= width/2 && Background.PositionComponent.x1 < 0) {
            BlockList.forEach(block => {
                block.PositionComponent.x1 += 10;
            })
            Caterpillars.forEach(caterpillar => {
                caterpillar.PositionComponent.x1 += 10;
            })
            hero.vx = 0
            Background.PositionComponent.x1 += 10
        } else {
            hero.vx = -10
            hero.FrameComponent.sprite = 95
        }
        hero.direction = "left";
    }
    if (activeKey['ArrowRight'] && hero.digin == false) {
        if (hero.PositionComponent.x1 + hero.PositionComponent.x2 >= width/2) {
            BlockList.forEach(block => {
                block.PositionComponent.x1 -= 10;
            })
            Caterpillars.forEach(caterpillar => {
                caterpillar.PositionComponent.x1 -= 10;
            })
            Background.PositionComponent.x1 -= 10
            hero.vx = 0
        } else {
            hero.vx = 10
            hero.FrameComponent.sprite = 95
        }
        hero.direction = "right";
    }
     // Прыжок
     if (activeKey['ArrowUp']) {
        if (hero.jump == false) {
            hero.vy = -20
            hero.FrameComponent.sprite = 130
            hero.jump = true
        } else if (hero.digin == true) {
            hero.PositionComponent.y1 = height - 300
            hero.digin = false
        }
    } 
    if (activeKey['ArrowDown']) {
        if (hero.digin == false) {
            hero.vy = 10
            hero.FrameComponent.sprite = 130
            hero.digin = true
        }
    } 
    // if (activeKey['ArrowLeft'] || activeKey['ArrowRight'] || activeKey['ArrowUp']) {
        if (hero.FrameComponent.speedAnim < 5) {
            hero.FrameComponent.speedAnim++;
        } else {
            hero.FrameComponent.speedAnim = 0;
            if (hero.FrameComponent.currentFrame == hero.FrameComponent.frames) {
                hero.FrameComponent.currentFrame = 1;
            } else {
                hero.FrameComponent.currentFrame++;
            }
        }
    // }
    hero.vx *= 0.9;
    hero.PositionComponent.x1 += hero.vx;
    hero.PositionComponent.y1 += hero.vy;
    // hero.vy += 1; // Гравитация

    BlockList.forEach(block => {
        let collides = collisions(hero, block);
        if (collides) {
            handleConllision(hero, block);
            Caterpillars.forEach(caterpillar => {
                if (hero.PositionComponent.x1 + hero.PositionComponent.x2 > caterpillar.PositionComponent.x1 && hero.PositionComponent.x1 < caterpillar.PositionComponent.x1 + caterpillar.PositionComponent.x2 && caterpillar.hp == 100) {
                    World.count++;
                    caterpillar.hp -= 100;
                    if (hero.hp <= 95) {
                        hero.hp += 5;
                    }
                }
            })
        }
    });
    if (hero.jump) {
        hero.vy += 1; // Гравитация
        hero.direction = "bottom";
    }
    if (hero.PositionComponent.x1 < 0) {
        hero.PositionComponent.x1 = 0
    }
    if (hero.PositionComponent.x1 > width - hero.PositionComponent.x2) {
        hero.PositionComponent.x1 = width - hero.PositionComponent.x2                     
    }
    if (hero.PositionComponent.y1 > height - 300 && hero.digin == false) {
        hero.PositionComponent.y1 = height - 300
        hero.jump = false
    }
}