class Particula {
  // este método se ecuta automáticamente
  constructor(_x, _y) {
    this.posx = _x;
    this.posy = _y;
    this.estaViva = true;
    // tVida es el tiempo que tiene de vida
    this.tVida = round(random(16, 200));
    this.tamano = 50;
  }
  update() {
    this.tVida -= 1;
    if (this.tVida <= 0) {
      this.estaViva = false;
      return;
    }
    this.posy += 2;
    this.posx += random(-30, 10);
    this.tamano -= 0.8;
  }
  display() {
    fill(227, 104, 143);
    noStroke();
    circle(this.posx + 24, this.posy + 12, this.tVida);
  }
}
