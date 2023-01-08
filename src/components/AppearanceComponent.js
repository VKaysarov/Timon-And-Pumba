const AppearanceComponent = (
    imgSrc = "",
    frames = 0,
    currentFrame = 0,
    speedAnim = 0,
    sprite = 0,
) => {
    const img = new Image();

    img.src = imgSrc;

    return {
        img,
        frames,
        currentFrame,
        speedAnim,
        sprite,
    }
}