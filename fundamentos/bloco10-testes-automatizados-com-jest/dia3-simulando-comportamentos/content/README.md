# Exercícios

### Para fixar

Utilize as funções do arquivo 'math.js' para realizar os exercícios:


```javascript
const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const somar = async (a, b) => { await sleep(10000); return a + b }; // Função de somar mais lenta do mundo
const subtrair = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a / b;

module.exports = { somar, subtrair, multiplicar, dividir };
```

1.  Faça o  _mock_ da funcão  **subtrair** e teste sua chamada.
2.  Faça o  _mock_ da função  **multiplicar** e implemente como retorno padrão o valor '10'. Teste a chamada e o retorno.
3.  Faça o  _mock_ da função  **somar** e implemente uma função que recebe dois valores e retorna sua soma. Teste a chamada, o retorno e os parâmetros passados.
4.  Faça o  _mock_ da função  **dividir** e implemente um retorno padrão com o valor '15'. Implemente também os seguintes valores para a primeira e segunda chamadas: '2' e '5'. Teste a chamada, o retorno, os parâmetros e quantas vezes a função foi chamada.
5.  Faça o  _mock_ da função  **subtrair** de maneira que seja possível restaurar sua implementação original. Defina como retorno padrão o valor '20'. Teste o número de chamadas e o retorno. Restaure a implementação original da função e teste sua execução.