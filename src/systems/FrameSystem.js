export const FrameSystem = (entity, shift = 1) => {
    if (entity.FrameComponent.speedAnim < 3) {
        entity.FrameComponent.speedAnim++;
    } else {
        entity.FrameComponent.speedAnim = 0;
        if (entity.FrameComponent.currentFrame == entity.FrameComponent.frames) {
            entity.FrameComponent.currentFrame = 1;
        } else {
            entity.FrameComponent.currentFrame += shift;
        }
    }
}