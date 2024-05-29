function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(0);
  }
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(0, 0, 50);
  }
  
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 15;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha = xBolinha + 1;
  }
  
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;
  
  function setup() {
      createCanvas(600, 400);
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha += velocidadeXBolinha;
      //yBolinha += velocidadeYBolinha;
      
      if (xBolinha > width) {
          velocidadeXBolinha *= -1;
      }
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha += velocidadeXBolinha;
      //yBolinha += velocidadeYBolinha;
      
     if (xBolinha > width || xBolinha < 0) {
      velocidadeXBolinha *= -1;
      }
  }
  
  function draw() {
      background(0);
      circle(xBolinha, yBolinha, diametro);
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
      
      if (xBolinha > width || xBolinha < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha > height || yBolinha < 0) {
          velocidadeYBolinha *= -1;
      }
  }
  
  xBolinha = 300;
  yBolinha = 200;
   diametro = 15;
   raio = diametro /2;
  
      velocidadeXBolinha *= -1;
  
      velocidadeYBolinha *= -1;
  
  
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
  }
  
  function mostraBolinha() {
      circle(xBolinha, yBolinha, diametro)
  }
  
  function movimentaBolinha() {
      xBolinha += velocidadeXBolinha;
      yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
      if (xBolinha + raio > width || xBolinha - raio < 0) {
          velocidadeXBolinha *= -1;
      }
      if (yBolinha + raio > height || yBolinha - raio < 0) {
          velocidadeYBolinha *= -1;
      }
  }
  
  //variáveis da bolinha
   xBolinha = 300;
   yBolinha = 200;
   diametro = 15;
   raio = diametro / 2;
  
  //velocidade da bolinha
   velocidadeXBolinha = 6;
   velocidadeYBolinha = 6;
  
  rect(x, y, w, h)
  
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
      rect(5, 150, 10, 90);
  }
  
  //variáveis da raquete
  let xRaquete = 5;
  let yRaquete = 150;
  let raqueteComprimento = 10;
  let raqueteAltura = 90;
  
  function mostraRaquete() {
      rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  }
  
  function draw() {
      background(0);
      mostraBolinha();
      movimentaBolinha();
      verificaColisaoBorda();
      mostraRaquete();
  }
  
  function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  
   //variáveis da bolinha
   xBolinha = 100;
   yBolinha = 200;
   diametro = 22;
   raio = diametro / 2;
  
  //velocidade da bolinha
   velocidadeXBolinha = 6;
   velocidadeYBolinha = 6;
  
  //variáveis da raquete
   xRaquete = 5;
   yRaquete = 150;
   raqueteComprimento = 10;
   raqueteAltura = 90;
  
  let colidiu = false;
  
  function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete();
    movimentaMinhaRaquete();
    // verificaColisaoRaquete();
    colisaoMinhaRaqueteBiblioteca();
  }
  
  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
  
  function mostraRaquete() {
    rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
  }
  
  function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  
  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
  }
  
  function colisaoMinhaRaqueteBiblioteca() {
    colidiu = collideRectCircle(xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu) {
      velocidadeXBolinha *= -1;
    }
  }
  function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
  }
  //variáveis do oponente
  let xRaqueteOponente = 585;
  let yRaqueteOponente = 150;
  mostraRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  let velocidadeYOponente;
  
  function mostraRaquete(x,y) {
      rect(x, y, raqueteComprimento, raqueteAltura);
  }
  function draw() {
      background(0);
      mostraBolinha();
      //movimentaBolinha();
      verificaColisaoBorda();
      movimentaMinhaRaquete();
      //verificaColisaoRaquete();
      colisaoMinhaRaqueteBiblioteca();
      mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  }
  
  function movimentaRaqueteOponente() {
      
  }
  //variáveis do oponente
   xRaqueteOponente = 585;
   yRaqueteOponente = 150;
  
  function movimentaRaqueteOponente() {
      velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
      yRaqueteOponente += velocidadeYOponente
  }
  
  function verificaColisaoRaquete(x, y) {
      colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
      if (colidiu){
          velocidadeXBolinha *= -1;
      }
  }
  //placar do jogo
  let meusPontos = 0;
  let pontosDoOponente = 0;
  
  function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
  }
  
  function marcaPonto() {
    if (xBolinha > 590) {
      meusPontos += 1;
    }
    if (xBolinha < 10) {
      pontosDoOponente += 1;
    }
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
  }
  //variáveis da bolinha
   xBolinha = 100;
   yBolinha = 200;
   diametro = 22;
   raio = diametro / 2;
  
  //velocidade da bolinha
   velocidadeXBolinha = 6;
   velocidadeYBolinha = 6;
  
  //variáveis da raquete
   xRaquete = 5;
   yRaquete = 150;
   raqueteComprimento = 10;
   raqueteAltura = 90;
  
  //variáveis do oponente
   xRaqueteOponente = 585;
   yRaqueteOponente = 150;
   velocidadeYOponente;
  
   colidiu = false;
  
  //placar do jogo
   meusPontos = 0;
   pontosDoOponente = 0;
  
  function setup() {
    createCanvas(600, 400);
  }
  
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
    mostraRaquete(xRaquete, yRaquete);
    mostraRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaMinhaRaquete();
    // verificaColisaoRaquete();
    verificaColisaoRaquete(xRaquete, yRaquete);
    verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
    movimentaRaqueteOponente();
    incluiPlacar();
    marcaPonto();
  }
  
  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  
  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
  
  function mostraRaquete(x,y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
  }
  
  function movimentaMinhaRaquete() {
    if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
    }
    if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
    }
  }
  
  function verificaColisaoRaquete() {
    if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
      velocidadeXBolinha *= -1;
    }
  }
  
  function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if(colidiu) {
      velocidadeXBolinha *= -1;
    }
  }
  
  function movimentaRaqueteOponente() {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente;
  }
  
  function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
  }
  
  function marcaPonto() {
    if (xBolinha > 590) {
      meusPontos += 1;
    }
    if (xBolinha < 10) {
      pontosDoOponente += 1;
    }
  }
  //movimentaBolinha();
  function incluirPlacar() {
      textAlign(CENTER);
      textSize(16);
      fill(255);
      text(meusPontos, 278, 26);
      text(pontosDoOponente, 321, 26);
  function incluiPlacar() {
      textAlign(CENTER);
      textSize(16);
      fill(255);
      text(meusPontos, 150, 26);
      text(pontosDoOponente, 450, 26);
  }
  
  
  function incluiPlacar() {
      textAlign(CENTER);
      textSize(16);
      fill(255);
      rect(150, 10, 40, 20);
      text(meusPontos, 150, 26);
      rect(450, 10, 40, 20);
      text(pontosDoOponente, 450, 26);
  }
  function incluiPlacar(){
      textAlign(CENTER);
      textSize(16);
      fill(color(255,140, 0));
      rect(150, 10, 40, 20);
      fill(255);
      text(meusPontos, 150, 26);
      fill(color(255,140, 0));
      rect(450, 10, 40, 20);
      fill(255);
      text(pontosDoOponente, 450, 26);
  
  }
  function incluirPlacar(){
      stroke(255)
      textAlign(CENTER);
      textSize(16);
      fill(color(255,140, 0));
      rect(150, 10, 40, 20);
      fill(255);
      text(meusPontos, 170, 26);
      fill(color(255,140, 0));
      rect(450, 10, 40, 20);
      fill(255);
      text(pontosDoOponente, 470, 26);
  }
   let diametro=13;
  //sons do jogo
  let raquetada;
  let ponto;
  let trilha;
  function preload(){
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
  }
  function setup() {
    createCanvas(600, 400);
    trilha.loop();
  }
  function verificaColisaoRaquete() {
      if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
          velocidadeXBolinha *= -1;
          raquetada.play();
      }
  }
  
  function verificaColisaoRaquete(x, y) {
      colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
      if (colidiu) {
          velocidadeXBolinha *= -1;
          raquetada.play();
      }
  }
  function marcaPonto() {
      if (xBolinha > 590) {
          meusPontos += 1;
          ponto.play();
      }
      if (xBolinha < 10) {
          pontosDoOponente += 1;
          ponto.play();
      }
  }
  function movimentaRaqueteOponente(){
      if (keyIsDown(87)){
          yRaqueteOponente -= 10;
      }
      if (keyIsDown(83)){
          yRaqueteOponente += 10;
      }
  }
  