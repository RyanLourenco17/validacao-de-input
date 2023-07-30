const btnSubmit = document.querySelector('button');

btnSubmit.addEventListener('click', () => {
  // Capturar os elementos dos campos de email, senha e confirmação de senha
  const inputEmail = document.getElementById('floatingEmail');
  const inputPassword = document.getElementById('floatingPassword');
  const inputConfirmPassword = document.getElementById('floatingConfirm_Password');

  // Função para verificar se todos os campos estão preenchidos
  function preenchaCampos() {
    // Verificar se algum campo está vazio
    if (inputEmail.value === '' || inputPassword.value === '' || inputConfirmPassword.value === '') {
      // Exibir um alerta informando que todos os campos devem ser preenchidos
      alert('Por favor! Preencha todos os campos');
      return false; // Retorna false caso algum campo esteja vazio
    }
    return true; // Retorna true caso todos os campos estejam preenchidos
  }

  // Função para validar o email fornecido
  function validarEmail() {
    const email = inputEmail.value;
    const divEmail = document.querySelector('.error');
    
    // Verificar se o email possui '@' e '.com'
    if (email.includes('@') && email.includes('.com')) {
      // Exibir um alerta de email válido
      alert('Email válido');
      
      // Remover a mensagem de erro anterior, caso exista
      const errorMessage = divEmail.querySelector('.error-message');
      if (errorMessage) {
        divEmail.removeChild(errorMessage);
      }
      
      // Remover classe de destaque dos estilos CSS, se houver
      inputEmail.classList.remove('active');
      return true; // Retorna true se o email for válido
    } else {
      // Adicionar classe de destaque dos estilos CSS para indicar erro
      inputEmail.classList.add('active');
      
      // Verificar se o elemento <p> de mensagem de erro já foi criado antes de adicioná-lo
      const errorMessage = divEmail.querySelector('.error-message');
      if (!errorMessage) {
        // Criar e adicionar mensagem de erro ao formulário
        const p = document.createElement('p');
        p.classList.add('error-message');
        p.innerHTML = 'Email inválido. Digite novamente';
        divEmail.appendChild(p);
      }
      return false; // Retorna false se o email for inválido
    }
  }

  // Função para verificar se as senhas coincidem
  function verificarSenhas() {
    const senha = inputPassword.value;
    const confirmacaoSenha = inputConfirmPassword.value;
    const divConfirmPassword = document.querySelector('.error-message-two');

    // Verificar se as senhas coincidem
    if (senha === confirmacaoSenha) {
      // Exibir um alerta informando que as senhas foram verificadas
      alert('Senhas verificadas!');
      
      // Remover a mensagem de erro anterior, caso exista
      const errorMessage = divConfirmPassword.querySelector('.error-message-two');
      if (errorMessage) {
        divConfirmPassword.removeChild(errorMessage);
      }
      
      // Remover classe de destaque dos estilos CSS, se houver
      inputConfirmPassword.classList.remove('active');
      return true; // Retorna true se as senhas forem iguais
    } else {
      // Adicionar classe de destaque dos estilos CSS para indicar erro
      inputConfirmPassword.classList.add('active');
      
      // Verificar se o elemento <p> de mensagem de erro já foi criado antes de adicioná-lo
      const errorMessage = divConfirmPassword.querySelector('.error-message-two');
      if (!errorMessage) {
        // Criar e adicionar mensagem de erro ao formulário
        const p2 = document.createElement('p');
        p2.classList.add('error-message-two');
        p2.innerHTML = 'As senhas não coincidem';
        divConfirmPassword.appendChild(p2);
      }
      return false; // Retorna false se as senhas não forem iguais
    }
  }

  // Fluxo de validação
  if (preenchaCampos()) {
    if (validarEmail()) {
      if (verificarSenhas()) {
        alert('Conta criada');
      }
    }
  }
});