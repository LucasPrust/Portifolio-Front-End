function CalcularIMC(){
 const inputPeso = document.getElementById('peso')
 const inputAltura = document.getElementById('altura')
 const exibirResultado = document.getElementById('resultado')

 const valorPeso = parseFloat(inputPeso.value)
 const valorAltura = parseFloat(inputAltura.value)

 const valorIMC = valorPeso / (valorAltura * valorAltura)
 exibirResultado.textContent = `Seu IMC é ${valorIMC.toFixed(1)}`
}