/*
    Variavel: 
        Caixinha para guardar informações que serão utilizadas.

Palavrinhas mágicas para criar variáveis:

var / NÃO MAIS UTILIZADO HOJE EM DIA, MAS PODE ACHAR EM CÓDIGOS ANTIGOS
let -> Permite alterar o valor 
const -> constante, não pode mudar o valor dela 

*/

/* 
    Função: 
        Trecho de código que só é executado quando é chamado. Quando nós quisermos
    Palavrinha magica para criar Funções
        function
*/

/*
    Objetivo: quando clicar no botão, mostrar o formulario
    1 - qual botão clicar?
    2 - Qual Formulario?
    3 - Qual mascara?
    4 - o que é "Mostrar"?
        - trazer o formulario da esquerda para a direita
        - Centralizar o formulario na tela
        - Exibir a mascara
*/

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario");

function mostrarForm() {
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm() {
    formulario.style.left = "-300px";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}