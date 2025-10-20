function calcularDesconto (valorTotalDaCompra ,cupomDeDesconto){
    if (valorTotalDaCompra > 200 && cupomDeDesconto === "VERAO20"){
        const valorComDesconto = valorTotalDaCompra * 0.8
        return valorComDesconto
    }
    else if (valorTotalDaCompra > 100 || cupomDeDesconto === "FRETEGRATIS"){
        return "Frete Grátis"
    }
     else if (valorTotalDaCompra > 50){
        return "10% de desconto"
     }
     else{
        return "Nenhum desconto aplicado"
     }
}

console.log(calcularDesconto(250, "VERAO20"));   // 200 (com 20% de desconto)
console.log(calcularDesconto(120, "QUALQUER"));  // "Frete Grátis"
console.log(calcularDesconto(80, "NENHUM"));    // "10% de desconto"
console.log(calcularDesconto(30, "NADA"));    // "Nenhum desconto aplicado"
