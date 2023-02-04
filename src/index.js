import { Timon } from "./entity/Timon";
import { Background } from "./entity/Background";
import { PositionComponent } from "./components/PositionComponent";
import { AppearanceComponent } from "./components/AppearanceComponent";
import { InitialSystem } from "./systems/InitialSystem";
import PumbaUrlImg from "/Media/sprites/PumbaTLK.png";
import hyenasUrlImg from "/Media/sprites/Hyenas.png";
import { MovementSystem } from "./systems/MovementSystem";
import { RenderSystem } from "./systems/RenderSystem";
import { World } from "./entity/World";

const elementTimon = document.getElementById('Timon');
const elementPumba = document.getElementById('Pumba');
const elementPause = document.getElementById('pause');
const elementGameover = document.getElementById('gameover');
const name = document.getElementById('name');
const buttonStart = document.getElementById('start');
const bootstrap = document.getElementById('bootstrap');
const debug = true;
let pause = false;
let gameover = false;

InitialSystem();

let Pumba = {
    PositionComponent: PositionComponent(),
    AppearanceComponent: AppearanceComponent(PumbaUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
    digin: false
}
let Hyena = {
    PositionComponent: PositionComponent(),
    AppearanceComponent: AppearanceComponent(hyenasUrlImg, 9, 0, 0, 95),
    hp: 100,
    vx: 0,
    vy: 0,
    jump: false,
}

let count = 0;
let activeKey = [];
addEventListener('resize', function() {
    width = canvas.width = window.innerWidth - 5;  
    height = canvas.height = window.innerHeight - 5;
})
addEventListener('keydown', function(event) {
    activeKey[event.code] = true;
})
addEventListener('keyup', function(event) {
    activeKey[event.code] = false;
})
name.addEventListener('input', function() {
    if (name.value == '') {
        buttonStart.disabled = true;
    } else {
        buttonStart.disabled = false;
    }
})
buttonStart.addEventListener('click', function() {
    bootstrap.style.display = 'none';
    main();
})
let s = 0;	
let m = 0;
let timer = false;

// function chooseBlockPosition(){
// 	let x = randomInteger(0, );
// 	let allowed = true;
// 	if(blocks.length > 0){
// 		blocks.forEach(block => {
// 			if(block.PositionComponent.x + block.width < x && 
// 				block.PositionComponent.x > x + 100){
// 				allowed = false;
// 			}
// 		})
// 	}
// 	if(allowed){
// 		return x;
// 	}else{
// 		chooseBlockPosition();
// 	}
// }
activeKey['Escape'] = ''

let currentTime = Date.now();

function update(hero) {
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

function main() {
    if (pause == false && gameover == false) {
        update(Timon)
    } else if (gameover == true) {
        elementGameover.style.display = 'flex';
    } else {
        if (activeKey['Escape'] != '') {
            elementPause.style.display = 'none';
            pause = false;
            activeKey['Escape'] = '';
        }
    }

    RenderSystem(Timon)
    requestAnimationFrame(main)
}
