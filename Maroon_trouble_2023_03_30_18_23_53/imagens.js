//Imagens e sons;

let imagemEstrada;
let imagemAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

//sons
let somTrilha;
let somColisao;
let somPonto;

function preload(){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemAtor = loadImage ("imagens/ator-1.png");
  imagemCarro = loadImage ("imagens/carro-1.png");
  imagemCarro2 = loadImage ("imagens/carro-2.png");
  imagemCarro3 = loadImage ("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];

  somTrilha = loadSound("sons/fellgood.mp3.wav");
  somColisao = loadSound ("sons/pop.mp3.wav");
  somPonto = loadSound ("sons/ponto.mp3")
}