import "/public/style/index.scss"
import { Timon } from "./entity/Timon";
import { Pumba } from "./entity/Pumba";
import { InitialSystem } from "./systems/InitialSystem";
import { AnimationSystem } from "./systems/AnimationSystem";

InitialSystem();

const elementTimon = document.getElementById('Timon');
const elementPumba = document.getElementById('Pumba');
const name = document.getElementById('name');
const buttonStart = document.getElementById('start');
const bootstrap = document.getElementById('bootstrap');
const debug = true;
let activeKey = [];

addEventListener('resize', function() {
    canvas.width = window.innerWidth;  
    canvas.height = window.innerHeight;
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


const selectHero = () => {
    const isTimon = elementTimon.checked ? Timon : null;
    const isPumba = elementPumba.checked ? Pumba : null;

    return isTimon || isPumba;
}

elementTimon.addEventListener('change', (event) => {
    event.target.parentNode.classList.remove('radio-group--inactive')
    event.target.parentNode.classList.add('radio-group--active')
    elementPumba.parentNode.classList.remove('radio-group--active')
    elementPumba.parentNode.classList.add('radio-group--inactive')
})

elementPumba.addEventListener('change', (event) => {
    event.target.parentNode.classList.remove('radio-group--inactive')
    event.target.parentNode.classList.add('radio-group--active')
    elementTimon.parentNode.classList.remove('radio-group--active')
    elementTimon.parentNode.classList.add('radio-group--inactive')
})

buttonStart.addEventListener('click', () => {
    const hero = selectHero();

    bootstrap.style.display = 'none';
    AnimationSystem(activeKey, hero);
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
