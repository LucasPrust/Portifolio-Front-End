const botaoAdicionar = document.getElementById("adicionar");
const listaTarefas = document.getElementById("lista-tarefas");

botaoAdicionar.addEventListener("click", () => {
  const titulo = document.getElementById("titulo").value;
  const cliente = document.getElementById("cliente").value;
  const prazo = document.getElementById("prazo").value;
  const prioridade = document.getElementById("prioridade").value;

  if (!titulo) {
    alert("Por favor, digite o título da tarefa.");
    return;
  }

  const prazoFormatado = prazo
  ? new Date(prazo).toLocaleDateString('pt-BR')
  : "Sem prazo";

const tarefa = document.createElement("div");
tarefa.className = "tarefa";
tarefa.innerHTML = `
  <strong>${titulo}</strong> - ${cliente || "Sem cliente"}<br />
  Prazo: ${prazoFormatado}<br />
  Prioridade: ${prioridade}<br />
  <button class="concluir">Concluir</button>
  <button class="excluir">Excluir</button>
`;

const botaoConcluir = tarefa.querySelector(".concluir");
botaoConcluir.addEventListener("click", () => {
  tarefa.classList.toggle("concluida");
});

const botaoExcluir = tarefa.querySelector(".excluir");
botaoExcluir.addEventListener("click", () => {
  tarefa.remove();
});

  listaTarefas.appendChild(tarefa);

  document.getElementById("titulo").value = "";
  document.getElementById("cliente").value = "";
  document.getElementById("prazo").value = "";
  document.getElementById("prioridade").value = "Média";
});