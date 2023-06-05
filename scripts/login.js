// identificação dos elementos html que terão seus valores utilizados neste arquivo JS
const form = document.getElementById("form");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

// identificação dos elementos que serão manipulados para apresentar mensagem de erro
var err_mail = document.getElementById("info_email"); 
var err_senha = document.getElementById("info_senha"); 

// monitora o momento em que o submit é invocado no form
form.addEventListener("submit", (e) => {
    // impede que o formulário direcione para outra página devido ao submit
    e.preventDefault();
    // chama a função que vai verificar o login
    checkLogin();
});

function checkLogin() {

    // simulação de usuário e senha padrão para login
    const email_valida = 'batata@batata.com'; 
    const senha_valida = 'batata';

    // recebe os valores digitados nos campos email e senha
    const email_value = email.value;
    const senha_value = senha.value;

    // valida o e-mail
    if (email_value !== email_valida) {
        // altera a classe de etilização que mostra a mensagem de erro do e-mail
        err_mail.className = "mens error";
    // valida a senha
    } else if (senha_value !== senha_valida) {
        // altera a classe de etilização que mostra a mensagem de erro do e-mail
        err_mail.className = "mens";
        // altera a classe de etilização que mostra a mensagem de erro da senha
        err_senha.className = "mens error";
    } else {
    // inserindo e-mail e senha corretos o usuário é direcionado para a página de usuário logado
        window.location.href = './myAccount.html';
    }
}