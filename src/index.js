import { Timon } from "./entity/Timon";
import { Background } from "./entity/Background";
import { PositionComponent } from "./components/PositionComponent";
import { AppearanceComponent } from "./components/AppearanceComponent";
import { InitialSystem } from "./systems/InitialSystem";
import PumbaUrlImg from "/Media/sprites/PumbaTLK.png";
import hyenasUrlImg from "/Media/sprites/Hyenas.png";
import { MovementSystem } from "./systems/MovementSystem";
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
const { width, height, context } = World;

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
function render(hero) {
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

    render(Timon)
    requestAnimationFrame(main)
}
