window.addEventListener('load', () => {
    // Espera a página carregar completamente
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').style.opacity = 1;
    }, 3000); // Exibe a tela de carregamento por 3 segundos
});

// Função para trocar as abas
function openTab(evt, tabName) {
    // Ocultar todos os conteúdos das abas
    let i, tabcontent, tabbuttons;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remover a classe "active" de todos os botões
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Mostrar o conteúdo da aba clicada
    document.getElementById(tabName).classList.add("active");

    // Adicionar a classe "active" ao botão clicado
    evt.currentTarget.classList.add("active");
}
