// [home.js]

// Variáveis de Elementos DOM
const containerLancamentos = document.getElementById("produtos-container"); // Usando o ID da sua seção Lançamentos
const containerPromocoes = document.getElementById("promocoes-container");
const badge = document.querySelector(".badge");
let carrinho = 0;


// =========================================================
// 1. BASE DE DADOS UNIFICADA (Adicionado ID, oferta, precoAntigo)
// =========================================================
// [produtosColecao.js]

const produtosColecao = [
  // --- PRODUTOS REGULARES / LANÇAMENTOS ---
  {
    id: 1,
    nome: "Conjunto Cropped Manga Bufante e Short Saia",
    preco: 129.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-28-09-2025-01-10-09.jpg",
    categoria: "Conjuntos",
    vendidos: 120,
    dataLancamento: new Date('2025-09-01'),
    tamanhos: ["P", "M", "G"], // NOVO: Tamanhos
    oferta: false, // NOVO: Não está em oferta
    precoAntigo: null // NOVO: Sem preço antigo
  },
  {
    id: 2,
    nome: "Vestido Longo Tomara Que Caia Recortes",
    preco: 109.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-24-09-2025-22-54-50.jpg",
    categoria: "Vestidos",
    vendidos: 85,
    dataLancamento: new Date('2025-09-25'),
    tamanhos: ["M", "G"],
    oferta: false,
    precoAntigo: null
  },
  {
    id: 3,
    nome: "Vestido Cut-Out Midi com Amarração",
    preco: 89.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-27-09-2025-23-00-35.jpg",
    categoria: "Vestidos",
    vendidos: 150,
    dataLancamento: new Date('2025-10-01'), // Mais recente
    tamanhos: ["P", "M", "G"],
    oferta: true,
    precoAntigo: null
  },
  {
    id: 4,
    nome: "Conjunto Regata Aberta e Short",
    preco: 189.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/08/facetune-03-08-2025-13-49-15-jpg.jpg",
    categoria: "Conjuntos",
    vendidos: 60,
    dataLancamento: new Date('2025-08-15'),
    tamanhos: ["G", "GG"],
    oferta: true,
    precoAntigo: null
  },

  // --- PRODUTO EM PROMOÇÃO (OFERTA) ---
  {
    id: 5,
    nome: "Conjunto Feminino Soft Chic - Top Tomara que Caia + Short Cintura Alta",
    preco: 69.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-52-00.jpg",
    categoria: "Blusas",
    vendidos: 210, // Mais vendido
    dataLancamento: new Date('2025-07-20'),
    tamanhos: ["P", "M"],
    oferta: true, // NOVO: Em Oferta!
    precoAntigo: 99.90 // NOVO: Preço de R$ 99.90 riscado
  },

  // --- PRODUTOS REGULARES / LANÇAMENTOS ---
  {
    id: 6,
    nome: "Vestido Longo com Recorte na Cintura e Alças Finas",
    preco: 99.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/10/img-8471.jpg",
    categoria: "Saias",
    vendidos: 45,
    dataLancamento: new Date('2025-09-10'),
    tamanhos: ["P", "M", "G"],
    oferta: true,
    precoAntigo: null
  },

  // --- PRODUTO EM PROMOÇÃO (OFERTA) ---
  {
    id: 7,
    nome: "Vestido Botoné Classy",
    preco: 79.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-34-43.jpg",
    categoria: "Vestidos",
    vendidos: 95,
    dataLancamento: new Date('2025-08-01'),
    tamanhos: ["M", "G"],
    oferta: true, // NOVO: Em Oferta!
    precoAntigo: 119.90 // NOVO: Preço de R$ 119.90 riscado
  },

  // --- PRODUTOS REGULARES / LANÇAMENTOS ---
  {
    id: 8,
    nome: "Vestido Longo Tomara que Caia com Recorte Frontal, Fenda Lateral e Detalhe em Strass",
    preco: 259.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-20-56-51.jpg",
    categoria: "Conjuntos",
    vendidos: 30,
    dataLancamento: new Date('2025-09-18'),
    tamanhos: ["P"],
    oferta: false,
    precoAntigo: null
  },
  {
    id: 9,
    nome: "Conjunto Alfaiataria Minimal com Recortes e Saia Curta de Cintura Alta",
    preco: 119.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/09/img-5633.jpg",
    categoria: "Blusas",
    vendidos: 75,
    dataLancamento: new Date('2025-07-05'),
    tamanhos: ["M", "G", "GG"],
    oferta: false,
    precoAntigo: null
  },
  {
    id: 10,
    nome: "Conjunto Feminino 3 Peças: Cropped + Shorts + Kimono Estilo Casual Chic",
    preco: 139.90,
    img: "https://s.lilianstoreatacado.com.br/product/2025/08/img-2499.jpg",
    categoria: "Conjuntos",
    vendidos: 110,
    dataLancamento: new Date('2025-06-01'),
    tamanhos: ["P", "M"],
    oferta: false,
    precoAntigo: null
  },
];


