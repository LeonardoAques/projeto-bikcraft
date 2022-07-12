// Ativar links do Menu
const links = document.querySelectorAll('.header-menu a');


function ativarLink(link) {
  const url = location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);




// Ativar itens do Orçamento
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if(elemento) {
    elemento.checked = true;
  };
};

parametros.forEach(ativarProduto);




// Perguntas Frequentes
const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controles = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controles);

  resposta.classList.toggle('ativa');
  const ativa = resposta.classList.contains('ativa');
  pergunta.setAttribute('aria-expended', ativa);
}

function eventoPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
};

perguntas.forEach(eventoPerguntas);




// Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens')

function trocarImagem(event) {
  const img = event.currentTarget;
  const media = matchMedia('(min-width: 800px');
  if(media) {
    galeriaContainer.prepend(img);
  }
  
  console.log(media);
}

function eventosGaleria(img) {
  img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);



// Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}



