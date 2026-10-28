
/* ATIVAR E DESATIVAR O MODO ESCURO */
function alternarContraste() {
    document.body.classList.toggle("modo-escuro");
}



let escalaFonte = 1;

function alterarFonte(escala) {
    const elementos = document.querySelectorAll(
        'h1, h2, h3, p, a, button, li, label'
    );

    elementos.forEach(elemento => {
        if (!elemento.dataset.tamanhoOriginal) {
            elemento.dataset.tamanhoOriginal =
                parseFloat(getComputedStyle(elemento).fontSize);
        }

        elemento.style.fontSize =
            (parseFloat(elemento.dataset.tamanhoOriginal) * escala) + "px";
    });
}

function aumentarFonte() {
    if (escalaFonte < 1.5) {
        escalaFonte += 0.1;
        alterarFonte(escalaFonte);
    }
}

function diminuirFonte() {
    if (escalaFonte > 0.7) {
        escalaFonte -= 0.1;
        alterarFonte(escalaFonte);
    }
}

const equipes = [
    {
        modalidade: "FUTEBOL - EM",
        turma: "2º ano B",
        imagem: "../img/2b.jpg"
    },

    {
        modalidade: "FUTEBOL - FUND II (MANHÃ)",
        turma: "9º ano A",
        imagem: "../img/9a.png"
    },

    {
        modalidade: "FUTEBOL - FUND II (TARDE)",
        turma: "7º ano A",
        imagem: "../img/7ano.jpg"
    },

    {
        modalidade: "FUTEBOL FEMININO - FUND II (TARDE)",
        turma: "7º ano A",
        imagem: "../img/7a.jpg"
    },

    {
        modalidade: "VÔLEI - EM",
        turma: "2º ano A",
        imagem: "../img/2a.jpg"
    },

    {
        modalidade: "VÔLEI - FUND II (MANHÃ)",
        turma: "9º ano B",
        imagem: "../img/9B.png"
    },

    {
        modalidade: "QUEIMADA - FUND II (MANHÃ)",
        turma: "9º ano B",
        imagem: "../img/9anob.png"
    },

    {
        modalidade: "QUEIMADA - FUND II (TARDE)",
        turma: "6º ano A",
        imagem: "../img/6a.jpg"
    },

    {
        modalidade: "XADREZ - EM",
        turma: "Miguel - 3º ano A",
        imagem: "../img/miguel.jpg"
    },

    {
        modalidade: "XADREZ - FUND II (MANHÃ)",
        turma: "Cauã - 8º ano A",
        imagem: "../img/caua.png"
    },

    {
        modalidade: "XADREZ - FUND II (TARDE)",
        turma: "Wallace - 7º ano B",
        imagem: "../img/wallace.png"
    },

    {
        modalidade: "DAMA - EM",
        turma: "Breno - 1º ano B",
        imagem: "../img/breno.jpg"
    },

    {
        modalidade: "DAMA - FUND II (MANHÃ)",
        turma: "Pietro - 9º ano B",
        imagem: "../img/pietro.png"
    },

    {
        modalidade: "DAMA - FUND II (TARDE)",
        turma: "Sofia Turco - 7º ano B",
        imagem: "../img/sofia.jpg"
    },

    {
        modalidade: "PING-PONG - EM",
        turma: "Nicholas - 2º ano B",
        imagem: "../img/nicholas.jpg"
    },

    {
        modalidade: "PING-PONG - FUND II (MANHÃ)",
        turma: "Luís - 8º ano A",
        imagem: "../img/luis.jpg"
    },

    {
        modalidade: "PING-PONG - FUND II (TARDE)",
        turma: "Heitor - 7º ano B",
        imagem: "../img/heitor.png"
    },
];

let indiceAtual = 0;

const modalidade = document.getElementById("modalidade");
const turma = document.getElementById("turma");
const imagem = document.getElementById("imagemEquipe");

function mostrarEquipe(novoIndice) {
// indiceAtual = Atualiza o índice da equipe que será exibida.
// novoIndice é a posição desejada na lista.
// equipes.length é a quantidade total de equipes.
// O operador % (módulo) permite voltar ao início quando chegamos ao fim da lista.
    indiceAtual = (novoIndice + equipes.length) % equipes.length;

     // Busca, dentro do array equipes, a equipe que está na posição indicada por indiceAtual.
    const equipe = equipes[indiceAtual];

    modalidade.textContent = equipe.modalidade;
    turma.textContent = equipe.turma;
    imagem.src = equipe.imagem;
    imagem.alt = `Equipe vencedora de ${equipe.modalidade}`;
}

document.getElementById("anterior").addEventListener("click", () => {
    mostrarEquipe(indiceAtual - 1);
});

document.getElementById("proximo").addEventListener("click", () => {
    mostrarEquipe(indiceAtual + 1);
});