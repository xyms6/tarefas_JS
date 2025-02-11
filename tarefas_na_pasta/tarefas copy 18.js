// #18 Jogo de Pedra, Papel e Tesoura
function jogadaComputador() {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    return opcoes[Math.floor(Math.random() * opcoes.length)];
}

function determinarVencedor(jogadaUsuario, jogadaComputador) {
    switch (true) {
        case jogadaUsuario === jogadaComputador:
            return "Empate!";
        case (jogadaUsuario === 'pedra' && jogadaComputador === 'tesoura') ||
             (jogadaUsuario === 'papel' && jogadaComputador === 'pedra') ||
             (jogadaUsuario === 'tesoura' && jogadaComputador === 'papel'):
            return "Usuário venceu!";
        default:
            return "Computador venceu!";
    }
}

const usuario = prompt("Escolha sua jogada: pedra, papel ou tesoura");
const computador = jogadaComputador(); 
alert(`Você escolheu ${usuario}, o computador escolheu ${computador}. ${determinarVencedor(usuario, computador)}`); // Corrigido o nome da variável
