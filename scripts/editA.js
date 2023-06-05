// Adiciona um listener de evento ao formulário quando for submetido
document.getElementById("myForm").addEventListener("submit", function(event) {
    // Valida os campos antes de enviar o formulário
    if (!validateForm()) {
      event.preventDefault(); // Impede o envio do formulário se a validação falhar
    }
  });
  
  function validateForm() {
    var isValid = true;
  
    // Remove as mensagens de erro existentes
    var errorElements = document.getElementsByClassName("error");
    for (var i = 0; i < errorElements.length; i++) {
      errorElements[i].style.display = "none";
    }
  
    // Valida o campo Nome
    var nome = document.getElementById("nome");
    if (nome.value === "") {
      displayError(nome, "Digite seu nome");
      isValid = false;
    }
  
    // Valida o campo Telefone
    var telefone = document.getElementById("telefone");
    if (telefone.value === "") {
      displayError(telefone, "Digite seu telefone");
      isValid = false;
    }
  
    // Valida o campo Email
    var email = document.getElementById("email");
    if (email.value === "") {
      displayError(email, "Digite seu email");
      isValid = false;
    } else if (!isValidEmail(email.value)) {
      displayError(email, "Digite um email válido");
      isValid = false;
    }
  
    // Valida o campo Usuário
    var usuario = document.getElementById("usuario");
    if (usuario.value === "") {
      displayError(usuario, "Digite seu usuário");
      isValid = false;
    }
  
    // Valida o campo Senha
    var senha = document.getElementById("senha");
    if (senha.value === "") {
      displayError(senha, "Digite sua senha");
      isValid = false;
    }
  
    return isValid;
  }
  
  function isValidEmail(email) {
    // Regex para validar o formato do email
    var emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }
  
  function displayError(element, errorMessage) {
    var errorElement = element.parentElement.querySelector(".error");
    if (errorElement) {
      errorElement.textContent = errorMessage;
      errorElement.style.display = "block";
    }
  }
  