// 1. FUNCIONALIDADE DO BOTÃO DE ENTRAR
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').classList.add('hide');
    document.getElementById('main-content').classList.remove('hide');
});

// 2. ALTERNAR ABAS DE CONTEÚDO (MENU)
function openTab(evt, tabId) {
    //todos os conteúdos
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabConte// 1. FUNCIONALIDADE DO BOTÃO DE ENTRAR
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').classList.add('hide');
    document.getElementById('main-content').classList.remove('hide');
});

// 2. ALTERNAR ABAS DE CONTEÚDO (MENU)
function openTab(evt, tabId) {
    // aparecer todos os conteúdos
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Tira a classe 'active' de todos os botões
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona classe ativa ao botão correspondente
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Fecha o menu de celular automaticamente ao clicar em uma aba
    document.getElementById('nav-menu').classList.remove('show');
}

// 3. MENU RESPONSIVO (HAMBÚRGUER)
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// 4. SISTEMA DE ZOOM (AUMENTAR E DIMINUIR TEXTO / IMAGENS)
let currentZoom = 1.0;
const zoomStep = 0.1;
const maxZoom = 1.5;
const minZoom = 0.8;

const zoomableArea = document.querySelector('.zoomable-content');

document.getElementById('zoom-in').addEventListener('click', () => {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        applyZoom();
    }
});

document.getElementById('zoom-out').addEventListener('click', () => {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        applyZoom();
    }
});

function applyZoom() {
    // Aplica o zoom alterando o tamanho da fonte base e elementos do container de conteúdo
    zoomableArea.style.fontSize = `${currentZoom}rem`;
    
    // Ajusta proporcionalmente as caixas de imagens e gráficos junto com o zoom
    const images = document.querySelectorAll('.placeholder-img, .placeholder-graph');
    images.forEach(img => {
        img.style.transform = `scale(${1 + (currentZoom - 1) * 0.3})`;
    });
}

nts.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // Tira a classe 'active' de todos os botões
    const tabBtns = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove("active");
    }

    // Mostra a aba atual e adiciona classe ativa ao botão correspondente
    document.getElementById(tabId).classList.add("active");
    evt.currentTarget.classList.add("active");

    // Fecha o menu de celular automaticamente ao clicar em uma aba
    document.getElementById('nav-menu').classList.remove('show');
}

// 3. MENU RESPONSIVO (HAMBÚRGUER)
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
});

// 4. SISTEMA DE ZOOM (AUMENTAR E DIMINUIR TEXTO / IMAGENS)
let currentZoom = 1.0;
const zoomStep = 0.1;
const maxZoom = 1.5;
const minZoom = 0.8;

const zoomableArea = document.querySelector('.zoomable-content');

document.getElementById('zoom-in').addEventListener('click', () => {
    if (currentZoom < maxZoom) {
        currentZoom += zoomStep;
        applyZoom();
    }
});

document.getElementById('zoom-out').addEventListener('click', () => {
    if (currentZoom > minZoom) {
        currentZoom -= zoomStep;
        applyZoom();
    }
});

function applyZoom() {
    // Aplica o zoom alterando o tamanho da fonte base e elementos do container de conteúdo
    zoomableArea.style.fontSize = `${currentZoom}rem`;
    
    // Ajusta proporcionalmente as caixas de imagens e gráficos junto com o zoom
    const images = document.querySelectorAll('.placeholder-img, .placeholder-graph');
    images.forEach(img => {
        img.style.transform = `scale(${1 + (currentZoom - 1) * 0.3})`;
    });
}

