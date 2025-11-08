// let pode mudar, const não muda durante execeção do programa, var pode mudar
//
function sortear(){
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const de = parseInt(document.getElementById('de').value);
    const ate = parseInt(document.getElementById('ate').value);

    let sorteados = []; // cria um array usa colchetes
    let numeros;

    // A cada volta do loop, i é incrementado em 1 
    // i++ Pós-incrementoUsa o valor atual de i antes de incrementar.Incrementa i em 1.
    // ++i Pré-incrementoIncrementa i em 1 primeiro, e então usa o novo valor.Incrementa i em 1.
    // let j = i++; 5 6 j recebe o valor de i (5), depois i é incrementado para 6.
    // let j = ++i; 6 6 i é incrementado para 6, depois j recebe o novo valor de i (6).
    // Na maioria dos casos, como no final de um laço for (for (let i = 0; i < n; i++)),
    for (let i = 0; i < quantidade; i++){
        numeros = obterNumeroAleatorio(de, ate);
//loop usando while
        while (sorteados.includes(numeros)){
            numeros = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numeros);
    }

    let mensagem = document.getElementById('resultado');
    mensagem.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;

    alterarStatusBotao();
}
//Math.random() retorna um número decimal (ponto flutuante) maior ou igual a 0,
//mas estritamente menor que 1 ( sem incluir o 1)
//Math.floor(): Esta função arredonda o número decimal para baixo 
//(para o número inteiro mais próximo, sem casas decimais). Isso 
//transforma o resultado do Passo 2 (ex: 5.7 em 5, ou 10.99 em 10)
//O resultado agora é um inteiro de 0 até (amplitude - 1).
//+ min (Deslocamento): Finalmente, somamos o valor de min. 
// Isso desloca o resultado para o ponto inicial correto. 
// Se você gerou números de 0 a 10, ao somar min (que é 10),
// o resultado final será deslocado para o intervalo de 10 a 20.
//Math.random() * (max - min + 1)
//Cálculo da Amplitude: Primeiro, calculamos o tamanho total do intervalo 
//desejado, incluindo os limites. O cálculo (max - min) dá a diferença.
//O + 1 é crucial para tornar o intervalo inclusivo.
//
function obterNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar')
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }
    else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}
