// Lista de produtos fake
const produtos = [
    { nome: "Blusa de Linho", preco: 99.90, img: "https://via.placeholder.com/400x300?text=Blusa+Linho" },
    { nome: "Calça Pantacourt", preco: 159.90, img: "https://via.placeholder.com/400x300?text=Calca+Pantacourt" },
    { nome: "Vestido Floral Midi", preco: 139.90, img: "https://via.placeholder.com/400x300?text=Vestido+Midi" },
    { nome: "Cardigan Tricot", preco: 189.90, img: "https://via.placeholder.com/400x300?text=Cardiga+Tricot" }
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
