// 1. EVENTO PARA ENTRAR NO SITE
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').classList.add('hide');
    document.getElementById('main-content').classList.remove('hide');
});

// 2. CONTROLE DE NAVEGAÇÃO POR ABAS
function openTab(evt, tabId) {
    // Esconde todos os blocos de texto
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Remove a marcação ativa de todos os botões do menu
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Ativa a aba atual e o botão clicado
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Fecha o menu de celular automaticamente ao selecionar uma aba
    document.getElementById('nav-menu').classList.remove('show');
}

// 3. MENU HAMBÚRGUER (MOBILE)
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// 4. FUNCIONALIDADE DE ZOOM MECÂNICO (TEXTO E IMAGENS)
let currentZoom = 1.0;
const zoomStep = 0.1;
const maxZoom = 1.4;
const minZoom = 0.8;

const zoomableArea = document.getElementById('zoomable-area');

document.getElementById('zoom-in').addEventListener('click', function() {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        applyZoom();
    }
});

document.getElementById('zoom-out').addEventListener('click', function() {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        applyZoom();
    }
});

function applyZoom() {
    // Modifica dinamicamente o tamanho da fonte da área principal
    zoomableArea.style.fontSize = `${currentZoom}rem`;
}
