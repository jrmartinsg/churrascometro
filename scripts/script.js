// Carne - 400gr p/ pessoa +6h, 650gr
// Cerveja - 1200ml p/ pessoa +6h, 2000ml
// Refri/Água - 1000ml p/ pessoa +6h, 1500ml
// Crianças valem por 0.5 (meio)

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");
let resultado = document.getElementById("resultado");

function calcular() {
  let adultos = Number(inputAdultos.value);
  let criancas = Number(inputCriancas.value);
  let duracao = Number(inputDuracao.value);

  let carne = 400;
  let cerveja = 1200;
  let refriAgua = 1000;

  if (duracao >= 6) {
    carne = 650;
    cerveja = 2000;
    refriAgua = 1500;
  }

  if (duracao == 0) {
    alert("É necessário preencher a duração do churrasco!");
  }
  else if ((duracao > 0) && (adultos == 0) && (criancas == 0)){
    alert('Valores inválidos! Preencha novamente.')
  }
  else if (adultos == 0) {
    let carneSoma = (carne * criancas) / 2;
    let cervejaSoma = 0;
    let refriSoma = (refriAgua * criancas) / 2;

    resultado.innerHTML = `<img src='./img/carne.png' width='32px'<p>   ${Math.ceil(carneSoma / 1000)} Kg de Carne!</p>`;
    resultado.innerHTML += `<img src='./img/cerveja.png' width='32px'<p>   ${Math.ceil(cervejaSoma)} Latas de Cerveja!</p>`;
    resultado.innerHTML += `<img src='./img/garrafa.png' width='32px'<p>   ${Math.ceil(refriSoma / 2000)} Garrafas de Bebidas!</p>`;
  }
  else if (criancas == 0) {
    let carneSoma = carne * adultos;
    let cervejaSoma = cerveja * adultos;
    let refriSoma = refriAgua * adultos;

    resultado.innerHTML = `<img src='./img/carne.png' width='32px'<p>   ${Math.ceil(carneSoma / 1000)} Kg de Carne!</p>`;
    resultado.innerHTML += `<img src='./img/cerveja.png' width='32px'<p>   ${Math.ceil(cervejaSoma / 355)} Latas de Cerveja!</p>`;
    resultado.innerHTML += `<img src='./img/garrafa.png' width='32px'<p>   ${Math.ceil(refriSoma / 2000)} Garrafas de Bebidas!</p>`;
  }
  else {
    let carneSoma = (carne * adultos) + (carne * criancas) / 2;
    let cervejaSoma = cerveja * adultos;
    let refriSoma = (refriAgua * adultos) + (refriAgua * criancas) / 2;

    resultado.innerHTML = `<img src='./img/carne.png' width='32px'<p>   ${Math.ceil(carneSoma / 1000)} Kg de Carne!</p>`;
    resultado.innerHTML += `<img src='./img/cerveja.png' width='32px'<p>   ${Math.ceil(cervejaSoma / 355)} Latas de Cerveja!</p>`;
    resultado.innerHTML += `<img src='./img/garrafa.png' width='32px'<p>   ${Math.ceil(refriSoma / 2000)} Garrafas de Bebidas!</p>`;
  }
}
