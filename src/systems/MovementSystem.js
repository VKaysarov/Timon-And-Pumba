import { World } from "../entity/World";
import { generateBlocks, generateCaterpillars } from "../systems/InitialSystem";
import { collisions, handleConllision } from "../systems/CollisionSystem";

export const MovementSystem = (hero, activeKey) => {
    const { width, height } = World;
    const blocks = generateBlocks();
    const caterpillars = generateCaterpillars(blocks);

    if (activeKey['ArrowLeft'] && hero.digin == false) {
        if (hero.PositionComponent.x1 <= width/2 && background.PositionComponent.x1 < 0) {
            blocks.forEach(block => {
                block.PositionComponent.x1 += 10;
            })
            caterpillars.forEach(caterpillar => {
                caterpillar.PositionComponent.x1 += 10;
            })
            hero.vx = 0
            background.PositionComponent.x1 += 10
        } else {
            hero.vx = -10
            hero.sprite = 95
        }
        hero.direction = "left";
    }
    if (activeKey['ArrowRight'] && hero.digin == false) {
        if (hero.PositionComponent.x1 + hero.PositionComponent.x2 >= width/2) {
            blocks.forEach(block => {
                block.PositionComponent.x1 -= 10;
            })
            caterpillars.forEach(caterpillar => {
                caterpillar.PositionComponent.x1 -= 10;
            })
            background.PositionComponent.x1 -= 10
            hero.vx = 0
        } else {
            hero.vx = 10
            hero.sprite = 95
        }
        hero.direction = "right";
    }
     // Прыжок
     if (activeKey['ArrowUp']) {
        if (hero.jump == false) {
            hero.vy = -20
            hero.sprite = 130
            hero.jump = true
        } else if (hero.digin == true) {
            hero.PositionComponent.y1 = height - 300
            hero.digin = false
        }
    } 
    if (activeKey['ArrowDown']) {
        if (hero.digin == false) {
            hero.vy = 10
            hero.sprite = 130
            hero.digin = true
        }
    } 
    if (activeKey['ArrowLeft'] || activeKey['ArrowRight'] || activeKey['ArrowUp']) {
        if (hero.speedAnim < 5) {
            hero.speedAnim++;
        } else {
            hero.speedAnim = 0;
            if (hero.currentFrame == hero.frames) {
                hero.currentFrame = 0;
            } else {
                hero.currentFrame++;
            }
        }
    }
    hero.vx *= 0.9;
    hero.PositionComponent.x1 += hero.vx;
    hero.PositionComponent.y1 += hero.vy;
    // hero.vy += 1; // Гравитация

    blocks.forEach(block => {
        let collides = collisions(hero, block);
        if (collides) {
            handleConllision(hero, block);
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