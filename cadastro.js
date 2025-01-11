// Função para validar e enviar os dados do formulário para a API do EmailJS
document.getElementById('cadastrar').addEventListener('click', () => {
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value.trim();
    const confirmarSenha = document.getElementById('confirmarSenha').value.trim();
    const mensagemDiv = document.getElementById('mensagem');

    mensagemDiv.innerHTML = '';

    // Validações
    if (!nome || !email || !senha || !confirmarSenha) {
        mensagemDiv.innerHTML = '<p style="color: red;">Todos os campos são obrigatórios.</p>';
        return;
    }

    if (senha !== confirmarSenha) {
        mensagemDiv.innerHTML = '<p style="color: red;">As senhas não coincidem.</p>';
        return;
    }

    if (senha.length < 6) {
        mensagemDiv.innerHTML = '<p style="color: red;">A senha deve ter pelo menos 6 caracteres.</p>';
        return;
    }

    // Enviar os dados para a API do EmailJS
    emailjs.send("service_1kp5ipu", "template_d6m13qp", {
        nome: nome,
        email: email,
        senha: senha
    }, "8RtRUxawVq6HBXrIEd")
    .then(() => {
        mensagemDiv.innerHTML = '<p style="color: green;">Cadastro realizado com sucesso! Verifique seu e-mail.</p>';
        document.getElementById('cadastroForm').reset();
    })
    .catch((error) => {
        console.error('Erro ao enviar e-mail:', error);
        mensagemDiv.innerHTML = '<p style="color: red;">Ocorreu um erro ao realizar o cadastro. Tente novamente.</p>';
    });
});
