window.addEventListener('load', () => {
    // Espera a página carregar completamente
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').style.opacity = 1;
    }, 3000); // Exibe a tela de carregamento por 3 segundos
});

// Função para abrir as abas
function openTab(evt, tabName) {
    let i, tabcontent, tabbuttons;
    
    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }

    // Remove a classe "active" de todos os botões
    tabbuttons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabbuttons.length; i++) {
        tabbuttons[i].classList.remove("active");
    }

    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabName).classList.add("active");

    // Adiciona a classe "active" ao botão da aba selecionada
    evt.currentTarget.classList.add("active");
}
