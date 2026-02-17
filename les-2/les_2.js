//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

console.log(users);
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {title:'book', pageCount:11, genre: 'rrr'};
let book1 = {title:'book', pageCount:11, genre: 'rrr'};
let book2 = {title:'book', pageCount:11, genre: 'rrr'};
//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book11 = {title:'book', pageCount:11, genre: 'rrr'};
let book1133 = {title:'book', pageCount:11, genre: 'rrr'};
let book21 = {title:'book', pageCount:11, genre: 'rrr'};
//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users1 = [
    {name: 'vasya', age: 31, password: 111},
    {name: 'petya', age: 30, password: 3333},
    {name: 'kolya', age: 29, password: 111},
    {name: 'olya', age: 28,password: 111},
    {name: 'max', age: 30, password: 222},
    {name: 'anya', age: 31, password: 2333},
    {name: 'oleg', age: 28, password: 555},
    {name: 'andrey', age: 29,password: 333},
    {name: 'masha', age: 30, password: 333},
    {name: 'olya', age: 31,password: 555},
    {name: 'max', age: 31, password: 99877}
];

console.log(users1[0].password);


//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let weather = [
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
{morning:10, midday:20, evening:30},
];

//Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення.
//Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x != 0){
 console.log('Вірно');
}else{
console.log('Невірно');
}

//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//(в першу, другу, третю или четверту частину години).
let time = 2;
if(time <= 0 || time <= 15)
{
console.log('first');}
else if
(time<= 16 || time <=30)
{
console.log('second')}
else if
(time <= 31 || time <= 45){
console.log('third')}
else if
(time <= 46 || time <=60){
console.log('fourth')}
else{
console.log('ERROR')
}


//- У змінній day дано якесь число від 1 до 31.
//Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let month = 2;
if(month >= 1 && month<= 10){
console.log('first part')
}else if
(month >=11 && month<=20 ){
console.log('second part')
}else if
(month >=21 && month<= 30){
console.log('third part')
}else{
console.log('ERROR')
}


//- Скласти розклад на тиждень за домопоги switch.
//Користувач вводить порядковий номер дня тижня і на екрані відображається
//інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

//- Користувач вводить або має два числа.
//Потрібно знайти та вивести максимальне число з тих двох .
//Також потрібно врахувати коли введені рівні числа.
//
//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).