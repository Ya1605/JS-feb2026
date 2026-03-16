//- Знайти та вивести довижину настипних стрінгових значень
//   'hello world', 'lorem ipsum', 'javascript is cool'
 
let strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (let index = 0; index < strings.length; index++) {
    document.write(strings[index].length);
    }


//- Перевести до великого регістру наступні стрінгові значення
//    'hello world', 'lorem ipsum', 'javascript is cool'
let str = 'hello world';
console.log(str.toUpperCase());

let str1 = "lorem ipsum";
console.log(str1.toUpperCase());

let str2 = "javascript is cool";
console.log(str2.toUpperCase());
//- Перевести до нижнього регістру настипні стрінгові значення
//    'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hello = "HELLO WORLD";
console.log(hello.toLowerCase());

let hello1 = "LOREM IPSUM";
console.log(hello1.toLowerCase());

let hello2 = "JAVASCRIPT IS COOL";
console.log(hello2.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str4 = ' dirty string   ';
let cleanStr = str4.trim();

console.log(cleanStr);
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
  //  let str = 'Ревуть воли як ясла повні';
    //let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
     let str5 = 'Ревуть воли як ясла повні';
let newStr5 = str5.split('');
console.log(newStr5);


//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map
//   перетворити всі об'єкти в масиві на стрінгові.

const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

const string = numbers.map(num => num.toString());
console.log(string);

const secNum = [10, 20, 30];
const secNum2 = secNum.push("gggg");
console.log(secNum);

//- створити функцію sortNums(direction), яка прймає масив чисел,
//  та сортує його від більшого до меньшого, або навпаки в 
// залежності від значення аргументу direction.
//let nums = [11,21,3];
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]


function sortNums(arr, direction) {
  if (direction === "aaa") {
    return arr.sort((a, b) => a - b);
  } else if (direction === "bbbb") {
    return arr.sort((a, b) => b - a);
  }

}

let nums = [11, 21, 3];
console.log(sortNums([...nums], "bbbb"));


const nums2 = (arr, direction) => arr.sort((a, b) => direction === "dddd" ? a - b : b - a);

let nums3 = [111, 211, 355];
console.log(nums2([...nums3], "ccc"));



//==========================
//- є масив
//let coursesAndDurationArray = [
  //  {title: 'JavaScript Complex', monthDuration: 5},
    //{title: 'Java Complex', monthDuration: 6},
    //{title: 'Python Complex', monthDuration: 6},
    //{title: 'QA Complex', monthDuration: 4},
    //{title: 'FullStack', monthDuration: 7},
   // {title: 'Frontend', monthDuration: 4}
//];
// -- відсортувати його за спаданням за monthDuration
 //-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 //-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
 //=========================
 let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

const result = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(result);

let mapCourse = coursesAndDurationArray.map(function (value, index) {
  return { ...value, id: index + 1 };
}) 
console.log(mapCourse);
console.log(coursesAndDurationArray);


//=========================

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
//{
  //  spades:[],
    //diamonds:[],
    //hearts:[],
    //clubs:[]
//}
//=========================
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//--написати пошук всіх об'єктів, в який в modules є sass
//--написати пошук всіх об'єктів, в який в modules є docker