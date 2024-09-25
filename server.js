const express = require('express');
const app = express();
const path = require('path');

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para validar o CPF
app.get('/validate-cpf', (req, res) => {
    const cpf = req.query.cpf;

    if (isValidCPF(cpf)) {
        res.json({ valid: true, message: "CPF válido!" });
    } else {
        res.json({ valid: false, message: "CPF inválido!" });
    }
});

// Função de validação de CPF
function isValidCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove caracteres não numéricos

    console.log(cpf.length)
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        return false; // Verifica se o CPF tem 11 dígitos e se todos os dígitos não são iguais
    }

    return true;
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
