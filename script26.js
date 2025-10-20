function gerenciarFila(statusClientes) {
   
    let atendidos = 0;
    for (let i = 0; i < statusClientes.length; i++) {
      if (statusClientes[i] === "atendido") {
        atendidos++;
      }
    }
  
    console.log("Total de clientes atendidos:", atendidos);
  
   
    let indice = 0;
    while (indice < statusClientes.length && statusClientes[indice] !== "aguardando") {
      indice++;
    }
  
    if (indice < statusClientes.length) {
      console.log("Índice do primeiro cliente aguardando:", indice);
      return indice;
    } else {
      return "Todos os clientes foram atendidos ou estão em progresso.";
    }
  }
  
  const clientes = [
    { nome: "Lucas", status: "Atendido" },
    { nome: "João", status: "Atendido" },
    { nome: "Lurdes", status: "Atendido" },
    { nome: "José", status: "Atendido" },
    { nome: "Carlos", status: "aguardando" },
    { nome: "Ana", status: "aguardando" },
    { nome: "Maria", status: "pendente" }
  ];
  
  let statusClientes = ["atendido", "atendido", "aguardando",
    "em progresso", "aguardando"];
  gerenciarFila(statusClientes);
  