function verificarStatusCliente (pontosAcumulados, tempoDeCadastroEmMeses){

   if (pontosAcumulados > 5000 && tempoDeCadastroEmMeses > 24){
    return "Platinum"
   }
    else if (pontosAcumulados > 2000 && tempoDeCadastroEmMeses > 12){
        return "Gold"
    }
    else if (tempoDeCadastroEmMeses < 6 || pontosAcumulados < 100){
        return "Básico"

    } else{
       return "Silver"
    }
}

console.log(verificarStatusCliente(6000, 30)); // Platinum
console.log(verificarStatusCliente(2500, 15)); // Gold
console.log(verificarStatusCliente(50, 10));   // Básico
console.log(verificarStatusCliente(300, 3));   // Básico
console.log(verificarStatusCliente(1500, 10)); // Silver
console.log(verificarStatusCliente(5000, 24)); // Silver (não é > 24)
