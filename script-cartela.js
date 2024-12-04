const botaoGerarCartela = document.getElementById("gerar-cartela");
const cartelaDiv = document.getElementById("cartela");

// Função para obter a letra correspondente
function obterLetra(numero) {
  if (numero <= 15) return "B";
  if (numero <= 30) return "I";
  if (numero <= 45) return "N";
  if (numero <= 60) return "G";
  return "O";
}

// Função para gerar números aleatórios com letras
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
    cartela.push(...numeros.map((n) => ({ letra: obterLetra(n), numero: n })));
  }
  cartela[12] = { letra: "", numero: "FREE" }; // Espaço central "GRÁTIS"
  return cartela;
}

// Função para exibir a cartela
function exibirCartela() {
  const numeros = gerarNumerosBingo();
  cartelaDiv.innerHTML = ""; // Limpar a cartela anterior
  numeros.forEach((item, index) => {
    const celula = document.createElement("div");
    celula.textContent = item.letra ? `${item.letra}${item.numero}` : item.numero;
    celula.classList.add("celula");
    if (item.numero === "FREE") {
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
