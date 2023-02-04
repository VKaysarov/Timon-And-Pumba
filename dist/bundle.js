/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/AppearanceComponent.js":
/*!***********************************************!*\
  !*** ./src/components/AppearanceComponent.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AppearanceComponent\": () => (/* binding */ AppearanceComponent)\n/* harmony export */ });\nconst AppearanceComponent = (\n    imgSrc = \"\",\n    frames = 0,\n    currentFrame = 0,\n    speedAnim = 0,\n    sprite = 0,\n) => {\n    const img = new Image();\n\n    img.src = imgSrc;\n\n    return {\n        img,\n        frames,\n        currentFrame,\n        speedAnim,\n        sprite,\n    }\n}\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./src/components/AppearanceComponent.js?");

/***/ }),

/***/ "./src/components/PositionComponent.js":
/*!*********************************************!*\
  !*** ./src/components/PositionComponent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PositionComponent\": () => (/* binding */ PositionComponent)\n/* harmony export */ });\nconst PositionComponent = (x1 = 0, y1 = 0, x2 = 199, y2= 100) => ({\n    x1,\n    y1,\n    x2,\n    y2,\n})\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./src/components/PositionComponent.js?");

/***/ }),

/***/ "./src/entity/Timon.js":
/*!*****************************!*\
  !*** ./src/entity/Timon.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Timon\": () => (/* binding */ Timon)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PositionComponent */ \"./src/components/PositionComponent.js\");\n/* harmony import */ var _components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/AppearanceComponent */ \"./src/components/AppearanceComponent.js\");\n\n\n\n\nconst Timon = {\n    PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(0, _helpers__WEBPACK_IMPORTED_MODULE_0__.height - 300, 80, 100),\n    AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)('Media/sprites/TimonTLK.png', 9, 0, 0, 95),\n    hp: 100,\n    vx: 0,\n    vy: 0,\n    jump: false,\n    digin: false,\n    direction: 0,\n}\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./src/entity/Timon.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"height\": () => (/* binding */ height)\n/* harmony export */ });\nconst canvas = document.getElementById('canvas');\nconst context = canvas.getContext('2d');\n\nlet height = canvas.height = window.innerHeight - 5;\n\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./src/helpers/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _entity_Timon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity/Timon */ \"./src/entity/Timon.js\");\n/* harmony import */ var _components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/PositionComponent */ \"./src/components/PositionComponent.js\");\n/* harmony import */ var _components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppearanceComponent */ \"./src/components/AppearanceComponent.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _Media_1932758_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Media/Фоны/1932758.png */ \"./Media/Фоны/1932758.png\");\n\n\n\n\n\n\nconst elementTimon = document.getElementById('Timon');\nconst elementPumba = document.getElementById('Pumba');\nconst elementPause = document.getElementById('pause');\nconst elementGameover = document.getElementById('gameover');\nconst name = document.getElementById('name');\nconst buttonStart = document.getElementById('start');\nconst bootstrap = document.getElementById('bootstrap');\nconst debug = true;\nlet width = canvas.width = window.innerWidth - 5;  \nlet pause = false;\nlet gameover = false;\n\nlet background = {\n    PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(0, 0, 5000, _helpers__WEBPACK_IMPORTED_MODULE_3__.height),\n    AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)(_Media_1932758_png__WEBPACK_IMPORTED_MODULE_4__),\n    vx: 0,\n};\nlet Pumba = {\n    PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(),\n    AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)('Media/sprites/PumbaTLK.png', 9, 0, 0, 95),\n    hp: 100,\n    vx: 0,\n    vy: 0,\n    jump: false,\n    digin: false\n}\nlet Hyena = {\n    PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(),\n    AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)('Media/sprites/Hyenas.png', 9, 0, 0, 95),\n    hp: 100,\n    vx: 0,\n    vy: 0,\n    jump: false,\n}\n\nlet randomPosition = []\nfor (var i = 100; i < 5000; i+=100) {\n    randomPosition.push(i);\n}\n\nlet blocks = []\nfor (let i = 0; i < 1; i++) {\n    let block = {\n        AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)('Media/Гусеницы/land-vector-1.png'),\n        PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(0, _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300),\n        vx: 0,\n    }\n    let x = randomInteger(0, 4)\n    if (i > 0) {\n        while (blocks[i - 1].PositionComponent.x1 == randomPosition[x]) {\n            x = randomInteger(0, 4)\n        }\n    }\n    block.PositionComponent.x1 = randomPosition[x]\n    blocks.push(block);\n}\n\nlet caterpillars = []\nfor (let i = 0; i < 1; i++) {\n    let caterpillar = {\n        AppearanceComponent: (0,_components_AppearanceComponent__WEBPACK_IMPORTED_MODULE_2__.AppearanceComponent)('Media/Гусеницы/caterpillar003.png'),\n        PositionComponent: (0,_components_PositionComponent__WEBPACK_IMPORTED_MODULE_1__.PositionComponent)(blocks[i].PositionComponent.x1, _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300 - blocks[i].PositionComponent.y2, 100, 50),\n        hp: 100\n    }\n    caterpillars.push(caterpillar);\n}\nlet count = 0;\nlet activeKey = [];\naddEventListener('resize', function() {\n    width = canvas.width = window.innerWidth - 5;  \n    _helpers__WEBPACK_IMPORTED_MODULE_3__.height = canvas.height = window.innerHeight - 5;\n})\naddEventListener('keydown', function(event) {\n    activeKey[event.code] = true;\n})\naddEventListener('keyup', function(event) {\n    activeKey[event.code] = false;\n})\nname.addEventListener('input', function() {\n    if (name.value == '') {\n        buttonStart.disabled = true;\n    } else {\n        buttonStart.disabled = false;\n    }\n})\nbuttonStart.addEventListener('click', function() {\n    bootstrap.style.display = 'none';\n    main();\n})\nlet s = 0;\t\nlet m = 0;\nlet timer = false;\n\nfunction randomInteger(min, max) {\n  let rand = min + Math.random() * (max + 1 - min) ;\n  return Math.floor(rand);\n}\n// function chooseBlockPosition(){\n// \tlet x = randomInteger(0, );\n// \tlet allowed = true;\n// \tif(blocks.length > 0){\n// \t\tblocks.forEach(block => {\n// \t\t\tif(block.PositionComponent.x + block.width < x && \n// \t\t\t\tblock.PositionComponent.x > x + 100){\n// \t\t\t\tallowed = false;\n// \t\t\t}\n// \t\t})\n// \t}\n// \tif(allowed){\n// \t\treturn x;\n// \t}else{\n// \t\tchooseBlockPosition();\n// \t}\n// }\nactiveKey['Escape'] = ''\n\nlet currentTime = Date.now();\n\nfunction collisions(block1, block2) {\n    const leftSideBlock1 = block1.PositionComponent.x1; \n    const rightSideBlock1 = block1.PositionComponent.x1 + block1.PositionComponent.x2;\n    const leftSideBlock2 = block2.PositionComponent.x1;\n    const rightSideBlock2 = block2.PositionComponent.x1 + block2.PositionComponent.x2;\n    const topSideBlock1 = block1.PositionComponent.y1;\n    const bottomSideBlock1 = block1.PositionComponent.y1 + block1.PositionComponent.y2;\n    const topSideBlock2 = block2.PositionComponent.y1;\n    const bottomSideBlock2 = block2.PositionComponent.y1 + block2.PositionComponent.y2;\n\n    if(rightSideBlock1 >= leftSideBlock2 &&\n        leftSideBlock1 <= rightSideBlock2 &&\n        bottomSideBlock1 >= topSideBlock2 &&\n        topSideBlock1 <= bottomSideBlock2){\n        return true;\n    } else {\n        return false;\n    }\n}\n\nfunction handleConllision(block1, block2) {\n    if(block1.PositionComponent.y1 >= _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300) {\n        if(block1.PositionComponent.x1 + block1.PositionComponent.x2 >= block2.PositionComponent.x1 && block1.direction == \"right\"){\n            block1.PositionComponent.x1 = block2.PositionComponent.x1 - block1.PositionComponent.x2 - 1;\n            block1.vx = 0;\n        }\n        if(block1.PositionComponent.x1 < block2.PositionComponent.x1 + block2.PositionComponent.x2 && block1.direction == \"left\"){\n            block1.PositionComponent.x1 = block2.PositionComponent.x1 + block2.PositionComponent.x2 + 1;\n            block1.vx = 0;\n        }\n    }\n    if(block1.PositionComponent.y1 + block1.PositionComponent.y2 >= block2.PositionComponent.y1 && block1.PositionComponent.y1 < block2.PositionComponent.y1){\n        block1.PositionComponent.y1 = block2.PositionComponent.y1 - block1.PositionComponent.y2;\n        block1.jump = false;\n    }\n\n    caterpillars.forEach(caterpillar=>{\n\n        if (block1.PositionComponent.x1 + block1.PositionComponent.x2 > caterpillar.PositionComponent.x1 && block1.PositionComponent.x1 < caterpillar.PositionComponent.x1 + caterpillar.PositionComponent.x2 && caterpillar.hp == 100) {\n            count++;\n            caterpillar.hp -= 100;\n            if (block1.hp <= 95) {\n                block1.hp += 5;\n            }\n        }\n    })\n}\n\nfunction update(hero) {\n    if(timer == false){\n        if(Date.now() - currentTime >= 1000){\n            currentTime = Date.now();\n            if (s < 59) {\n                    s++;\n                } else {\n                    s = 0;\n                    m++;\n                }\n                if (hero.hp > 1) {\n                    hero.hp--;\n                } else {\n                    gameover = true;\n                }\n        }\n    }\n        if (activeKey['ArrowLeft'] && hero.digin == false) {\n            if (hero.PositionComponent.x1 <= width/2 && background.PositionComponent.x1 < 0) {\n                blocks.forEach(block=>{\n                    block.PositionComponent.x1 += 10;\n                })\n                caterpillars.forEach(caterpillar=>{\n                    caterpillar.PositionComponent.x1 += 10;\n                })\n                hero.vx = 0\n                background.PositionComponent.x1 += 10\n            } else {\n                hero.vx = -10\n                hero.sprite = 95\n            }\n            hero.direction = \"left\";\n        }\n        if (activeKey['ArrowRight'] && hero.digin == false) {\n            if (hero.PositionComponent.x1 + hero.PositionComponent.x2 >= width/2) {\n                blocks.forEach(block=>{\n                    block.PositionComponent.x1 -= 10;\n                })\n                caterpillars.forEach(caterpillar=>{\n                    caterpillar.PositionComponent.x1 -= 10;\n                })\n                background.PositionComponent.x1 -= 10\n                hero.vx = 0\n            } else {\n                hero.vx = 10\n                hero.sprite = 95\n            }\n            hero.direction = \"right\";\n            \n        }\n\n// Прыжок\n    if (activeKey['ArrowUp']) {\n        if (hero.jump == false) {\n            hero.vy = -20\n            hero.sprite = 130\n            hero.jump = true\n        } else if (hero.digin == true) {\n            hero.PositionComponent.y1 = _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300\n            hero.digin = false\n        }\n    } \n    if (activeKey['ArrowDown']) {\n        if (hero.digin == false) {\n            hero.vy = 10\n            hero.sprite = 130\n            hero.digin = true\n        }\n    } \n    if (activeKey['ArrowLeft'] || activeKey['ArrowRight'] || activeKey['ArrowUp']) {\n        if (hero.speedAnim < 5) {\n            hero.speedAnim++;\n        } else {\n            hero.speedAnim = 0;\n            if (hero.currentFrame == hero.frames) {\n                hero.currentFrame = 0;\n            } else {\n                hero.currentFrame++;\n            }\n        }\n    }\n    hero.vx *= 0.9;\n    hero.PositionComponent.x1 += hero.vx;\n    hero.PositionComponent.y1 += hero.vy;\n    // hero.vy += 1; // Гравитация\n\n    blocks.forEach(block=>{\n        let collides = collisions(hero, block);\n        if(collides) {\n            handleConllision(hero, block);\n        }\n    });\n    if(hero.jump){\n        hero.vy += 1; // Гравитация\n        hero.direction = \"bottom\";\n    }\n    if (hero.PositionComponent.x1 < 0) {\n        hero.PositionComponent.x1 = 0\n    }\n    if (hero.PositionComponent.x1 > width - hero.PositionComponent.x2) {\n        hero.PositionComponent.x1 = width - hero.PositionComponent.x2                     \n    }\n    if (hero.PositionComponent.y1 > _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300 && hero.digin == false) {\n        hero.PositionComponent.y1 = _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 300\n        hero.jump = false\n    }\n    if (activeKey['Escape'] != '' && pause == false) {\n        elementPause.style.display = 'flex';\n        pause = true;\n        activeKey['Escape'] = '';\n    }\n}\nfunction render(hero) {\n    context.clearRect(0, 0, width, _helpers__WEBPACK_IMPORTED_MODULE_3__.height);\n    context.beginPath();\n        context.drawImage(background.AppearanceComponent.img, background.PositionComponent.x1, background.PositionComponent.y1, background.PositionComponent.x2, _helpers__WEBPACK_IMPORTED_MODULE_3__.height);\n    context.closePath();\n// Персонаж\n    context.beginPath();\n    \n        // context.drawImage(hero.AppearanceComponent.img, 31 * hero.currentFrame, hero.sprite, 25, 35, hero.PositionComponent.x, hero.PositionComponent.y, 50, 50)\n        // console.log(hero.currentFrame)\n        context.fillStyle = 'red';\n        context.fillRect(width - 310, 10, hero.hp * 3, 15);\n        if (hero.PositionComponent.y1 < _helpers__WEBPACK_IMPORTED_MODULE_3__.height - 100) {\n            context.fillRect(hero.PositionComponent.x1, hero.PositionComponent.y1, hero.PositionComponent.x2, hero.PositionComponent.y2);\n        }\n    context.closePath();\n// Возвышенность\n    context.beginPath();\n        blocks.forEach(function(block) {\n            if(debug) {\n                context.strokeStyle=\"red\";\n                context.rect(block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2);\n                context.stroke();\n            }\n            context.fillStyle = 'black';\n            context.fillRect(block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2)\n            context.drawImage(block.AppearanceComponent.img, block.PositionComponent.x1, block.PositionComponent.y1, block.PositionComponent.x2, block.PositionComponent.y2);\n            \n        })\n    context.closePath();\n// Гусеница\n    context.beginPath();\n        caterpillars.forEach(function(caterpillar) {\n            if (caterpillar.hp == 100) {\n                context.drawImage(caterpillar.AppearanceComponent.img, caterpillar.PositionComponent.x1, caterpillar.PositionComponent.y1, caterpillar.PositionComponent.x2, caterpillar.PositionComponent.y2);\n            }\n        })\n    context.closePath();\n    context.beginPath();\n        context.fillStyle = 'black';\n        context.font = '22px Verdana';\n        context.fillText('Счет: ' + count, 10, 30);\n        context.fillText('Время: ' + m + ':' + s, 10, 50);\n    context.closePath();\n// Гиена\n    // context.beginPath();\n    // \tblocks.forEach(function(block) {\n    // \t\tcontext.fillStyle = 'yellow';\n    // \t\tcontext.fillRect(Hyena.PositionComponent.x, Hyena.PositionComponent.y, Hyena.width, Hyena.height)\n    // \t})\n    // context.closePath();\n    \n}\nfunction main() {\n    if (pause == false && gameover == false) {\n        update(_entity_Timon__WEBPACK_IMPORTED_MODULE_0__.Timon)\n    } else if (gameover == true) {\n        elementGameover.style.display = 'flex';\n    } else {\n        if (activeKey['Escape'] != '') {\n            elementPause.style.display = 'none';\n            pause = false;\n            activeKey['Escape'] = '';\n        }\n    }\n\n    render(_entity_Timon__WEBPACK_IMPORTED_MODULE_0__.Timon)\n    requestAnimationFrame(main)\n}\n\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./src/index.js?");

/***/ }),

/***/ "./Media/Фоны/1932758.png":
/*!********************************!*\
  !*** ./Media/Фоны/1932758.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"Media/Фоны/1932758.png\";\n\n//# sourceURL=webpack://timon-and-pumba-worldskills-/./Media/%D0%A4%D0%BE%D0%BD%D1%8B/1932758.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;