'use strict'

let str = "Я начал изучение JS, так как JS, самый лучший язык для Web.";

let target = "JS";

let pos = 0;

while(true){//нахождение индекса слова в строке
    let foundPos = str.indexOf(target, pos);
    if( foundPos == -1 ){
        break;
    }
    console.log(`Наиден элемент, тут: ${foundPos}`);
    pos = foundPos + 1;
}
