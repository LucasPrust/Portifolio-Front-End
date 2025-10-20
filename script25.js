function verificarAcesso(numeroIdade, tipoDeIngresso) {
    if (numeroIdade >= 18 && tipoDeIngresso === "comum") {
      return "Acesso permitido.";
    } else if (numeroIdade > 60 || tipoDeIngresso === "VIP") {
      return "Acesso permitido.";
    } else {
      return "Acesso negado.";
    }
  }
  
  console.log(verificarAcesso(25, "comum"));
  console.log(verificarAcesso(16, "VIP"));
  console.log(verificarAcesso(17, "comum"));
  