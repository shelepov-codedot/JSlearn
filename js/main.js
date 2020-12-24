'use strict'

let arr = ["HTML", "CSS", "JS", "PHP"];

console.log( arr.pop() );//удаляет элемент с конца и выводит его 
console.log( arr ); 

arr.push("MySQL");//добавление элемента в конец
console.log( arr );

arr.shift();//удаление элемента сначала
console.log( arr );

arr.unshift( "HTML5" );//добавление элемента в начало
console.log( arr );
 
//pop и push работают быстрее чем shift и unshift

//перебор массива
for ( let i = 0; i < arr.length; i++){
    console.log( "Элемент массива: " + arr[i])
}

for( let el of arr){
    console.log( "Элементы массива: " + arr );
}

//многомерные массивы 
let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log( matrix );

//удаление элемента из массива splice

let arrTest = ["Я", "изучаю", "JS", "пряма", "сейчас"];

arrTest.splice(0,3, "Давай", "Танцевать");//удаление и замена

console.log( arrTest );

//копирование массива и добавление в него элементов
let arr3 = ["Шо"];
console.log( arr3 );
console.log( arr3.concat(["Go", "Byxat"]));

//Цикл ForEach
let arr4 = [1,2,3,4,5].forEach(console.log);

//Поиск элемента с помощью метода find
let users = [
    { id: 1, name: "Даник"},
    { id: 2, name: "Ярик"},
    { id: 3, name: "Денис"}
]
let userResult = users.find(item => item.id == 3);
console.log( userResult.name );

//Фильтрация массива filtr

let user = users.filter(item => item.id < 3);
console.log ( user.length );

//Преобразование методом map
let lengths = ["Bilbo", "Gandalf", "Nazgul"];
console.log(lengths);
console.log(lengths.map(item => item.length)); // 5,7,6

//Сортировка массива sort
function numSort( a, b ){//функция для сортировки, без нее, сортировка работает, принимая элементы за строки
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}
let arrNum = [1,2,3,11,10];
console.log( arrNum );

arrNum.sort(numSort);

console.log( arrNum );
//Сокращеный варинт
console.log( arrNum.sort((a, b) => a -b));

//split и join
let names = 'Вася, Петя, Маша';

let arrrs = names.split(', ');

for (let name of arrrs) {
  console.log( `Сообщение получат: ${name}.` ); // Сообщение получат: Вася (и другие имена)
}