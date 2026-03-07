





// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// створити функцію яка повертає найменьше число з масиву
// створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//риклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//риклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
//   - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function plocha(a,b) {
    return a * b;
}
console.log(plocha(4, 10));

// створити функцію яка обчислює та повертає площу кола з радіусом r

   function ploshaCrug(r) {
    return Math.PI * r **2
}
console.log(ploshaCrug(4));

// створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function ploshaCilindra(r,h) {
    return 2 * Math.PI * r * h 
}

console.log(ploshaCilindra(56, 4));

// створити функцію яка приймає масив та виводить кожен його елемент
      
let coursesAndDurationArray = [
    1,2,3,4,5,6,7
];

function allArray(array) {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);
        
    }
}


allArray(coursesAndDurationArray);


// створити функцію яка створює параграф з текстом.
//  Текст задати через аргумент
function textPar(text) {
    document.write(`<p>${text}</p>`);
}

textPar('how are you');


// створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий

function createUl(textli) {
    document.write(`<ul>
        <li>${textli}</li>
        <li>${textli}</li>
        <li>${textli}</li>
        </ul>`)
}

createUl('how was your day');

 //створити функцію яка створює ul з трьома елементами li.
 // Текст li задати через аргумент всім однаковий.
 // Кількість li визначається другим аргументом,
//  який є числовим(тут використовувати цикл)
  
function createList(insidetext, count) {
    let firstUl = "<ul>";

    for (let index = 0; index < count; index++) {
        firstUl = firstUl + "<li>" + insidetext + "</li>";
        
    }

    firstUl = firstUl + "</ul>";
    return firstUl;

}
document.write(createList('you are my favourite', 4));

// створити функцію яка приймає масив
// примітивних елементів (числа,стрінги,булеві),
// та будує для них список

function createEl(array) {
    let html = "<ul>"
    for (const element of array) {
        
        html += `<li>${element}</li>`;
    }
  html +="</ul>"

}
const firstArray = [1, true, 'hello', 45];
const listHtml = createEl(firstArray);
document.write(listHtml);