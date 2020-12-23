'use strict'
//Пример метода SayHi()
let user = {
    name: "Denis",
    age: 19,
    sayHi() {//При создании метода, можно не объявлять function
        alert(`${this.name}: Hello!`);
    }
};

user.sayHi();
//

//Конструкторы, создание объектов через "new"
function Person(fio) {
    this.fio = fio;
}
console.log()
//
