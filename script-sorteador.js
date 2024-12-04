let numeros = Array.from({ length: 75 }, (_, i) => i + 1);
let numerosSorteados = [];

const numerosDiv = document.getElementById("numbers");
const ultimoNumeroP = document.getElementById("ultimo-numero");
const botaoSortear = document.getElementById("sortear");
const botaoReiniciar = document.getElementById("reiniciar");

// Função para obter a letra correspondente
function obterLetra(numero) {
  if (numero <= 15) return "B";
  if (numero <= 30) return "I";
  if (numero <= 45) return "N";
  if (numero <= 60) return "G";
  return "O";
}

// Inicializar os números no tabuleiro
function criarTabuleiro() {
  numerosDiv.innerHTML = '';
  for (let i = 1; i <= 75; i++) {
    const numero = document.createElement("div");
    numero.textContent = `${obterLetra(i)}${i}`;
    numerosDiv.appendChild(numero);
  }
}

// Sortear um número
function sortearNumero() {
  if (numeros.length === 0) {
    alert("Todos os números foram sorteados!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * numeros.length);
  const numeroSorteado = numeros.splice(indiceAleatorio, 1)[0];
  numerosSorteados.push(numeroSorteado);

  // Atualizar tabuleiro
  const divs = numerosDiv.children;
  divs[numeroSorteado - 1].classList.add("sorteado");

  // Exibir o último número sorteado com a letra correspondente
  const letra = obterLetra(numeroSorteado);
  ultimoNumeroP.textContent = `Último número sorteado: ${letra}${numeroSorteado}`;

  // Exibir botão de reiniciar se todos os números foram sorteados
  if (numeros.length === 0) {
    botaoSortear.classList.add("hidden");
    botaoReiniciar.classList.remove("hidden");
  }
}

// Reiniciar o jogo
function reiniciar() {
  numeros = Array.from({ length: 75 }, (_, i) => i + 1);
  numerosSorteados = [];
  criarTabuleiro();
  ultimoNumeroP.textContent = '';
  botaoSortear.classList.remove("hidden");
  botaoReiniciar.classList.add("hidden");
}

// Altera o emoji ao clicar
const emojiSpan = document.getElementById("emoji");

// Lista de emojis alternados
const emojis = ["🩶", "❤️"];
let emojiIndex = 0;

emojiSpan.addEventListener("click", () => {
  // Atualiza o índice para o próximo emoji
  emojiIndex = (emojiIndex + 1) % emojis.length;
  emojiSpan.textContent = emojis[emojiIndex];
});

// Eventos
botaoSortear.addEventListener("click", sortearNumero);
botaoReiniciar.addEventListener("click", reiniciar);

// Inicializar a página
criarTabuleiro();
