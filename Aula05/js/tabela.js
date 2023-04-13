// Pegando uma informacao por um id

const getID1 = document.getElementById('personagens');
console.log(getID1);

const getID2 = document.getElementById('rodape');
console.log(getID2);

const getID3 = document.querySelector('#personagens');
console.log(getID3);


// Pegando um elemento pela Class
const getClass1 = document.getElementsByClassName('nome');
console.log(getClass1);

console.log(getClass1[1].textContent);

// Alterando o valor apresentado na tela do navegador
getClass1[4].textContent = 'Eu Mesmo';

//Retorna apenas o primeiro que ele localiza -> querySelector
// Para pegar todos os elementos, vamos utilziar o querySelectorAll
const getClass2 = document.querySelectorAll('.nome');
console.log(getClass2);
console.log(getClass2[1].innerHTML);

//Pegar pela Tag
const getTag1 = document.getElementsByTagName('td');
console.log(getTag1);

const getTag2 = document.querySelectorAll('td');
console.log(getTag2);

