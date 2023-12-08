/*Primeiro Desafio de Projeto
Variáveis, Operadores, Laços de repetição, Estruturas de decisões## Objetivo
Crie uma variável para armazenar o nome e a quantidade de experiência(XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
Se XP for menor do que 1.000 = Ferro; Se XP for entre 1.001 e 2.000 = Bronze; Se XP for entre 2.001 e 5.000 = Prata; Se XP for entre 6.001 e 7.000 = Ouro;
Se XP for entre 7.001 e 8.000 = Platina; Se XP for entre 8.001 e 9.000 = Ascendente; Se XP for entre 9.001 e 10.000 = Imortal; Se XP for maior ou igual a 10.001 = Radiante## Saída
Ao final deve se exibir uma mensagem: "O Herói de nome **{nome}** está no nível de **{nivel}**" */

let valorXp = 1

if (valorXp <= 1000) {
    let nome = "FERRO"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}

if (valorXp > 1001 && valorXp <= 2000) {
    console.log("")
    console.log("Resultado: BRONZE")
    console.log("")
}

if (valorXp >= 2001 && valorXp <= 5000) {
    let nome = "PRATA"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}

if (valorXp >= 5001 && valorXp <= 7000) {
    let nome = "OURO"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}

if (valorXp >= 7001 && valorXp <= 8000) {
    let nome = "PLATINA"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}

if (valorXp >= 8001 && valorXp <= 9000) {
    let nome = "ASCENDENTE"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}

if (valorXp >= 9001 && valorXp <= 10000) {
    let nome = "IMORTAL"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}
if (valorXp >= 10001) {
    let nome = "RADIANTE"
    console.log("")
    console.log("O Heroi " + nome + " esta no nivel: " + valorXp)
    console.log("")
}