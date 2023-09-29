import { PositionComponent } from "../components/PositionComponent";
import { AppearanceComponent } from "../components/AppearanceComponent";
import { FrameComponent } from "../components/FrameComponent";
import backgroundUrlImg from "/public/background/plx-1.png";
import backgroundUrlImg2 from "/public/background/plx-2.png";
import backgroundUrlImg3 from "/public/background/plx-3.png";
import backgroundUrlImg4 from "/public/background/plx-4.png";
import backgroundUrlImg5 from "/public/background/plx-5.png";

export const Background1 = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg),
    FrameComponent: FrameComponent(10, 10, 2),
    vx: 0,
}

export const Background2 = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg2),
    FrameComponent: FrameComponent(384, 216, 2),
    vx: 0.5,
}

export const Background3 = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg3),
    FrameComponent: FrameComponent(384, 216, 2),
    vx: 1,
}

export const Background4 = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg4),
    FrameComponent: FrameComponent(384, 216, 2),
    vx: 1.5,
}

export const Background5 = {
    PositionComponent: PositionComponent(0, 0, 5000, 0),
    AppearanceComponent: AppearanceComponent(backgroundUrlImg5),
    FrameComponent: FrameComponent(384, 216, 2),
    vx: 2,
}

export const Backgrounds = [Background1, Background2, Background3, Background4, Background5];