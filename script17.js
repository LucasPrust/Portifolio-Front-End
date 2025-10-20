function verificarEmprestimo(rendaMensal, scoreCredito, valorEmprestimo) {
    if (rendaMensal > 5000 && scoreCredito > 700) {
        return "Aprovado com taxa especial";
    } else if (rendaMensal > 2000 && scoreCredito > 600) {
        return "Aprovado";
    } else if (valorEmprestimo > 100000 || scoreCredito < 600) {
        return "Negado";
    } else {
        return "Análise manual";
    }
}

console.log(verificarEmprestimo(6000, 750, 50000));     // Aprovado com taxa especial
console.log(verificarEmprestimo(3000, 650, 40000));     // Aprovado
console.log(verificarEmprestimo(2500, 580, 80000));     // Negado
console.log(verificarEmprestimo(4000, 620, 150000));    // Negado
console.log(verificarEmprestimo(1800, 610, 30000));     // Análise manual
