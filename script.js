let currentLanguage = 'pt-br';

function changeLanguage() {
    const language = document.getElementById('language-select').value;
    currentLanguage = language;

    if (language === 'pt-br') {
        document.getElementById('about-text').innerText = 'Sou um programador front-end apaixonado por criar interfaces web bonitas e funcionais. Tenho experiência com HTML, CSS, JavaScript, Python e outras tecnologias. Adoro trabalhar em projetos que desafiem minha criatividade e habilidades técnicas!';
    } else if (language === 'en') {
        document.getElementById('about-text').innerText = 'I am a front-end developer passionate about creating beautiful and functional web interfaces. I have experience with HTML, CSS, JavaScript, Python, and other technologies. I love working on projects that challenge my creativity and technical skills!';
    } else if (language === 'es') {
        document.getElementById('about-text').innerText = 'Soy un desarrollador front-end apasionado por crear interfaces web hermosas y funcionales. Tengo experiencia con HTML, CSS, JavaScript, Python y otras tecnologías. ¡Me encanta trabajar en proyectos que desafían mi creatividad y habilidades técnicas!';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-theme');
}
