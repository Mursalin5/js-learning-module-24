// 1. where to add
const placesList = document.getElementById('places-List');
console.log(placesList);


// what to do be added

const li = document.createElement('li');
li.innerText = 'mymensingh';

// add child

placesList.appendChild(li) ;


//-----------------------

const mainContainer = document.getElementById('main-container');


//------
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My food list';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'biyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'biyafsafi';
ul.appendChild(li2);

section.appendChild(ul);
mainContainer.appendChild(section)

// set innerHTML directly

const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1> My Dress section</h>
<ul>
<li>tsf</li>
<li>tsf</li>
<li>tsf</li>
</ul>
`
 mainContainer.appendChild(sectionDress)