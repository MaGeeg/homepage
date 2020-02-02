console.log('siema');
const name='Grego';
const age=31;
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
section.innerHTML=`<i>Nazywam</i> się ${name} i mam ${age} lat`; //mozemy wrzucić znazniki html !!!

//section.innerHTML='Pozdrawiam <strong> wszystkich </strong> czytających';

//section.innerHTML = 'What a mess in my DOM'; //JS nadpisuje mi tresc ktora jest w HTML