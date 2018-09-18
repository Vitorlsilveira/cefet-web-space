
const servidorDasImagens = 'https://fegemo.github.io/cefet-web/images/',
  todasAsImagens = [
    'philae-parts.jpg',
    'philae-rosetta.jpg',
    'philae-separation.jpg',
    'philae-67-picture.jpg',
    'philae-collecting.jpg'
  ];

 //busca elementos
let image = document.querySelector('#slide');
let buttonNext = document.querySelector('#proximo');
let buttonPrevious = document.querySelector('#anterior');

buttonNext.addEventListener('click', () => changeImage(1));
buttonPrevious.addEventListener('click', () => changeImage(-1));

function changeImage(valueButton){
  var position = todasAsImagens.indexOf(image.src.split("/").pop()) + valueButton;
  position = (position + todasAsImagens.length) % todasAsImagens.length;
  var newImageSrc = servidorDasImagens + todasAsImagens[position];
  image.src = newImageSrc;
}
