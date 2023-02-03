const anterior = document.querySelector("#anterior");
const atual = document.querySelector("#atual");
const btns = document.querySelectorAll(".button");

class Calculadora {
    constructor(anterior, atual)
    {
        this.anteriorTexto = anterior;
        this.atualTexto = atual;
        this.operacaoAtual = "";
    }
    digitar(digito){
        if(digito === "." && this.operacaoAtual.includes("."))
        {
            return;
        }

        console.log(digito);
        this.operacaoAtual = digito;
        this.atualizarVisor();
    }

    atualizarVisor(
        operationValue = null,
        operacao = null,
        current = null,
        previous = null
    )
    {
        console.log(operationValue, operacao, current , previous)
        if(operationValue === null)
        {
            this.atualTexto.innerText += this.operacaoAtual;
        } else{

        }

    }

    adicao(operacao)
    {
        let operationValue = previous + current;
        const previous = +this.anteriorTexto.innerText;
        const current = +this.atualTexto.innerText;

        operationValue = previous + current
        this.atualizarVisor(operationValue, operacao, current, previous)
    }
}

const calc = new Calculadora(anterior, atual);

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const value = e.target.innerText;
        
        if(Number(value) >= 0 || value === ".")
        {
            calc.digitar(value)
        }
        else
        {
            let operacao = value 
            switch(operacao)
            {
                case "+": adicao(operacao);
                    break;
                case "-":
                    break;
                case "*":
                    break;
                case "/":
                    break;
                case "%":
                    break;
                case "+/-":
                    break;
                case "C":
                    break;
                case "=":
                    break;
                case "AC":
                    break;
                default:
                    break;
            }  
        }
    })
})
