//Задание Влада
//Загрузить информацию через fetch.then (async/await), XMLHTR()

const url = 'https://swapi.dev/api/people/';

const fetchThen = (url) => fetch(url).then(response => response.json());

const show = (data) => console.log(data);

fetchThen(url).then(data => show(data));

(async() => show(await fetchThen(url)))();

//async/await

async(fetchThenAsync = (url) => await fetch(url).then(response => await response.json()));



/* const p2 = new Promise(async function(resolve) {
    const response = await fetch(url)
    const data = await response.json()
    resolve(data)
})

function showAsyncFetch() {
    console.log('Async заграузка данных: ')
    p.then(data => {
        console.log(data)
    })
}
 */
console.log(+false)






/* async function fetchToDoAsync() {
    console.log('Вроде как должно работать...');
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log('Данные peopleAsync: ', data);
    } catch (e) {
        console.error(e);
    }
}

fetchToDoAsync() */