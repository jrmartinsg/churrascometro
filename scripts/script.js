// Carne - 400gr p/ pessoa +6h, 650gr
// Cerveja - 1200ml p/ pessoa +6h, 2000ml
// Refri/Água - 1000ml p/ pessoa +6h, 1500ml
// Crianças valem por 0.5 (meio)

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let carne = document.getElementById("carne")
let cerveja = document.getElementById("cerveja")
let bebidas = document.getElementById("bebidas")

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650
    }
    else {
        return 400
    }

}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    }
    else {
        return 1200
    }

}

function bebidasPP(duracao) {
    if (duracao >= 6) {
        return 1500
    }
    else {
        return 1000
    }

}

function calcular() {

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao)) / 2 * criancas
    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)) / 2 * criancas

    carne.innerHTML = `<img src='./img/carne.png' width='32px' ' <p>  ${qdtTotalCarne / 1000} Kg de Carne`
    cerveja.innerHTML = `<img src='./img/cerveja.png' width='32px' <p>  ${Math.ceil(qdtTotalCerveja / 355)} Latas de Cerveja`
    bebidas.innerHTML = `<img src='./img/garrafa.png' width='32px' <p>  ${Math.ceil(qdtTotalBebidas / 2000)} Garrafas de Bebidas`

}