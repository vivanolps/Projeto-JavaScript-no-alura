/* Som Pom */
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}
    
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

// Enquanto
while (contador < 9) {
    listaDeTeclas[0].onclick = tocaSomPom;

    contador = contador + 1;

    console.log(contador);
}