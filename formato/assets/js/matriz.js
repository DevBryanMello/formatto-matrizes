// 1. Seleciona a imagem principal pelo ID
const imagemMatriz = document.getElementById('imagem-principal-matriz');

// 2. Seleciona todos os tópicos clicáveis pela classe
const topicosClicaveis = document.querySelectorAll('.topico-matriz');

// 3. Função para trocar a imagem
function trocarImagemMatriz(event) {
    // Pega o elemento clicado
    const topicoClicado = event.currentTarget;

    // Obtém o caminho da nova imagem do atributo data-imagem
    const novaImagemSrc = topicoClicado.getAttribute('data-imagem');

    if (novaImagemSrc && imagemMatriz) {
        // Remove a classe de animação para resetar a transição (se houver)
        imagemMatriz.classList.remove('fade-in');
        
        // Força um "reflow" para garantir que a animação seja reiniciada
        void imagemMatriz.offsetWidth;
        
        // Altera o SRC da imagem
        imagemMatriz.src = novaImagemSrc;
        
        // Adiciona a classe de animação (veja o CSS no passo 3)
        imagemMatriz.classList.add('fade-in');
        
        // Opcional: Adiciona classe 'ativo' para destacar o tópico selecionado
        destacarTopico(topicoClicado);
    }
}

// Opcional: Função para destacar o tópico ativo
function destacarTopico(topicoAtivo) {
    topicosClicaveis.forEach(topico => {
        topico.classList.remove('ativo'); // Remove de todos
    });
    topicoAtivo.classList.add('ativo'); // Adiciona apenas ao clicado
}


// 4. Adiciona o ouvinte de eventos (EventListener) a cada tópico
topicosClicaveis.forEach(topico => {
    topico.addEventListener('click', trocarImagemMatriz);
});