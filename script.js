const geraCard = document.getElementById('carta-gerada');
const theInput = document.getElementById('carta-texto');
const getSpans = document.getElementsByTagName('span');
const estilo = ['newspaper', 'magazine1', 'magazine2'];
const tamanho = ['medium', 'big', 'reallybig'];
const rotacao = ['rotateleft', 'rotateright'];
const inclinacao = ['skewleft', 'skewright'];

// Sorteia um numero aleatorio
const sorteiaNumber = (arr) => {
  const theNumber = Math.floor(Math.random() * arr.length);

  return theNumber;
};

// Sorteia classe para aplicar
const sortClasses = () => {
  const getStyle = estilo[sorteiaNumber(estilo)];
  const getSize = tamanho[sorteiaNumber(tamanho)];
  const getRotation = rotacao[sorteiaNumber(rotacao)];
  const getInclination = inclinacao[sorteiaNumber(inclinacao)];

  return [getStyle, getSize, getRotation, getInclination];
};

//
const recreateClasses = (theSpan) => {
  const teste = sortClasses();
  const palavra = theSpan.target;
  palavra.className = teste.join(' ');
};

// Adiciona varias span no paragrafo
const generateWords = () => {
  geraCard.innerHTML = null;
  const getInput = document
    .getElementById('carta-texto')
    .value.trim()
    .split(' ');
  for (let i = 0; i < getInput.length; i += 1) {
    const createSpan = document.createElement('span');
    createSpan.innerText = getInput[i];
    const getSpansx = sortClasses();
    createSpan.className = getSpansx.join(' ');
    geraCard.appendChild(createSpan);
    createSpan.addEventListener('click', recreateClasses);
  }
};

// Contador de palavras
const countWords = () => {
  const getCount = document.getElementById('carta-contador');

  getCount.innerHTML = getSpans.length;
};

// Renderiza as palavras na tela
const createWords = () => {
  const getRenderBtn = document.getElementById('criar-carta');
  getRenderBtn.addEventListener('click', () => {
    if (theInput.value.trim() === '') {
      geraCard.innerText = 'Por favor, digite o conteúdo da carta.';
    } else {
      generateWords();
      countWords();
    }
  });
};

window.onload = () => {
  createWords();
};
