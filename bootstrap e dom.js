
function processarFormulario() {
    
    const inputNome = document.getElementById('nome');
    const elementoResposta = document.getElementById('resposta');
    
    const nomeDigitado = inputNome.value.trim();

    if (nomeDigitado) {
        
        const mensagem = `Olá, ${nomeDigitado}! Seu nome foi capturado e exibido com Bootstrap via onclick.`;
        
        elementoResposta.textContent = mensagem;

        elementoResposta.classList.remove('d-none', 'alert-danger');
        elementoResposta.classList.add('alert-success');

    } else {
        
        elementoResposta.textContent = 'Por favor, digite seu nome para continuar.';
        
        elementoResposta.classList.remove('d-none', 'alert-success');
        elementoResposta.classList.add('alert-danger');
    }
}
