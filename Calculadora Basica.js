const v1 = document.getElementById("valor1");
const v2 = document.getElementById("valor2");
const resultado = document.getElementById("resultado");

document.getElementById("somar").addEventListener("click", () => {
  resultado.textContent = Number(v1.value) + Number(v2.value);
});

document.getElementById("subtrair").addEventListener("click", () => {
  resultado.textContent = Number(v1.value) - Number(v2.value);
});

document.getElementById("multiplicar").addEventListener("click", () => {
  resultado.textContent = Number(v1.value) * Number(v2.value);
});

document.getElementById("dividir").addEventListener("click", () => {
  if (Number(v2.value) === 0) {
    resultado.textContent = "Erro";
  } else {
    resultado.textContent = Number(v1.value) / Number(v2.value);
  }
});
