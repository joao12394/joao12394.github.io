// Traduções para diferentes idiomas
const translations = {
    "pt-br": {
        "name": "Olá, eu sou Susta",
        "role": "Programador Front-End",
        "about-title": "Sobre Mim",
        "about-text": "Sou um programador front-end apaixonado por criar interfaces web bonitas e funcionais. Tenho experiência com HTML, CSS, JavaScript, Python e outras tecnologias. Adoro trabalhar em projetos que desafiem minha criatividade e habilidades técnicas!",
        "skills-title": "Habilidades",
        "contact-title": "Entre em Contato"
    },
    "en": {
        "name": "Hello, I am Susta",
        "role": "Front-End Developer",
        "about-title": "About Me",
        "about-text": "I am a passionate front-end developer focused on creating beautiful and functional web interfaces. I have experience with HTML, CSS, JavaScript, Python, and other technologies. I love working on projects that challenge my creativity and technical skills!",
        "skills-title": "Skills",
        "contact-title": "Contact Me"
    },
    "es": {
        "name": "Hola, soy Susta",
        "role": "Desarrollador Front-End",
        "about-title": "Sobre Mí",
        "about-text": "Soy un desarrollador front-end apasionado por crear interfaces web bonitas y funcionales. Tengo experiencia con HTML, CSS, JavaScript, Python y otras tecnologías. ¡Me encanta trabajar en proyectos que desafíen mi creatividad y habilidades técnicas!",
        "skills-title": "Habilidades",
        "contact-title": "Contáctame"
    },
    "fr": {
        "name": "Bonjour, je suis Susta",
        "role": "Développeur Front-End",
        "about-title": "À Propos De Moi",
        "about-text": "Je suis un développeur front-end passionné par la création d'interfaces web belles et fonctionnelles. J'ai de l'expérience avec HTML, CSS, JavaScript, Python et d'autres technologies. J'adore travailler sur des projets qui défient ma créativité et mes compétences techniques!",
        "skills-title": "Compétences",
        "contact-title": "Contactez Moi"
    },
    "de": {
        "name": "Hallo, ich bin Susta",
        "role": "Front-End Entwickler",
        "about-title": "Über Mich",
        "about-text": "Ich bin ein leidenschaftlicher Front-End-Entwickler, der sich auf die Erstellung schöner und funktionaler Web-Interfaces konzentriert. Ich habe Erfahrung mit HTML, CSS, JavaScript, Python und anderen Technologien. Ich liebe es, an Projekten zu arbeiten, die meine Kreativität und technischen Fähigkeiten herausfordern!",
        "skills-title": "Fähigkeiten",
        "contact-title": "Kontaktiere Mich"
    },
    "it": {
        "name": "Ciao, sono Susta",
        "role": "Sviluppatore Front-End",
        "about-title": "Chi Sono",
        "about-text": "Sono un sviluppatore front-end appassionato di creare interfacce web belle e funzionali. Ho esperienza con HTML, CSS, JavaScript, Python e altre tecnologie. Amo lavorare su progetti che sfidano la mia creatività e abilità tecniche!",
        "skills-title": "Competenze",
        "contact-title": "Contattami"
    },
    "ja": {
        "name": "こんにちは、私はSustaです",
        "role": "フロントエンド開発者",
        "about-title": "私について",
        "about-text": "私は美しく機能的なウェブインターフェイスを作成することに情熱を注いでいるフロントエンド開発者です。HTML、CSS、JavaScript、Python、その他の技術に経験があります。私の創造性と技術的なスキルを試すプロジェクトに取り組むのが大好きです。",
        "skills-title": "スキル",
        "contact-title": "お問い合わせ"
    }
};

// Função para mudar o conteúdo baseado no idioma selecionado
function loadTranslation(lang) {
    const translation = translations[lang];
    document.getElementById("name").textContent = translation.name;
    document.getElementById("role").textContent = translation.role;
    document.getElementById("about-title").textContent = translation["about-title"];
    document.getElementById("about-text").textContent = translation["about-text"];
    document.getElementById("skills-title").textContent = translation["skills-title"];
    document.getElementById("contact-title").textContent = translation["contact-title"];
}

// Função para alternar o tema
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    themeToggle.textContent = document.body.classList.contains('dark-theme') ? 'Tema Claro' : 'Tema Escuro';
});

// Função para alternar a fonte
const fontToggle = document.getElementById('font-toggle');
fontToggle.addEventListener('click', () => {
    document.body.style.fontFamily = document.body.style.fontFamily === 'Roboto' ? 'Arial, sans-serif' : 'Roboto';
});

// Função para exibir o menu de idiomas
const languageToggle = document.getElementById('language-toggle');
const languageDropdown = document.getElementById('language-dropdown');
languageToggle.addEventListener('click', () => {
    languageDropdown.classList.toggle('visible');
});

// Função para mudar o idioma ao selecionar uma opção
const languageItems = document.querySelectorAll('.language-dropdown li');
languageItems.forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-lang');
        loadTranslation(lang);
        languageDropdown.classList.remove('visible');
    });
});
