/*
    var = Serve Escopo Global - -Consigo acessar o code inteiro
    let = Serve Escopo Local -- Consigo acessar lugar específico
    const = Serve para declarar o Escopo Global, mas não muda o valor

funcção SomaDois(){

    let idade = 25

var nome = "Turma 49"

function hello() {
    alert(nome + " está aprendendo !")
}

}


*/

//Pegar o conteúdo que a pessoa digitou
let nome = window.document.getElementById('nome') // visão do nosso html em telatodo, documento html renderizado em tela
let email = document.getElementById('email')
let asssunto = document.getElementsByName('assunto')

function verificar() {
    if (nome.value == "" || email.value == "" || asssunto.value == "") {
        alert("Todos os campos são obrigatórios")
        return false
    }
    return true
}

function enviar() {
    if (verificar()) {
        alert("Olá " + nome.value + "! Email enviado com sucesso")
    }
}