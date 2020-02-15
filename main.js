/*console.log('siema');
const name = 'Grego';
const age = 78;
console.log(name);
console.log(age);
console.log(`Nazywam się ${name} i mam ${age} lat`);

const title = document.querySelector('.section__title');
console.log(title);

const paragraphs = document.querySelectorAll('p');
console.log(paragraphs); //tu wypisze all jako Note list
console.log(paragraphs[0]); // tu wypisze par. 1


const section = document.querySelector('.section__title--js');
console.log(section.innerHTML);
//section.innerHTML=`<i>Nazywam</i> się ${name} i mam ${age} lat`; //mozemy wrzucić znazniki html !!!

//section.innerHTML='Pozdrawiam <strong> wszystkich </strong> czytających';

//section.innerHTML = 'What a mess in my DOM'; //JS nadpisuje mi tresc ktora jest w HTML

if('javascript' != 'java') {
    console.log('to prawda')
}

if (age > 20) {
    console.log('masz więcej niż 20 lat');
} else {
    console.log('masz mniej niz 20 lat');
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
}else if ((age >=20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat, ale mniej niż 30');
} else {
    console.log('jesteś 31+');
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

let oldIndicator;

if (age > 70) {
    oldIndicator ='yes';
} else {
    oldIndicator = 'no';
}
console.log(oldIndicator);

const amIOld = (age > 70) ? 'yes':'no';
console.log(amIOld);

function calculate(x) {
    x = x + 3;
    console.log(`tradycyjnie $(x)`);
    return x * 7
}

calculate(1);

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

//funkcja strzałkowa

const calculateFat = (x) => {
    x = x + 3;
    console.log(`fat: $(x)`);
    return x * 7
}

console.log(calculateFat(2));

// funkcja arrow - prostszy zapis


const calculateFatNew = x => (x+3)*7;
console.log(calculateFatNew(2));

//zadanie domowe part. 5


function welcome(name, age){
    console.log(`Witaj ${name}, masz ${age} lat!`);
}
welcome('Maciej', 31);

/*Propozycje Korsi -  funkcja strzałkowa
const welcome = (name, age) => {
    console.log(`Witaj ${name}, masz ${age} lat!`)
}
welcome('maciek', 31);

const myName= 'Maciek';
const myAge= 31;
welcome(myName, myAge);
*/

/* --- wywołanie button ---*/
/*const button = document.querySelector('.header__button--js');
console.log(button)

function handleClick() {
    console.log('halo')
}

button.addEventListener('click', handleClick); */

/* --- wywołanie button za pomocą arrow function---*/
/*
const button = document.querySelector('.header__button--js');
console.log(button)

function handleClick() {
    console.log('halo')
}

button.addEventListener('click', (e) => {
    console.log(e);
    console.log('hello arrow');
} );
*/
/* --- zmieniamy tresc button --- */

const button = document.querySelector('.header__button--js');
console.log(button)

/* --- Hamburger ---*/

button.addEventListener('click', (e) => {
    const header = document.querySelector('.section__title--js');
    header.innerHTML = 'klik, klik';
    header.classList.toggle('section__title--red');
    
    if(header.classList.contains('section__title--red')) {
        console.log('jest klasa');
    }else {
        console.log('brak klasy');
    };
    /*alert ('hello'); */
});





const navigationHam = document.querySelector('.navigation__ham--js');

navigationHam.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visible');
    
});