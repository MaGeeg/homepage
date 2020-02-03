console.log('siema');
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
}console.log(oldIndicator);

const amIOld = (age > 70) ? 'yes':'no';
console.log(amIOld);