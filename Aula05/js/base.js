// Console

console.log('Hello Word');
console.log('Aula 05 de Front');

// Variaveis em JS nao tem Tipo - Tipagem Automatica
let usuario = 'Fabio';
let email = 'fabiosabariego@hotmail.com'
let logado = true;
let acesso = 4567;
let dataNascimento;

console.log(usuario, email, logado, acesso);

//typeof - Mostra o tipo que foi atribuido

console.log(usuario, typeof(usuario));
console.log(logado, typeof(logado));
console.log(dataNascimento, typeof(dataNascimento));

// Declarando Constantes
const DATA_NASCIMENTO = '16/02/1987';

console.log(DATA_NASCIMENTO, typeof(DATA_NASCIMENTO));

// Operador de Igualdade
let primeiroNumero = 100;
let segundoNumero = '100';

console.log(primeiroNumero == segundoNumero);
console.log(primeiroNumero === segundoNumero); // Compara Valor e Tipo
console.log(primeiroNumero !== segundoNumero); // Compara Valor e Tipo


// Template String ou Template Literal
// Inicia e termina com o sinal de crase ``
// Chamada de variaveis, funcoes, objetos, calculos - usando ${}

console.log(`Dados de Acesso:
Usuario: ${usuario}
e-mail: ${email}
Acesso: ${acesso}`);


// Trabalhando com Arrays
const pessoas = ['Eu', 1234, 'Teste'];
pessoas[3] = 'Fabio';
pessoas[4] = 'Mozao'
pessoas[5] = 345;
console.log(typeof(pessoas), pessoas);


//Inserir no Inicio do Array
pessoas.unshift('Eu Mesmo');
console.log(pessoas);

// Excluir o Primeiro Indice do Array
pessoas.shift();
console.log(pessoas);

// Inserir no Fim do array
pessoas.push('Eu Mesmo')
console.log(pessoas);

// Excluir o ultimo item
pessoas.pop();
console.log(pessoas);

// Excluir duas pessoas partindo do indice 3
pessoas.splice(3, 2);
console.log(pessoas);

// Incluir pessoas a partir do indice 2
pessoas.splice(2, 0, 'Fabio', 'Mozao', 5565);
console.log(pessoas);

//Escrevendo os dados do Array em forma de Tabelas
console.table(pessoas);

