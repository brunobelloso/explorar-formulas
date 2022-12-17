const inicio = document.getElementById("output").innerHTML;
let historial = [];
function generarNumero() {
  return Math.floor(Math.random() * formulas.length);
}
let numero = generarNumero();

function generarFormula() {
  if (document.getElementById("boton").onclick) {
    document.getElementById("output").innerHTML = formulas[numero];
    document.getElementById("numeroFormula").innerText = "#" + String(numero);
    historial.push(numero);
    numero = generarNumero();
  }
}
function limpiar() {
  document.getElementById("numeroFormula").innerText = null;
  document.getElementById("output").innerHTML = inicio;
  return;
}
function navegar() {
    let input = parseInt(document.getElementById("navegar").value);
    if (formulas[input] == undefined){
        alert("INTRODUZCA UN NUMERO DEL 0 AL "+ String(formulas.length-1))
    } else {
        document.getElementById("output").innerHTML = formulas[input];
        document.getElementById("numeroFormula").innerText = "#" + String(input);
    }
}