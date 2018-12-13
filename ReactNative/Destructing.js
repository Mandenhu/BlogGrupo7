//ES5
var pet = {
    name: 'Doidinho',
    especie: 'gato',
    idade: 5
};

//Chamada em ES5
// var idade = pet.idade;
// console.log(idade);

//DESTRUCTING é uma maneira mais simples de tirar informação de um objeto por exemplo

// Chamada em ES6 com destructing

var {idade} = pet;
console.log(idade);

var {especie} = pet;
console.log(especie);

var {name} = pet;
console.log(name);

const {name, especit} = pet;
console.log([name, especie])