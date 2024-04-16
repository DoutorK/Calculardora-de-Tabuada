
let drk_selectedNumber = null;
let drk_selectedOperation = null;

function handleNumberClick(number) {
    drk_selectedNumber = number;
}

function handleOperationClick(operation) {
    drk_selectedOperation = operation;
}

function calculateTabuada () {
    const tabuadaResult = document.getElementById('drk_tabuadaResult');
    tabuadaResult.innerHTML = ''; // Limpa o conteúdo anterior

    if (drk_selectedNumber === null || drk_selectedOperation === null) {
        tabuadaResult.innerText = 'Por favor, selecione um número e uma operação.';
        return;
    }

    tabuadaResult.innerHTML = `<h2>Tabuada do ${drk_selectedNumber} (${drk_selectedOperation})</h2>`;

    for (let i = 1; i <= 10; i++) {
        let result;
        switch (drk_selectedOperation) {
            case '+':
                result = i + drk_selectedNumber;
                break;
            case '-':
                result = i - drk_selectedNumber;
                break;
            case '*':
                result = i * drk_selectedNumber;
                break;
            case '/':
                result = i / drk_selectedNumber;
                break;
            default:
                continue;
        }
        tabuadaResult.innerHTML += `<p>${i} ${drk_selectedOperation} ${drk_selectedNumber} = ${result}</p>`;
    }
}
