removeElementosVazios = function(elemento) {

    regex = /(\n|\t|\s)/g;

    if(elemento.hasChildNodes()) {
        console.log(elemento.children);
        Array.from(elemento.children).forEach((e) => {
            removeElementosVazios(e);
        })
    } else {
        if(elemento.textContent.trim().replaceAll(regex, '').length == 0) {
            console.log('======================');
            console.log('ELEMENTO PAI: ');
            console.log(elemento);
            console.log('======================');
            console.log('removendo o elemento ' + elemento + ': ' + elemento.textContent);
            elemento.parentNode.removeChild(elemento);
        }
    }
}