// =========================================================
// 2. FUNÇÃO DE RENDERIZAÇÃO UNIFICADA
// =========================================================

function renderizarProdutosHome(lista, container) {
  container.innerHTML = ''; // Limpa antes de renderizar

  // Limita o display a 4 produtos por linha (se a lista for maior)
  const listaLimitada = lista.slice(0, 4);

  if (listaLimitada.length === 0) {
    container.innerHTML = `<div class="col-12"><p class="text-center text-muted">Nenhum produto encontrado nesta seção.</p></div>`;
    return;
  }

  listaLimitada.forEach(p => {
    // Lógica para Preço de Oferta
    const precoHtml = p.oferta && p.precoAntigo
      ? `<p class="small text-muted text-decoration-line-through mb-0">R$ ${p.precoAntigo.toFixed(2)}</p><h5 class="fw-bold text-danger">R$ ${p.preco.toFixed(2)}</h5>`
      : `<h5 class="fw-bold">R$ ${p.preco.toFixed(2)}</h5>`;

    const card = document.createElement("div");
    card.className = "col-xl-3 col-lg-3 col-md-6 mb-4";
    card.innerHTML = `
                <div class="card h-100">
                    <a href="produto.html?id=${p.id}"><img src="${p.img}" class="card-img-top" alt="${p.nome}"></a>
                    <div class="card-body text-center p-2">
                        <p class="card-text text-muted mb-1 text-truncate">${p.nome}</p>
                        ${precoHtml}
                        <button class="btn btn-sm btn-outline-success mt-1 btn-add" data-id="${p.id}">Adicionar</button> 
                    </div>
                </div>
            `;
    container.appendChild(card);
  });
}


// =========================================================
// 3. EVENTOS DE CARRINHO
// =========================================================

// Esta lógica precisa ser aplicada APÓS a renderização dos produtos!
function adicionarEventosCarrinho() {
  document.querySelectorAll(".btn-add").forEach(btn => {
    btn.addEventListener("click", (e) => {
      // 1. Pega o ID do produto que foi clicado
      const produtoId = parseInt(e.currentTarget.getAttribute('data-id'));

      // 2. Encontra o objeto completo do produto na lista principal
      const produtoParaAdicionar = produtosColecao.find(p => p.id === produtoId);

      if (produtoParaAdicionar) {
        // 3. Chama a função global (de carrinho.js). 
        // Por padrão, adicionamos 1 unidade. Tamanho é null na Home.
        adicionarAoCarrinho(produtoParaAdicionar, 1, null);

        // Opcional: abre o painel lateral automaticamente ao adicionar
        const offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasCarrinho'));
        offcanvas.show();

      } else {
        console.error("Produto não encontrado na coleção:", produtoId);
      }
    });
  });
}


// =========================================================
// 4. INICIALIZAÇÃO DA PÁGINA
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

  // --- LÓGICA DE LANÇAMENTOS ---
  // Filtra produtos que NÃO estão em oferta e ordena pela data mais recente
  let lancamentos = produtosColecao
    .filter(p => !p.oferta)
    .sort((a, b) => b.dataLancamento.getTime() - a.dataLancamento.getTime());

  renderizarProdutosHome(lancamentos, containerLancamentos);


  // --- LÓGICA DE PROMOÇÕES ---
  // Filtra produtos que estão em oferta
  let promocoes = produtosColecao
    .filter(p => p.oferta);

  renderizarProdutosHome(promocoes, containerPromocoes);


  // lógica do carrinho APÓS os produtos serem renderizados
  adicionarEventosCarrinho();
});