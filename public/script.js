document.getElementById('validate-button').addEventListener('click', function() {
    const cpf = document.getElementById('cpf').value;
    const messageElement = document.getElementById('cpf-validation-message');

    if (cpf.length === 11) {
        fetch(`/validate-cpf?cpf=${cpf}`)
            .then(response => response.json())
            .then(data => {
                if (data.valid) {
                    messageElement.textContent = data.message;
                    messageElement.className = 'valid';
                } else {
                    messageElement.textContent = data.message;
                    messageElement.className = 'invalid';
                }
            })
            .catch(error => console.error('Erro ao validar CPF:', error));
    } else {
        messageElement.textContent = 'CPF inválido!';
        messageElement.className = 'invalid';
    }
});
