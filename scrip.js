/* =========================
   TROCA DE PÁGINAS (ABAS)
========================= */
function openPage(id){

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* =========================
   💬 SISTEMA DE COMENTÁRIOS
========================= */
function comentar(){

    let input = document.getElementById("input");
    let text = input.value.trim();

    if(text === "") return;

    let div = document.createElement("div");
    div.className = "comment";

    // nomes aleatórios (simulação rede social)
    let nomes = ["João", "Maria", "Ana", "Pedro", "Lucas", "Carla", "Rafaela", "Bruno"];
    let nomeAleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    div.innerText = "👤 " + nomeAleatorio + ": " + text;

    document.getElementById("comments").appendChild(div);

    input.value = "";
}


/* =========================
   🗺 MAPA (ALERTAS DAS CIDADES)
========================= */
function cidadeInfo(cidade){

    let info = "";

    if(cidade === "sp"){
        info = "São Paulo: maior cidade do Brasil, forte urbanização e grande desigualdade social.";
    }

    if(cidade === "rj"){
        info = "Rio de Janeiro: urbanização intensa com contraste entre áreas ricas e favelas.";
    }

    if(cidade === "ctb"){
        info = "Curitiba: cidade planejada, mas ainda com desigualdades urbanas.";
    }

    alert(info);
}
