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
let email = document.querySelector('#email')
let asssunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido'
        txt.style.color = 'red'
    } else {
        txt.innerHTML = 'Nome Válido'
        txt.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }


}

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