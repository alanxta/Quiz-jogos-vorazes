(function() {



    class Personagem {
        constructor(nome, descricao, imagem) {
            this.nome = nome;
            this.descricao = descricao;
            this.imagem = imagem;
            this.pontos = 0;
        }

        adicionarPontos(pontos) {
            this.pontos += pontos;
        }
    }


    const personagens = {
        katniss: new Personagem(
            "Katniss Everdeen",
            "Você é determinada, protetora e guiada por fortes emoções. Sempre luta por justiça e esperança.",
            "Assets/Katniss Everdeen.png"
        ),
        peeta: new Personagem(
            "Peeta Mellark",
            "Gentil, empático e leal, você conquista as pessoas pelo coração e sempre protege quem ama.",
            "Assets/Peeta Sozinho.png"
        ),
        haymitch: new Personagem(
            "Haymitch Abernathy",
            "Estratégico e cínico, você enxerga além das aparências e usa sua inteligência para sobreviver.",
            "Assets/Haymitch Sozinho.png"
        ),
        snow: new Personagem(
            "Presidente Snow",
            "Ambicioso, manipulador e calculista. O poder e o controle são suas armas mais afiadas.",
            "Assets/Snow sozinho.png"
        ),
        finnick: new Personagem(
            "Finnick Odair",
            "Carismático, ágil e magnético, você cativa as pessoas mas guarda dores profundas.",
            "Assets/Finnick Sozinho.png"
        )
    };



    const perguntas = [
        {
            pergunta: "1. Quando alguém precisa de você, sua reação natural é:",
            opcoes: [
                { texto: "Defender com unhas e dentes.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Usar empatia e apoio para proteger e ajudar os outros.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Analisar friamente o que é mais prático.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Pensar em como isso pode fortalecer sua posição.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Ser prestativo e leal.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]

        },
        {
            pergunta: "2. Se tivesse que escolher uma arma nos Jogos, pegaria:",
            opcoes: [
                { texto: "Minha habilidade de sobrevivência e instintos.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Minha inteligência, persuasão e capacidade de proteger os outros.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Estratégia, armadilhas e esperteza.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Manipulação e controle sobre os outros.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Carisma e combate ágil.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]

        },
        {
            pergunta: "3. Sua maior fraqueza é:",
            opcoes: [
                { texto: "Deixar que emoções fortes guiem suas decisões.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Ser inocente e confiar demais nas pessoas.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Se afundar em vícios e ceticismo diante das dificuldades.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Ambição e desejo de controlar tudo ao redor.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Ser mal interpretado ou subestimado.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]

        },
        {
            pergunta: "4. Como você lidaria com a autoridade da Capital?",
            opcoes: [
                { texto: "Não aceita ordens injustas.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Tenta jogar o jogo pelo diálogo e empatia.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Joga o jogo e manipula por baixo dos panos.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Procura estar acima dela.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Usaria charme e astúcia para contornar as regras.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]

        },
        {
            pergunta: "5. Qual dessas frases poderia ser sua?",
            opcoes: [
                { texto: "“Eu vou embora, mas não vou me curvar.”", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "“Quero mostrar a eles que não sou apenas mais uma peça dos Jogos.”", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "“Sobreviver não é suficiente. Você precisa jogar o jogo.”", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "“A esperança é a única coisa mais forte do que o medo...”", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "“É melhor não confiar em ninguém...”", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]

        },
        {
            pergunta: "6. Em uma arena, você se destacaria por:",
            opcoes: [
                { texto: "Instinto de sobrevivência e revolta.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Encenação, discursos e estratégia emocional.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Ler o cenário e manipular situações.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Antecipar movimentos e usar os outros como peças.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Agilidade e combate corpo a corpo.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]
        },
        {
            pergunta: "7. Na vida pessoal, você é mais lembrado por:",
            opcoes: [
                { texto: "Ser protetor e determinado.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Ser gentil e confiável.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Ser sarcástico, mas esperto.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Ser ambicioso e calculista.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Ser encantador e magnético.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]
        },
        {
            pergunta: "8. Em uma aliança dentro dos Jogos, você seria o que:",
            opcoes: [
                { texto: "Lidera pelo exemplo.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Une o grupo pelo diálogo.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Dá conselhos estratégicos e cínicos.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Controla os demais para atingir seus objetivos.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Usa carisma e popularidade.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]
        },
        {
            pergunta: "9. Se tivesse que escolher um motivo para lutar, seria:",
            opcoes: [
                { texto: "Pela revolução, esperança e justiça.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Para proteger quem ama.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Para não ser mais uma peça no jogo.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Para construir poder absoluto.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Para provar que ninguém ficará impune.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]
        },
        {
            pergunta: "10. Depois de vencer os Jogos, o que faria com sua vitória?",
            opcoes: [
                { texto: "Lutar por mudanças reais.", katniss: 3, peeta: 0, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Reconstruir laços e cuidar das pessoas.", katniss: 0, peeta: 3, haymitch: 0, snow: 0, finnick: 0 },
                { texto: "Remoer o passado e tentar impedir que se repita.", katniss: 0, peeta: 0, haymitch: 3, snow: 0, finnick: 0 },
                { texto: "Transformar a vitória em influência política.", katniss: 0, peeta: 0, haymitch: 0, snow: 3, finnick: 0 },
                { texto: "Usar habilidade e notoriedade para proteger aliados.", katniss: 0, peeta: 0, haymitch: 0, snow: 0, finnick: 3 }
            ]
        }
    ];


    let perguntaAtualIndex = 0;

    let opcaoSelecionada = null;



    const btnJogar = document.getElementById('btn-jogar');
    const btnProxima = document.getElementById('btn-proxima');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    const perguntaTitulo = document.getElementById('pergunta-titulo');
    const opcoesContainer = document.getElementById('opcoes-container');

    const telaInicial = document.getElementById('tela-inicial');
    const telaQuiz = document.getElementById('tela-quiz');
    const telaResultado = document.getElementById('tela-resultado');


    const imagensFundo = [
    "Assets/Dupla desfile Pergunta.png", 
    "Assets/Grupo pergunta.png", 
    "Assets/Katniss cerca Pergunta.png", 
    "Assets/Capital Pergunta.png", 
    "Assets/Katniss escolta Pergunta.png",
    "Assets/Dupla Pergunta.png",
    "Assets/Katniss guerra Pergunta.png",
    "Assets/Snow Pergunta.png", 
    "Assets/Katniss revolução Pergunta.png", 
    "Assets/banner.jpg"  
];


    function mostrarTela(telaId) {
        telaInicial.classList.remove('visivel');
        telaQuiz.classList.remove('visivel');
        telaResultado.classList.remove('visivel');
        document.getElementById(telaId).classList.add('visivel');
    }




function carregarPergunta() {
    opcaoSelecionada = null; 
    const pergunta = perguntas[perguntaAtualIndex];
    perguntaTitulo.textContent = pergunta.pergunta;
    opcoesContainer.innerHTML = ''; 

    const fundo = document.getElementById('imagem-personagem-quiz');
    fundo.style.backgroundImage = `url('${imagensFundo[perguntaAtualIndex]}')`;

    pergunta.opcoes.forEach((opcao, index) => {
        const div = document.createElement('div');
        div.textContent = opcao.texto;
        div.classList.add('opcao');
        div.dataset.index = index; 
        div.addEventListener('click', selecionarOpcao);
        opcoesContainer.appendChild(div);
    });
}

    function selecionarOpcao(event) {
        const todasOpcoes = document.querySelectorAll('.opcao');
        todasOpcoes.forEach(opt => opt.classList.remove('selecionada'));

        const opcaoClicada = event.currentTarget;
        opcaoClicada.classList.add('selecionada');
        
        opcaoSelecionada = perguntas[perguntaAtualIndex].opcoes[opcaoClicada.dataset.index];
    }

    function calcularResultado() {
        let maiorPontuacao = -1;
        let personagemVencedor = null;

        for (const chave in personagens) {
            const personagem = personagens[chave];
            if (personagem.pontos > maiorPontuacao) {
                maiorPontuacao = personagem.pontos;
                personagemVencedor = personagem;
            }
        }
        return personagemVencedor;
    }

    function exibirResultado() {
        const resultado = calcularResultado();

        document.getElementById('resultado-imagem').src = resultado.imagem;
        document.getElementById('resultado-nome').textContent = resultado.nome;
        document.getElementById('resultado-descricao').textContent = resultado.descricao;
        
        let pontuacaoTexto = "Pontuações finais: ";
        for (const chave in personagens) {
            pontuacaoTexto += `${personagens[chave].nome}: ${personagens[chave].pontos} | `;
        }
       
        document.getElementById('resultado-pontuacao').textContent = pontuacaoTexto.slice(0, -3);

        mostrarTela('tela-resultado');
    }



    function proximaPergunta() {
        if (opcaoSelecionada === null) {
            alert("Por favor, selecione uma opção.");
            return;
        }

        personagens.katniss.adicionarPontos(opcaoSelecionada.katniss);
        personagens.peeta.adicionarPontos(opcaoSelecionada.peeta);
        personagens.haymitch.adicionarPontos(opcaoSelecionada.haymitch);
        personagens.snow.adicionarPontos(opcaoSelecionada.snow);
        personagens.finnick.adicionarPontos(opcaoSelecionada.finnick);

        perguntaAtualIndex++;


        if (perguntaAtualIndex < perguntas.length) {
            carregarPergunta();
        } else {
            exibirResultado();
        }
    }



    function reiniciarJogo() {
        perguntaAtualIndex = 0;
        opcaoSelecionada = null;
  
        for (const chave in personagens) {
            personagens[chave].pontos = 0;
        }

        mostrarTela('tela-inicial');
    }


    btnJogar.addEventListener('click', () => {
        mostrarTela('tela-quiz');
        carregarPergunta();
    });



    btnProxima.addEventListener('click', proximaPergunta);
    btnReiniciar.addEventListener('click', reiniciarJogo);

})();
