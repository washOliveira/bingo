const botaoGerarCartela = document.getElementById("gerar-cartela");
const cartelaDiv = document.getElementById("cartela");

// Função para gerar números aleatórios
function gerarNumerosBingo() {
  const ranges = {
    B: [1, 15],
    I: [16, 30],
    N: [31, 45],
    G: [46, 60],
    O: [61, 75],
  };

  const cartela = [];
  for (const letra in ranges) {
    const [min, max] = ranges[letra];
    const numeros = [];
    while (numeros.length < 5) {
      const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
      if (!numeros.includes(numeroAleatorio)) {
        numeros.push(numeroAleatorio);
      }
    }
    cartela.push(...numeros);
  }
  cartela[12] = "FREE"; // Espaço central "GRÁTIS"
  return cartela;
}

// Função para exibir a cartela
function exibirCartela() {
  const numeros = gerarNumerosBingo();
  cartelaDiv.innerHTML = ""; // Limpar a cartela anterior
  numeros.forEach((numero, index) => {
    const celula = document.createElement("div");
    celula.textContent = numero;
    celula.classList.add("celula");
    if (numero === "FREE") {
      celula.classList.add("marcado"); // Marca o espaço "FREE"
    } else {
      celula.addEventListener("click", () => {
        celula.classList.toggle("marcado");
      });
    }
    cartelaDiv.appendChild(celula);
  });
  cartelaDiv.classList.remove("hidden");
}

// Evento para gerar uma nova cartela
botaoGerarCartela.addEventListener("click", exibirCartela);
