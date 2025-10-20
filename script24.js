const livros = ["Memórias Póstumas de Brás Cubas", "Cem Anos de Solidão", "A Casa dos Espíritos", "Ao Farol"];


livros.push("O Cortiço");


livros.splice(1, 1);


let indice = livros.indexOf("Ao Farol");
console.log("O livro 'Ao Farol' está na posição:", indice);


console.log("Array final de livros:", livros);