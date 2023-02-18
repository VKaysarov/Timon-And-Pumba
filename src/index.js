import { PositionComponent } from "./components/PositionComponent";
import { AppearanceComponent } from "./components/AppearanceComponent";
import { InitialSystem } from "./systems/InitialSystem";
import PumbaUrlImg from "/Media/sprites/PumbaTLK.png";
import hyenasUrlImg from "/Media/sprites/Hyenas.png";
import { AnimationSystem } from "./systems/AnimationSystem";
import { generateBlocks, generateCaterpillars } from "./systems/InitialSystem";

InitialSystem();

const elementTimon = document.getElementById('Timon');
const elementPumba = document.getElementById('Pumba');
const elementGameover = document.getElementById('gameover');
const name = document.getElementById('name');
const buttonStart = document.getElementById('start');
const bootstrap = document.getElementById('bootstrap');
const debug = true;
let gameover = false;
let activeKey = [];

addEventListener('resize', function() {
    canvas.width = window.innerWidth - 5;  
    canvas.height = window.innerHeight - 5;
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
    AnimationSystem(activeKey);
})

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
