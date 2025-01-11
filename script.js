// Lista de códigos válidos
const codigosValidos = ["12345", "ABCDE", "A1B2C", "XYZ12", "P5Q6R"];

// Função para verificar o código de login
document.getElementById('entrar').addEventListener('click', () => {
    const codigoInserido = document.getElementById('codigo').value.trim();

    if (codigosValidos.includes(codigoInserido)) {
        // Redireciona para a página de busca
        window.location.href = 'busca.html';
    } else {
        // Exibe mensagem de erro se o código for inválido
        alert('Código inválido. Tente novamente.');
    }
});
// Dados das quadras inseridos diretamente no código

document.getElementById('entrar').addEventListener('click', verificarLogin);
