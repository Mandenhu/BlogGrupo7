// NAMED FUNCTION
function soma1(x,y){
    return x+y;
}

console.log('Função Nomeada: ',soma1(1,2));

// ANONYMOUS FUNCTION
var soma2 = function(x,y){
    return x+y;
}

console.log('Função Anonima: ',soma2(3,5));

/* ES6 */
// ARROW FUNCTION - sao declaradas como a anonymous, ou seja, são atribuidas a uma variavel

const soma3 = (x,y) => {
    return x+y;
}

const soma4 = (x,y) => x + y;

console.log('Função Arrow: ', soma4(3,4));

const array = [1,2,3,4,5].map(x => x*10);

console.log('Função Arrow com Map: ', array);
