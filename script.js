document.getElementById('startButton').addEventListener('click', () => {
    // Define as cores disponíveis
    const cores = ['vermelho', 'vermelho', 'vermelho', 'vermelho', 'vermelho', 'branco', 'preto', 'preto', 'preto', 'preto'];

    // Escolhe uma cor aleatória
    const escolhido = cores[Math.floor(Math.random() * cores.length)];

    // Define o valor com base na cor escolhida
    let valor;
    let corFundo;
    if (escolhido === 'vermelho' || escolhido === 'preto') {
        valor = 'X2';
        corFundo = escolhido;
    } else if (escolhido === 'branco') {
        valor = 'X14';
        corFundo = 'gray'; // Branco não pode ser usado como fundo para texto, então usamos cinza
    }

    // Atualiza o resultado
    const resultElement = document.getElementById('result');
    resultElement.textContent = `A cor foi ${escolhido} e ela vale ${valor}`;
    resultElement.style.backgroundColor = corFundo;
    resultElement.style.color = (corFundo === 'preto') ? '#fff' : '#000'; // Ajusta a cor do texto para melhor contraste
});
