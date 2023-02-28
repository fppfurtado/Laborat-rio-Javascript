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


function removerTabelasVazias(elemento = document) {
    
    tabelas = elemento.querySelectorAll('table');

    tabelas.forEach((tabela) => {
        
        removerLinhasVazias(tabela);

        if(tabela.querySelectorAll('tr').length == 0) {
            tabela.parentNode.removeChild(tabela);
        }

    });

    alert('Remoção Concluída!');

} 

function removerLinhasVazias(tabela) {

    linhas = tabela.querySelectorAll('tr');
    contador_linhas = linhas.length;

    linhas.forEach((linha) => {

        if (naoPossuiCelula(linha) || possuiCelulaUnicaSemFilhosVazia(linha) || possuiCelulaUnicaBR(linha)) {
            linha.parentNode.removeChild(linha);
        }

    })

}

function naoPossuiCelula(linha) {
    return linha.children.length == 0;
}

function possuiCelulaUnicaSemFilhosVazia(linha) {
    return linha.children.length == 1 && linha.children.item('td').children.length == 0 && arrumarTextoVazio(linha.children.item('td').textContent).length == 0;
}

function possuiCelulaUnicaBR(linha) {
    if (linha.children.length == 1) {

        filhosCelula = linha.children.item('td').children;
        qtdBRs = 0;

        Array.from(filhosCelula).forEach((e) => {

            if (e.nodeName != 'BR') {
                return;
            } else {
                qtdBRs++;
            }

        })

        return qtdBRs > 0;

    }
}

function arrumarTextoVazio(texto) {

    regex = /^(\n|\t|\s)*$/g;

    return texto.trim().replaceAll(regex, '');

}