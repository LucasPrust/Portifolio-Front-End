function simularEconomia(metaFinanceira, depositoMensal) {
    let totalEconomizado = 0;
    let meses = 0;
  
    while (totalEconomizado < metaFinanceira) {
      totalEconomizado += depositoMensal;
      meses++;
    }
  
    return meses;
  }

  let meta = 10000;
 let deposito = 500;

 let resultado = simularEconomia(meta, deposito);
 console.log(`Você atingirá a meta em ${resultado} meses.`);
