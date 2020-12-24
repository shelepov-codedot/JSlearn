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
    pos = foundPos + 1;//Начало со следующего индекса
}

//Проверка на то, есть ли подстрака в строке

let str2 = "Жизнь программиста"
console.log(str2.includes( "Жизнь" ));//есть второй необязательный аргумент, который говорит, с какой позиции начинать поиск
console.log(str2.includes( "жизнь" ));
console.log(str2.startsWith( "Жи" ));//начало строки
console.log(str2.endsWith( "ста" ));//конец строки
 