/**
 * Completa cada ejercicio. Solo necesitas una línea de código JavaScript para cada ejercicio.
 *
 *  * REsultado deseado: https://oscarm.tinytake.com/msc/ODgxNzI5N18yMjI0ODE2OQ
 *
 **/

/**
 * Cambia el título de la página a rojo usando un estilo en línea
 */
document.querySelector('h1').style.color = 'red';
/**
 * Cambia el tamaño del título de la página a 48px usando un estilo en línea
 */
document.querySelector('h1').style.fontSize = '48px';
/**
 * Muestra por console.log el texto de la caja 2
 */
console.log(document.getElementById("caja-2").textContent);
/**
 * Cambia el color del borde del párrafo p.intro a verde usando un estilo en línea
 */
document.querySelector('.intro').style.borderColor = 'green';
/**
 * Elimina la clase "estilo-3" de la última caja.
 * Ayuda: https://www.w3schools.com/howto/howto_js_remove_class.asp
 */

function myFunction() {
    var element = document.getElementById('ultimo');
    element.classList.remove("estilo-3");
}
myFunction();
/**
 * Añade la clase CSS "ocultar" al penúltimo párrafo. La última cita debería desaparecer. Compruebalo con el inspector de elementos. 
 * Ayuda: https://simpledev.io/lesson/add-class-js//
 */

function myFunction2() {
    var elements = document.querySelectorAll('.estilo-2');
    var element2 = elements[elements.length - 1];
    console.log(element2.textContent);
    element2.classList.add('ocultar');
}
myFunction2();
 //* BONUS: Haz el ejercicio sin modificar el ex1.html
 
 //*/
