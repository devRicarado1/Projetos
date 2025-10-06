// Lista de produtos fake
const produtos = [
    { nome: "CONJUNTO CROPPED COM MANGA BUFANTE E SHORT SAIA COM BOTÕES FLORAIS", preco: 129.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-28-09-2025-01-10-09.jpg" },
    { nome: "VESTIDO LONGO TOMARA QUE CAIA COM RECORTES E DETALHE METÁLICO", preco: 109.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-24-09-2025-22-54-50.jpg" },
    { nome: "VESTIDO CUT-OUT MIDI COM AMARRAÇÃO FRONTAL", preco: 89.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-27-09-2025-23-00-35.jpg" },
    { nome: "Conjunto Feminino com Regata Aberta nas Costas e Short com Bolsos", preco: 189.90, img: "https://s.lilianstoreatacado.com.br/product/2025/08/facetune-03-08-2025-13-49-15-jpg.jpg" }
    
];

const container = document.getElementById("produtos-container");
const badge = document.querySelector(".badge");
let carrinho = 0;

// Renderizar produtos dinamicamente
produtos.forEach(p => {
    const card = document.createElement("div");
    card.className = "col-lg-3 col-md-6 mb-4";
    card.innerHTML = `
    <div class="card h-100">
      <img src="${p.img}" class="card-img-top" alt="${p.nome}">
      <div class="card-body text-center p-2">
        <p class="card-text text-muted mb-1">${p.nome}</p>
        <h5 class="fw-bold">R$ ${p.preco.toFixed(2)}</h5>
        <button class="btn btn-sm btn-outline-success mt-1 btn-add">Adicionar</button>
      </div>
    </div>
  `;
    container.appendChild(card);
});

// Interação: adicionar ao carrinho
document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", () => {
        carrinho++;
        badge.textContent = carrinho;
        alert("Produto adicionado ao carrinho!");
    });
});
