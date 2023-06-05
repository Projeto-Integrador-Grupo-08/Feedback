// Obtém uma referência para o formulário
const form = document.querySelector('form');

// Adiciona um ouvinte de evento para o evento de envio do formulário
form.addEventListener('submit', function(event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Remove a borda vermelha de todos os campos de entrada
  const inputs = form.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('error');
  });

  // Realize as validações necessárias aqui
  let hasError = false;

  // Validação de campo vazio
  const nomeInput = document.querySelector('#nome');
  if (nomeInput.value.trim() === '') {
    nomeInput.classList.add('error');
    hasError = true;
  }

  // Validação de formato de telefone
  const telefoneInput = document.querySelector('#telefone');
  const telefoneRegex = /^\d{10}$/; // Exemplo de validação de 10 dígitos numéricos
  if (!telefoneRegex.test(telefoneInput.value)) {
    telefoneInput.classList.add('error');
    hasError = true;
  }

  // Validação de formato de data
  const dataNascimentoInput = document.querySelector('#dataNascimento');
  const dataNascimentoRegex = /^\d{4}-\d{2}-\d{2}$/; // Exemplo de validação de formato 'yyyy-mm-dd'
  if (!dataNascimentoRegex.test(dataNascimentoInput.value)) {
    dataNascimentoInput.classList.add('error');
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
