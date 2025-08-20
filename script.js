let pergunta = document.getElementById("pergunta")
let transformar = document.getElementById("transformar")
let escrita = document.getElementById("escrita")
let opcoes = document.getElementById("opcoes")

function levi() {
    if(opcoes.value === "binario") {
    let binario = parseInt(pergunta.value).toString(2)
    escrita.innerHTML = `O seu numero transformado em binario é ${binario}`
    pergunta.value += ``
}else if (opcoes.value === "decimal") {
    let decimal = parseInt(pergunta.value) 
    escrita.innerHTML = `O seu numero transformado em decimal é ${decimal}`
}
}