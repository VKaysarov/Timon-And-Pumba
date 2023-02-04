import { World } from "../entity/World";
import { Background } from "../entity/Background";

const { width, height, context } = World;

export const RenderSystem = (hero) => {
    context.clearRect(0, 0, width, height);
    context.beginPath();
        context.drawImage(Background.AppearanceComponent.img, Background.PositionComponent.x1, Background.PositionComponent.y1, Background.PositionComponent.x2, height);
    context.closePath();
// Персонаж
    context.beginPath();
    
        // context.drawImage(hero.AppearanceComponent.img, 31 * hero.currentFrame, hero.sprite, 25, 35, hero.PositionComponent.x, hero.PositionComponent.y, 50, 50)
        // console.log(hero.currentFrame)
        context.fillStyle = 'red';
        context.fillRect(width - 310, 10, hero.hp * 3, 15);
        if (hero.PositionComponent.y1 < height - 100) {
            context.fillRect(hero.PositionComponent.x1, hero.PositionComponent.y1, hero.PositionComponent.x2, hero.PositionComponent.y2);
        }
    context.closePath();
// Возвышенность
    context.beginPath();
        blocks.forEach(function(block) {
            if(debug) {
                context.strokeStyle="red";
                context.rect(block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2);
                context.stroke();
            }
            context.fillStyle = 'black';
            context.fillRect(block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2)
            context.drawImage(block.AppearanceComponent.img, block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2);
            
        })
    context.closePath();
// Гусеница
    context.beginPath();
        caterpillars.forEach(function(caterpillar) {
            if (caterpillar.hp == 100) {
                context.drawImage(caterpillar.AppearanceComponent.img, caterpillar.PositionComponent.x1, caterpillar.PositionComponent.y1, caterpillar.PositionComponent.x2, caterpillar.PositionComponent.y2);
            }
        })
    context.closePath();
    context.beginPath();
        context.fillStyle = 'black';
        context.font = '22px Verdana';
        context.fillText('Счет: ' + count, 10, 30);
        context.fillText('Время: ' + m + ':' + s, 10, 50);
    context.closePath();
// Гиена
    // context.beginPath();
    // 	blocks.forEach(function(block) {
    // 		context.fillStyle = 'yellow';
    // 		context.fillRect(Hyena.PositionComponent.x, Hyena.PositionComponent.y, Hyena.width, Hyena.height)
    // 	})
    // context.closePath();
}