
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
            "Você é uma pessoa de instintos fortes, protetora e corajosa. Embora prefira ficar longe dos holofotes, não hesita em lutar por aqueles que ama, tornando-se um símbolo de resistência.",
            "https://i.imgur.com/aK8Vf9c.jpg"
         ),
        peeta: new Personagem(
            "Peeta Mellark",
            "Carismático, gentil e com um grande coração. Você usa a empatia e as palavras como suas maiores ferramentas, conquistando as pessoas e mostrando força através da sua bondade e inteligência emocional.",
            "https://i.imgur.com/u113oBI.jpg"
         ),
        haymitch: new Personagem(
            "Haymitch Abernathy",
            "Por trás de uma fachada de sarcasmo e indiferença, existe uma mente brilhante e um mentor leal. Você é extremamente inteligente, estratégico e, apesar do seu jeito, se importa profundamente com seus aliados.",
            "https://i.imgur.com/J3G5A9A.jpg"
         )
    };

    const perguntas = [
        {
            pergunta: "Um conflito se inicia. Qual é a sua primeira reação?",
            opcoes: [
                { texto: "Analisar a situação e agir para proteger os mais vulneráveis.", katniss: 3, peeta: 2, haymitch: 1 },
                { texto: "Tentar acalmar os ânimos e encontrar uma solução pacífica.", katniss: 1, peeta: 3, haymitch: 2 },
                { texto: "Observar de longe, calcular os riscos e agir apenas se for vantajoso.", katniss: 2, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Qual a sua maior arma em uma situação de pressão?",
            opcoes: [
                { texto: "Minha habilidade de sobrevivência e instintos.", katniss: 3, peeta: 1, haymitch: 2 },
                { texto: "Minha capacidade de me conectar com as pessoas.", katniss: 1, peeta: 3, haymitch: 1 },
                { texto: "Minha experiência e visão estratégica.", katniss: 2, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Você precisa conquistar aliados. Como você faz isso?",
            opcoes: [
                { texto: "Através de ações que demonstram minha lealdade e força.", katniss: 3, peeta: 2, haymitch: 1 },
                { texto: "Com sinceridade, carisma e mostrando meu lado humano.", katniss: 1, peeta: 3, haymitch: 2 },
                { texto: "Com um pouco de manipulação e mostrando o benefício mútuo.", katniss: 2, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Qual é o seu maior medo?",
            opcoes: [
                { texto: "Perder as pessoas que eu amo.", katniss: 3, peeta: 2, haymitch: 1 },
                { texto: "Perder minha identidade e me tornar um peão no jogo de outros.", katniss: 2, peeta: 3, haymitch: 2 },
                { texto: "Reviver os traumas do passado.", katniss: 1, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Em um trabalho em equipe, qual é o seu papel?",
            opcoes: [
                { texto: "A linha de frente, a pessoa de ação.", katniss: 3, peeta: 1, haymitch: 1 },
                { texto: "O rosto do grupo, responsável pela comunicação.", katniss: 1, peeta: 3, haymitch: 2 },
                { texto: "O cérebro, planejando a estratégia por trás das cenas.", katniss: 2, peeta: 2, haymitch: 3 }
            ]
        },
        {
            pergunta: "O que mais te motiva?",
            opcoes: [
                { texto: "Proteger minha família e meus amigos a qualquer custo.", katniss: 3, peeta: 2, haymitch: 1 },
                { texto: "Manter a esperança e lutar por um futuro melhor.", katniss: 2, peeta: 3, haymitch: 1 },
                { texto: "Sobreviver e, talvez, encontrar um pouco de paz.", katniss: 1, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Como você lida com regras que considera injustas?",
            opcoes: [
                { texto: "Eu as quebro, mesmo que isso signifique enfrentar as consequências.", katniss: 3, peeta: 1, haymitch: 2 },
                { texto: "Eu tento usá-las a meu favor, encontrando brechas.", katniss: 2, peeta: 3, haymitch: 3 },
                { texto: "Eu as desprezo, mas sigo-as com relutância para sobreviver.", katniss: 1, peeta: 2, haymitch: 3 }
            ]
        },
        {
            pergunta: "Qual seu passatempo favorito em Panem?",
            opcoes: [
                { texto: "Caçar na floresta.", katniss: 3, peeta: 1, haymitch: 1 },
                { texto: "Decorar bolos ou pintar.", katniss: 1, peeta: 3, haymitch: 1 },
                { texto: "Beber e tentar esquecer o mundo.", katniss: 1, peeta: 1, haymitch: 3 }
            ]
        },
        {
            pergunta: "Você é confrontado por um inimigo poderoso. O que você faz?",
            opcoes: [
                { texto: "Encaro de frente, usando minhas habilidades de combate.", katniss: 3, peeta: 1, haymitch: 2 },
                { texto: "Tento ganhar a simpatia do público para ter vantagem.", katniss: 1, peeta: 3, haymitch: 1 },
                { texto: "Estudo suas fraquezas para um ataque futuro e inesperado.", katniss: 2, peeta: 2, haymitch: 3 }
            ]
        },
        {
            pergunta: "Após uma vitória difícil, como você se sente?",
            opcoes: [
                { texto: "Assombrado pelo custo da vitória.", katniss: 3, peeta: 2, haymitch: 3 },
                { texto: "Aliviado, mas focado em manter a paz que conquistei.", katniss: 2, peeta: 3, haymitch: 1 },
                { texto: "Cínico, sabendo que outra batalha está por vir.", katniss: 1, peeta: 1, haymitch: 3 }
            ]
        }
    ];

    let perguntaAtualIndex = 0;
    let opcaoSelecionada = null;

    const telaInicial = document.getElementById('tela-inicial');
    const telaQuiz = document.getElementById('tela-quiz');
    const telaResultado = document.getElementById('tela-resultado');

    const btnJogar = document.getElementById('btn-jogar');
    const btnProxima = document.getElementById('btn-proxima');
    const btnReiniciar = document.getElementById('btn-reiniciar');

    const perguntaTitulo = document.getElementById('pergunta-titulo');
    const opcoesContainer = document.getElementById('opcoes-container');

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
