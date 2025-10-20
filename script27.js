function avaliarDesempenho(pontuacoes, pontuacaoMinima) {
    let totalAcimaMinimo = 0;
    let totalEntre75e100 = 0;
  
    for (let i = 0; i < pontuacoes.length; i++) {
      let pontuacao = pontuacoes[i];
  
      if (pontuacao > pontuacaoMinima) {
        totalAcimaMinimo++;
      }
  
      if (pontuacao >= 75 && pontuacao <= 100) {
        totalEntre75e100++;
      }
    }
  
 return `Pontuações acima da média: ${totalAcimaMinimo} \n Pontuações entre 75 e 100: ${totalEntre75e100}`;
  }
  
  
  let pontuacoes = [85, 92, 60, 100, 78, 110, 70];
  console.log(avaliarDesempenho(pontuacoes, 80));
  