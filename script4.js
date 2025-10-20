let precoOriginal = 100
let cupom = "DESC10"
let precoFinal = precoOriginal

if (cupom === "DESC10"){
    const desconto = precoOriginal * 0.10
    precoFinal = precoOriginal - desconto
}

console.log(`Preço final: R$ ${precoFinal}`)