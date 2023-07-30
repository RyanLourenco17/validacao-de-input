# validacao-de-input
Este é um projeto simples de validação de formulário usando JavaScript, que verifica se todos os campos foram preenchidos corretamente.

## Como usar

Basta clonar o repositório e abrir o arquivo `index.html` em qualquer navegador moderno.

## Funcionamento

Quando o botão de envio do formulário é clicado, o código JavaScript executa as seguintes verificações:

1. Verifica se todos os campos estão preenchidos. Caso contrário, exibe um alerta solicitando que todos os campos sejam preenchidos.
2. Valida o formato do email fornecido. Se o email não contiver '@' e '.com', exibe um alerta informando que o email é inválido e destaca o campo de email com uma borda vermelha. Caso contrário, exibe um alerta informando que o email é válido e remove qualquer mensagem de erro anterior, além de remover a borda vermelha do campo de email, se aplicável.
3. Verifica se a senha e a confirmação de senha coincidem. Se as senhas coincidirem, exibe um alerta informando que as senhas foram verificadas e remove qualquer mensagem de erro anterior, além de remover a borda vermelha do campo de confirmação de senha, se aplicável. Caso contrário, exibe um alerta informando que as senhas não coincidem e destaca o campo de confirmação de senha com uma borda vermelha.

Se todas as verificações forem concluídas com sucesso (todos os campos preenchidos, email válido e senhas coincidindo), um último alerta informará que a conta foi criada.

## Nota

Este projeto foi desenvolvido apenas para fins educacionais e de demonstração, não deve ser utilizado em produção. A validação de formulários em aplicações reais requer medidas adicionais de segurança.


Criado por Ryan Campos
