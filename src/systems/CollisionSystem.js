export function collisions(block1, block2) {
    const leftSideBlock1 = block1.PositionComponent.x1; 
    const rightSideBlock1 = block1.PositionComponent.x1 + block1.PositionComponent.x2;
    const leftSideBlock2 = block2.PositionComponent.x1;
    const rightSideBlock2 = block2.PositionComponent.x1 + block2.PositionComponent.x2;
    const topSideBlock1 = block1.PositionComponent.y1;
    const bottomSideBlock1 = block1.PositionComponent.y1 + block1.PositionComponent.y2;
    const topSideBlock2 = block2.PositionComponent.y1;
    const bottomSideBlock2 = block2.PositionComponent.y1 + block2.PositionComponent.y2;

    if (rightSideBlock1 >= leftSideBlock2 &&
        leftSideBlock1 <= rightSideBlock2 &&
        bottomSideBlock1 >= topSideBlock2 &&
        topSideBlock1 <= bottomSideBlock2) {
        return true;
    } else {
        return false;
    }
}

export function handleConllision(block1, block2) {
    if(block1.PositionComponent.y1 >= height - 300) {
        if(block1.PositionComponent.x1 + block1.PositionComponent.x2 >= block2.PositionComponent.x1 && block1.direction == "right"){
            block1.PositionComponent.x1 = block2.PositionComponent.x1 - block1.PositionComponent.x2 - 1;
            block1.vx = 0;
        }
        if(block1.PositionComponent.x1 < block2.PositionComponent.x1 + block2.PositionComponent.x2 && block1.direction == "left"){
            block1.PositionComponent.x1 = block2.PositionComponent.x1 + block2.PositionComponent.x2 + 1;
            block1.vx = 0;
        }
    }
    if(block1.PositionComponent.y1 + block1.PositionComponent.y2 >= block2.PositionComponent.y1 && block1.PositionComponent.y1 < block2.PositionComponent.y1){
        block1.PositionComponent.y1 = block2.PositionComponent.y1 - block1.PositionComponent.y2;
        block1.jump = false;
    }

    caterpillars.forEach(caterpillar=>{

        if (block1.PositionComponent.x1 + block1.PositionComponent.x2 > caterpillar.PositionComponent.x1 && block1.PositionComponent.x1 < caterpillar.PositionComponent.x1 + caterpillar.PositionComponent.x2 && caterpillar.hp == 100) {
            count++;
            caterpillar.hp -= 100;
            if (block1.hp <= 95) {
                block1.hp += 5;
            }
        }
    })
}