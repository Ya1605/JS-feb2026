//ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
const plosha = (a, b) => {
    return a * b;

}

console.log(plosha(2, 10));


//- створити функцію яка обчислює та повертає площу кола з радіусом r
const coRadius = (radius) => Math.PI * radius * radius;

console.log(coRadius(10));

//- створити функцію яка обчислює та повертає площу циліндру висотою h,
//  та радіутом r
const plCel = (h, r) => Math.PI * Math.pow(r, 2) * Math.PI * r * h;
console.log(plCel(2, 10));

//- створити функцію яка приймає масив та виводить кожен його елемент
const firstAr = (array) => array;
console.log(firstAr([10, 20, 30, 40, 50]));

//- створити функцію яка створює параграф з текстом.
//  Текст задати через аргумент

const textParag = (text) => `<p>${text}</p>`;
document.write(textParag("Hello"));
//- створити функцію яка створює ul з трьома елементами li.
//  Текст li задати через аргумент всім однаковий
const textWithLi = (text) => `
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>
`;
document.write(textWithLi("how are you"));


const arr = Array.from({ length: 4 }, () => "hoeeee");
document.write(arr);

//- створити функцію яка створює ul
//  з трьома елементами li. Текст li задати через
// аргумент всім однаковий. Кількість li визначається
//  другим аргументом, який є числовим (тут використовувати цикл)

const arrPrymNum = (text, count) => {
    let item = "";

    for (let index = 0; index < count; index++) {
        item += `<li>${text}</li>`;
        
    }

    return `<ul>${item}</ul>`;
}

document.write(arrPrymNum("hohohihi", 5));
//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const arrMyValue = (array) => {

    for (const element of array) {
        
    }
    `<ul>
      <li>${element}</li>
    </ul>`

}

document.write(arrMyValue([10, true, "hello", 66]));
//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//- створити функцію яка повертає найменьше число з масиву
//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
//Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
//Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250


