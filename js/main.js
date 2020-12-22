//Работы с объектами
'use strict'

//Клонирование и объединение объектов

//Объединение
let block = {
    type: "square",
    size: 20,
};

let width = {
    width: 30,
};

let height = {
    height: 30,
};

Object.assign(block, width, height);

console.log(block);
//

//Клонирование

let user = {
    name: "Denis",
    age: 19,
}

let cloneUser = Object.assign({}, user);

console.log(cloneUser);
//

//Вложенное копирование
let figure = {
    name: "triangle",
    size: {
        a: 10,
        b: 8,
        c: 12,
    }
};

let cloneBlock = Object.assign({}, figure);

figure.size.a++;

console.log(cloneBlock.size.a);
//