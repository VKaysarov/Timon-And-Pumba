import { World } from "../entity/World";
import { Timer } from "../entity/Timer";

const { count, width, height, context } = World;

export const RenderSystem = (entities) => {
    for (let entity of entities) {
        const { x1, y1, x2, y2 } = entity.PositionComponent;
        const { img } = entity.AppearanceComponent;

        context.fillText(`x1: ${x1}`, x1, y1);
        if (entity.hasOwnProperty("hp") && entity.hp <= 0) {
            return;
        }

        context.beginPath();
        if (entity.hasOwnProperty("FrameComponent")) {
            const { widthFrame, heightFrame, currentFrame, sprite } = entity.FrameComponent;
            context.drawImage(img, widthFrame * currentFrame, sprite, widthFrame, heightFrame, x1, y1, x2, y2);
        } else {
            context.drawImage(img, x1, y1, x2, y2);
        }
        context.closePath();
    }
// Персонаж
    // context.beginPath();
    //     if (hero.PositionComponent.y1 < height - 100) {
    //         context.fillRect(hero.PositionComponent.x1, hero.PositionComponent.y1, hero.PositionComponent.x2, hero.PositionComponent.y2);
    //     }
    // context.closePath();
    context.fillStyle = 'black';
    context.font = '22px Verdana';
    context.fillText('Счет: ' + World.count, 10, 30);
    context.fillText('Время: ' + Timer.m + ':' + Timer.s, 10, 50);
}