/*
* O objetivo é criar uma função, ou conjunto de funções, que consiga
* eliminar tabelas vazias do documento html.
* Entende-se por 'tabelas vazias' toda tabela cujas linhas estão vazias,
* ou seja, sem elementos table data (td).
*
* Proposta de Algoritmo
*
* 1. Recuperar uma lista de elementos <table> do documento
* 2. Varrer a lista de elementos <table>, onde em cada iteração:
* 2.1. Criar um contador da quantidade de linnhas (<tr>) da tabela
* 2.2. Recuperar uma lista de elementos <tr> da tabela
* 2.3. Varrer a lista de elementos <tr>, onde em cada iteração:
* 2.3.1. Possui children?
* 2.3.1.1. Sim => Recupera a lista e varre até ser falso
* 2.3.1.2. Não => textContent é vazio? (entende-se por vazio espaço em branco, quebras de linhas, tabulações e afins)
* 2.3.1.2.1. Sim => elimina o elemento
*/


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