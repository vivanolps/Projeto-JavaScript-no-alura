function tocaSom (seletorAudio) {
     document.querySelector(seletorAudio);

     if (elemento === null) {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado');
     }

     if (elemento != null) {

        if (elemento.localName === 'audio') {
            elemento.play();
        }
     }
}
    
const listaDeTeclas = document.querySelectorAll('.tecla');

// Para
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
  const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;  //template string

    tecla.onclick = function () {
        tocaSom(idAudio); // função anonima
    }

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');  
        }

    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
  
}