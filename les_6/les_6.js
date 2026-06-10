// є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let arrNum = [10,8,-7,55,987,-1011,0,1050,0];
//let arrString = arrNum.map(String);
let arrString = arrNum.map(a => String(a));
console.log(arrString);
console.log(arrNum);
//створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11,21,3];
let sortNums = nums.sort((a,b) => b-a);
console.log(sortNums);
console.log(nums);
//sortNums(nums,'ascending') // [3,11,21]
//sortNums(nums,'descending') // [21,11,3]


//==========================
//є масив
let coursesAndDurationArray = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let sortCourse = coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration);
console.log(sortCourse);
let sortNextCourse = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);
 let filterCourse = coursesAndDurationArray.filter(item => item.monthDuration > 5);
 console.log(filterCourse);

 // відсортувати його за спаданням за monthDuration
 //відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
 //за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let coursesAndDurationArrayy = [
   {title: 'JavaScript Complex', monthDuration: 5},
   {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 let addIndex = coursesAndDurationArrayy.map((item,index) => {
 return {...item, id: index +1};
 });

 console.log(addIndex);
 console.log(coursesAndDurationArrayy);