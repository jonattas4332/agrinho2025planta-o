let arvores = [];
let temperatura = 35; // Temperatura inicial em graus Celsius

function setup() {
  createCanvas(800, 600);
  textFont('Arial');
}

function draw() {
  background(180, 230, 255); // Céu azul claro

  // Desenha o chão
  fill(60, 180, 75); // Verde
  rect(0, height - 100, width, 100);

  // Mostrar todas as árvores plantadas
  for (let arvore of arvores) {
    drawArvore(arvore.x, arvore.y);
  }

  // Atualizar e mostrar a temperatura
  fill(0);
  textSize(24);
  textAlign(LEFT);
  text("Temperatura Global: " + nf(temperatura, 2, 1) + " °C", 20, 40);
  text("Clique para plantar uma árvore 🌳", 20, 70);
}

function mousePressed() {
  if (mouseY < height - 100) {
    // Adiciona uma nova árvore
    arvores.push({ x: mouseX, y: mouseY });

    // Diminui a temperatura, com limite mínimo
    if (temperatura > 15) {
      temperatura -= 0.2;
    }
  }
}

function drawArvore(x, y) {
  // Tronco
  fill(101, 67, 33);
  rect(x - 5, y, 10, 40);

  // Copa da árvore
  fill(34, 139, 34);
  ellipse(x, y, 50, 50);
}
