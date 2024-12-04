window.addEventListener('load', () => {
    // Espera a página carregar completamente
    setTimeout(() => {
        document.querySelector('.loading-screen').style.display = 'none';
        document.querySelector('.main-content').style.opacity = 1;
    }, 3000); // Exibe a tela de carregamento por 3 segundos
});
