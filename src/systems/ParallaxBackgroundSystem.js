import { World } from "../entity/World";

const { context, width, height } = World;

export const ParallaxBackgroundSystem = (entities, activeKey, hero) => {
  for (const entity of entities) {
    const { x1, y1, x2, y2 } = entity.PositionComponent;
    const image = entity.AppearanceComponent.img;
    const isEndMap = World.distanceTraveled < 0 || World.distanceTraveled > 3000;
    if (activeKey["ArrowRight"] && !isEndMap) {
      entity.PositionComponent.x1 -= entity.vx;
      // Если изображение выходит за пределы экрана, переместите его обратно в начальную позицию
      if (entity.PositionComponent.x1 < -width) {
        entity.PositionComponent.x1 = 0;
      }
    }
    
    if (activeKey["ArrowLeft"] && !isEndMap) {
      entity.PositionComponent.x1 += entity.vx;
      // Если изображение выходит за пределы экрана, переместите его обратно в начальную позицию
      if (entity.PositionComponent.x1 > width) {
        entity.PositionComponent.x1 = 0;
      }
    }
   
    // Рисуем изображение
    context.drawImage(image, x1, y1, x2, y2);
    context.drawImage(image, x1 - width, y1, x2, y2);
    context.drawImage(image, x1 + width, y1, x2, y2);
  }
}