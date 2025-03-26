/**
 * Variables globales que SI podemos usar dentro de una función ;)
 */

let numeroClicsPacman = 0;

function clicPacman() {
  // incremento la variable global clicsPacman
  numeroClicsPacman++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-pacman").textContent = numeroClicsPacman;
}

let numeroClicsGosth = 0;

function clicGosth() {
  // incremento la variable global clicsPacman
  numeroClicsGosth++;

  // actualizo el text content del nodo adecuado
  document.querySelector("#clics-fantasma").textContent = numeroClicsGosth;
}