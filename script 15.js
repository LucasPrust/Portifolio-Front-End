 function converterMoeda (valor, taxaConversao, simboloMoeda){
    const valorConvertido = valor / taxaConversao
    return `${simboloMoeda} ${valorConvertido}`
 }

 const valorEmBRL = 260.00;
 const taxaDolar = 5.20;
 const simbolo = 'US$'

 const resultado = converterMoeda(valorEmBRL,taxaDolar,simbolo);
 console.log(resultado);