// Obtém uma referência para o formulário
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', (event) => {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Remove a borda vermelha de todos os campos de entrada
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input) => {
    input.classList.remove('error');
  });

  // Realize as validações necessárias aqui
  let hasError = false;

  // Exemplo de validação de campo vazio
  const numeroInput = document.getElementById('numero');
  if (numeroInput.value.trim() === '') {
    numeroInput.classList.add('error');
    hasError = true;
  }

  // Exemplo de validação de comprimento mínimo
  const descricaoInput = document.getElementById('descricao');
  if (descricaoInput.value.trim().length < 5) {
    descricaoInput.classList.add('error');
    hasError = true;
  }

  // Mais validações...

  // Se houver erro, você pode exibir uma mensagem de erro ou tomar outra ação
  if (hasError) {
    console.log('Há erros no formulário. Verifique os campos destacados.');
    return;
  }

  // Se não houver erros, você pode prosseguir com o envio do formulário ou realizar outras ações
  console.log('Formulário válido. Enviando...');
  form.submit();
});
