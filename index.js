var scanf = require('scanf');

console.log('Mi lista de numeros');
console.log('\n');
console.log('Acontinuacion digite mumeros y al terminar escriba "cancelar" para ver en consola lo que escribio.');1
console.log('\n');

var listadoDeNumeros = [];
var cancelar 

do {
    var numeros = scanf("%d");
    if (isNaN(numeros)) {
        console.log("ERROR... Esto no es un numero...!")
        
    } else{
        listadoDeNumeros.push(numeros); 
        cancelar =scanf("%S").toLocaleLowerCase();
    }


} while (cancelar !== "cancelar");

listadoDeNumeros.pop();
listadoDeNumeros.forEach( numeros =>{
    console.log(`${numeros}`)
});