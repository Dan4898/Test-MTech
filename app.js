function gerar(){
    const text = document.querySelector('#retorno');
    const numString = document.getElementById('numero');
    const num = Number(numString.value);
    
    //Limpa conteúdo anterior
    text.innerHTML = '';
    
    //Verificação de erro
    if (!numString.value){
        text.innerHTML = `Por favor digite um número`;
        return;
    } else if (num <= 0){
        text.innerHTML = 'Digite um número maior que zero';
        return;
    }
    
    
    
    const numArr = [];
    const numArrEven = [];
    const numArrOdd = [];
    let media = 0;
    
    
    for (let i = 0; i < num; i++){
        const randomNum = Math.floor(Math.random() * 100) + 1;
        numArr.push(randomNum);
        media += randomNum;
        if (randomNum % 2 === 0){
            numArrEven.push(randomNum)
        } else {
            numArrOdd.push(randomNum)
        }
    }
    
    const maiorNum = Math.max(...numArr);
    const menorNum = Math.min(...numArr);
    const mediaFinal = media / numArr.length
    
    text.innerHTML = `Lista: ${numArr}<br>`;
    text.innerHTML += `Média: ${mediaFinal.toFixed(2)}<br>`
    text.innerHTML += `O maior número é: ${maiorNum}<br>`
    text.innerHTML += `O menor número é: ${menorNum}<br>`
    
    text.innerHTML += `A lista possui ${numArrEven.length} números pares.<br>`
    text.innerHTML += `A lista possui ${numArrOdd.length} números ímpares`
}

