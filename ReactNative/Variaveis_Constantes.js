//var => escopo dentro da função

//let => escopo de bloco , ou seja, dentro das chaves

//const => valor constante, não pode ser alterado, utilizando normalmente em casos como: const URL , onde não se deseja que seja alterado

//hoisting => (só o var possui) da 'erros' pelo erro na organização do codigo, como chamada de declaração

function funcaoQualquer(){
 	console.log(name);
 	var name = "Rodrigo"
}
funcaoQualquer();

// vai apresentar o erro Undefined, pois o nome esta definido após a chamada

