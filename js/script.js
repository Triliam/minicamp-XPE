function start() {
  var buttonCalculate = document.querySelector('#button-calc');
  buttonCalculate.addEventListener('click', handleButtonClick);

  // var inputNumA = document.querySelector('#numA');
  //var inputNumB = document.querySelector('#numB');

  //  inputNumA.addEventListener('input',  handleButtonClick);
  //  inputNumB.addEventListener('input',  handleButtonClick);

  handleButtonClick();
  zerarResultados();
}

function zerarResultados() {
  var resultSoma = document.querySelector('#result-soma');
  resultSoma.textContent = '';
  var resultSubA = document.querySelector('#result-subA');
  resultSubA.textContent = '';
  var resultSubB = document.querySelector('#result-subB');
  resultSubB.textContent = '';
  var resultMult = document.querySelector('#result-mult');
  resultMult.textContent = '';
  var resultDivA = document.querySelector('#result-divA');
  resultDivA.textContent = '';
  var resultDivB = document.querySelector('#result-divB');
  resultDivB.textContent = '';
  var resultPotA = document.querySelector('#result-potA');
  resultPotA.textContent = '';
  var resultPotB = document.querySelector('#result-potB');
  resultPotB.textContent = '';
  var resultRaizA = document.querySelector('#result-raizA');
  resultRaizA.textContent = '';
  var resultRaizB = document.querySelector('#result-raizB');
  resultRaizB.textContent = '';
  var resultFatA = document.querySelector('#result-fatA');
  resultFatA.textContent = '';
  var resultFatB = document.querySelector('#result-fatB');
  resultFatB.textContent = '';
  var resultPorA = document.querySelector('#result-porA');
  resultPorA.textContent = '';
  var resultPorB = document.querySelector('#result-porB');
  resultPorB.textContent = '';
  var resultMedia = document.querySelector('#result-media');
  resultMedia.textContent = '';
}

function somar(numA, numB) {
  var numC = numA + numB;
  return numC.toFixed(2).replace('.', ',');
}

function subtrairA(numA, numB) {
  var numC = numA - numB;
  return numC.toFixed(2).replace('.', ',');
}

function subtrairB(numA, numB) {
  var numC = numB - numA;
  return numC.toFixed(2).replace('.', ',');
}

function multiplicar(numA, numB) {
  var numC = numA * numB;
  return numC.toFixed(2).replace('.', ',');
}

function dividirA(numA, numB) {
  var numC = numA / numB;

  return numC.toFixed(2).replace('.', ',');
}
function dividirB(numA, numB) {
  var numC = numB / numA;
  return numC.toFixed(2).replace('.', ',');
}

function potenciaA(numA, numB) {
  var numC = Math.pow(numA, numB);
  return numC.toFixed(2).replace('.', ',');
}

function potenciaB(numA, numB) {
  var numC = Math.pow(numB, numA);
  return numC.toFixed(2).replace('.', ',');
}

function raizQuadradaA(numA) {
  var numC = Math.sqrt(numA);
  if (isNaN(numC)) {
    return 'Resultado negativo';
  }
  return numC.toFixed(2).replace('.', ',');
}

function raizQuadradaB(numB) {
  var numC = Math.sqrt(numB);
  if (isNaN(numC)) {
    return 'Resultado negativo';
  }
  return numC.toFixed(2).replace('.', ',');
}
//5! = 5 * 4 * 3 * 2 * 1 = 120
function fatorialA(numA) {
  if (numA < 0) {
    return 'não existe fatorial de número negativo';
  }
  var numC = 1;
  for (var i = numA; i > 1; i--) {
    numC = numC * i;
  }

  return numC.toFixed(2).replace('.', ',');
}

function fatorialB(numB) {
  var numC = 1;
  for (var i = 1; i <= numB; i++) {
    numC = numC * i;
  }
  return numC.toFixed(2).replace('.', ',');
}

function porcentagemA(numA, numB) {
  var numC = (numB * 100) / numA;
  return numC.toFixed(2).replace('.', ',');
}

function porcentagemB(numA, numB) {
  var numC = (numA * 100) / numB;
  return numC.toFixed(2).replace('.', ',');
}

function media(numA, numB) {
  numC = (numA + numB) / 2;
  return numC.toFixed(2).replace('.', ',');
}

function handleButtonClick() {
  var inputNumA = document.querySelector('#numA');
  var inputNumB = document.querySelector('#numB');
  var resultSoma = document.querySelector('#result-soma');
  var resultSubA = document.querySelector('#result-subA');
  var resultSubB = document.querySelector('#result-subB');
  var resultMult = document.querySelector('#result-mult');
  var resultDivA = document.querySelector('#result-divA');
  var resultDivB = document.querySelector('#result-divB');
  var resultPotA = document.querySelector('#result-potA');
  var resultPotB = document.querySelector('#result-potB');
  var resultRaizA = document.querySelector('#result-raizA');
  var resultRaizB = document.querySelector('#result-raizB');
  var resultFatA = document.querySelector('#result-fatA');
  var resultFatB = document.querySelector('#result-fatB');
  var resultPorA = document.querySelector('#result-porA');
  var resultPorB = document.querySelector('#result-porB');
  var resultMedia = document.querySelector('#result-media');

  var numA = Number(inputNumA.value);
  var numB = Number(inputNumB.value);

  var soma = somar(numA, numB);
  resultSoma.textContent = soma;

  var subA = subtrairA(numA, numB);
  resultSubA.textContent = subA;

  var subB = subtrairB(numA, numB);
  resultSubB.textContent = subB;

  var mult = multiplicar(numA, numB);
  resultMult.textContent = mult;

  var divA = dividirA(numA, numB);
  resultDivA.textContent = divA;

  var divB = dividirB(numA, numB);
  resultDivB.textContent = divB;

  var potA = potenciaA(numA, numB);
  resultPotA.textContent = potA;

  var potB = potenciaB(numA, numB);
  resultPotB.textContent = potB;

  var raizA = raizQuadradaA(numA);
  resultRaizA.textContent = raizA;

  var raizB = raizQuadradaB(numB);
  resultRaizB.textContent = raizB;

  var fatA = fatorialA(numA);
  resultFatA.textContent = fatA;

  var fatB = fatorialB(numB);
  resultFatB.textContent = fatB;

  var porA = porcentagemA(numA, numB);
  resultPorA.textContent = porA + '%';

  var porB = porcentagemB(numA, numB);
  resultPorB.textContent = porB + '%';

  var med = media(numA, numB);
  resultMedia.textContent = med;
}

start();
