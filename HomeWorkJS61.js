// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = ('hello world');
// let str2 = ('lorem ipsum21');
// let str3 = ('javascript is cool');
//
// function lngt(st){
//     console.log(st.length);
// }
// lngt(str1);
// lngt(str2);
// lngt(str3);
// або
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = ('hello world');
// let str2 = ('lorem ipsum');
// let str3 = ('javascript is cool');
// function tuc (st){
//     console.log(st.toUpperCase());}
//     tuc(str1);
//     tuc(str2);
//     tuc(str3);

//
// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = ('HELLO WORLD');
// let str2 = ('LOREM IPSUM');
// let str3 = ('JAVASCRIPT IS COOL');
// function tlc (st){
//     console.log(st.toLowerCase());}
//     tlc(str1);
//     tlc(str2);
//     tlc(str3);
// або
// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' .
// Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let s = str.trim();
// console.log(s);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// strSplit = str.split(' ')
// console.log(strSplit);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку
// перетворити всі об'єкти в масиві на стрінгові.

// const arr = [10,8,-7,55,987,-1011,0,1050,0];
// let str = arr.map(value => value.toString());
// console.log(str);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його
// від більшого до меньшого, або навпаки в залежності від значення аргументу
// direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// const sortNums = (direction,arr)=>{
//     if (direction==='ascending'){
//         arr.sort((a, b)=>a-b);}
//         else if (direction==='descending'){
//             arr.sort((a, b)=>b-a);}
// return arr;
// }
// console.log(sortNums('ascending',nums));
// console.log(sortNums('descending',nums));


// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.sort((
//     a,
//     b) => b.monthDuration-a.monthDuration));
// let filter= coursesAndDurationArray.filter(value => value.monthDuration > 5);
//
// console.log(filter);

const suits =[
    {cartSuit: "heart", color: "red"},
    {cartSuit: "diamond",color: "red"},
    {cartSuit: "spaid", color: "black"},
    {cartSuit: "clubs", color: "black"}];
const cartNames=[6,7,8,9,10,"jack","gueen","king","ace"];
const desck = []
for (const suit of suits) {
    for (const cartName of cartNames){
        const cart = {
            cartSuit: suit.cartSuit,
            value: cartName,
            color: suit.color
        }
        desck.push (cart);
    }
}
desck.push ({cartSuit: "Joker",value: null, color: "red"});
desck.push ({cartSuit: "Joker",value: null, color: "black"});
console.log(desck);
// описати колоду карт
// - знайти піковий туз

// let filter= desck.filter(value => value.cartSuit==="spaid"&&value.value==="ace");
// console.log(filter);

// - всі шістки

// let filter= desck.filter(value => value.value===6);
// console.log(filter);

// - всі червоні карти

// let filter= desck.filter(value => value.color==="red");
// console.log(filter);

// - всі буби

// let filter= desck.filter(value => value.cartSuit==="diamond");
// console.log(filter);

// - всі трефи від 9 та більше

// let filter= desck.filter(value => (value.cartSuit==="clubs"&&value.value>=9)
//     ||(value.cartSuit==="clubs"&&typeof value.value==="string"));
// console.log(filter);

//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по
// "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
let  x = desck.reduce ((accum,value)=>{
    if (value.cartSuit==="spaid"){accum.spades.push (value);}
    else if (value.cartSuit==="clubs"){accum.clubs.push (value);}
    else if (value.cartSuit==="diamond"){accum.diamonds.push (value);}
    else if (value.cartSuit==="heart"){accum.hearts.push (value);}
    return accum
},
{
    spades:[],
        diamonds: [],
    clubs: [],
    hearts:[]
});
console.log(x);