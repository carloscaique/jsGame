//ator
let xAtor = 85;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image (imagemAtor, xAtor, yAtor, 30, 30);
}


function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
   if (podeMover()){
    yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1){
   colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)  
    if (colisao){
      voltaPosicaoAtor();
      somColisao.play();
    if (pontosMaiorQueZero()){
      meusPontos -= 1;  
     }
    }
  }
}

function voltaPosicaoAtor(){
  yAtor = 366;
}

function incluiPontos(){
  text (meusPontos, width / 5, 27);
  textSize(25);
  textAlign(CENTER);
  fill(255, 240, 60);
}

function marcaPonto(){
  if (yAtor < 14){
    somPonto.play ();
    meusPontos += 1;
    voltaPosicaoAtor();  
  }
}

function pontosMaiorQueZero(){
  return  meusPontos > 0;
}

function podeMover(){
  return yAtor < 366;
}


