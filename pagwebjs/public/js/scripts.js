const botonesDiv=document.getElementById('botones')
const resultadoDiv=document.getElementById('resultado')

function sumar(){
    const num1 = parseInt(prompt("Introduce un numero entero"));
    if (num1 > 0) {
        const num2 = parseInt(prompt("Introduce otro número:"));
        resultadoDiv.innerHTML = `Suma: ${num1 + num2}`;
    }else {
        resultadoDiv.innerHTML = "Error.";
    }
}
function division(){
    const num1 = parseInt(prompt("Introduce un numero entero"));
    if (num1 > 0) {
        const num2 = parseInt(prompt("Introduce otro número:"));
        resultadoDiv.innerHTML = `División: ${num1 / num2}`;
    }else {
        resultadoDiv.innerHTML = "Error.";
    }
}
function letraRepetida()  {
    const num1 = parseInt(prompt("Introduce un numero entero"));
    if (num1 > 0) {
        const letra = prompt("Introduce una letra:");
        resultadoDiv.innerHTML = `Repeticion: ${letra.repeat(num1)}`;
    }else {
        resultadoDiv.innerHTML = "Error.";
    }
}
function rotulo(){
let texto= (prompt("Ingrese texto"));
let guiones= "-";
let veces= ((80 - texto.length)/2);
    resultadoDiv.innerHTML += guiones.repeat(veces) + texto  + guiones.repeat(veces);
}
