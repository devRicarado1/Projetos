// [colecao.js]

// Variáveis de Elementos DOM
const containerColecao = document.getElementById("produtos-colecao");
const rangeInput = document.getElementById('price-range');
const priceValueSpan = document.getElementById('price-value');

// NOVO: Variáveis para Ordenação (Desktop)
let ordenacaoAtual = 'vendidos-desc'; // Padrão: Mais Vendidos
const btnOrdenacao = document.getElementById('btn-ordenacao');
const opcoesOrdenacao = document.querySelectorAll('.dropdown-menu .dropdown-item');

// Checkboxes de Categoria (Lembre-se de adicionar a classe '.filtro-categoria' no seu HTML)
const checkboxesCategoria = document.querySelectorAll('.filtro-categoria');


// =========================================================
// BASE DE DADOS FAKE
// =========================================================
const produtosColecao = [
    // Novas propriedades: vendidos e dataLancamento (para a ordenação)
    { id: 1, nome: "Conjunto Cropped Manga Bufante e Short Saia", preco: 129.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-28-09-2025-01-10-09.jpg", categoria: "Conjuntos", vendidos: 120, dataLancamento: new Date('2025-09-01') },
    { id: 2, nome: "Vestido Longo Tomara Que Caia Recortes", preco: 109.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-24-09-2025-22-54-50.jpg", categoria: "Vestidos", vendidos: 85, dataLancamento: new Date('2025-09-25') },
    { id: 3, nome: "Vestido Cut-Out Midi com Amarração", preco: 89.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-27-09-2025-23-00-35.jpg", categoria: "Vestidos", vendidos: 150, dataLancamento: new Date('2025-10-01') },
    { id: 4, nome: "Conjunto Regata Aberta e Short", preco: 189.90, img: "https://s.lilianstoreatacado.com.br/product/2025/08/facetune-03-08-2025-13-49-15-jpg.jpg", categoria: "Conjuntos", vendidos: 60, dataLancamento: new Date('2025-08-15') },
    { id: 5, nome: "Conjunto Feminino Soft Chic - Top Tomara que Caia + Short Cintura Alta", preco: 69.90, img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-52-00.jpg", categoria: "Blusas", vendidos: 210, dataLancamento: new Date('2025-07-20') },
    { id: 6, nome: "Vestido Longo com Recorte na Cintura e Alças Finas", preco: 99.90, img: "https://s.lilianstoreatacado.com.br/product/2025/10/img-8471.jpg", categoria: "Saias", vendidos: 45, dataLancamento: new Date('2025-09-10') },
    { id: 7, nome: "Vestido Botoné Classy", preco: 79.90, img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-34-43.jpg", categoria: "Vestidos", vendidos: 95, dataLancamento: new Date('2025-08-01') },
    { id: 8, nome: "Vestido Longo Tomara que Caia com Recorte Frontal, Fenda Lateral e Detalhe em Strass", preco: 259.90, img: "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-20-56-51.jpg", categoria: "Conjuntos", vendidos: 30, dataLancamento: new Date('2025-09-18') },
    { id: 9, nome: "Conjunto Alfaiataria Minimal com Recortes e Saia Curta de Cintura Alta", preco: 119.90, img: "https://s.lilianstoreatacado.com.br/product/2025/09/img-5633.jpg", categoria: "Blusas", vendidos: 75, dataLancamento: new Date('2025-07-05') },
    { id: 10, nome: "Conjunto Feminino 3 Peças: Cropped + Shorts + Kimono Estilo Casual Chic", preco: 139.90, img: "https://s.lilianstoreatacado.com.br/product/2025/08/img-2499.jpg", categoria: "Conjuntos", vendidos: 110, dataLancamento: new Date('2025-06-01') },
];


// =========================================================
// FUNÇÕES DE EXIBIÇÃO E LÓGICA
// =========================================================

/**
 * Renderiza os cards de produtos no container
 * @param {Array} lista - A lista de produtos a ser exibida.
 */
function renderizarProdutos(lista) {
    containerColecao.innerHTML = ''; // Limpa antes de renderizar

    if (lista.length === 0) {
        containerColecao.innerHTML = `
            <div class="col-12">
                <div class="alert alert-warning text-center" role="alert">
                    <h4 class="alert-heading">Sem Resultados!</h4>
                    Nenhum produto encontrado com os filtros e preços selecionados.
                </div>
            </div>
        `;
        return;
    }

    lista.forEach(p => {
        const card = document.createElement("div");
        // Ajustei para col-xl-3 para exibir 4 produtos por linha em telas grandes
        card.className = "col-xl-3 col-lg-4 col-md-6 mb-4"; 
        card.innerHTML = `
            <div class="card h-100">
              <a href="produto.html?id=${p.id}"><img src="${p.img}" class="card-img-top" alt="${p.nome}"></a>
              <div class="card-body text-center p-2">
                <p class="card-text text-muted mb-1 text-truncate">${p.nome}</p>
                <h5 class="fw-bold">R$ ${p.preco.toFixed(2)}</h5>
                <a href="produto.html?id=${p.id}" class="btn btn-sm btn-outline-dark mt-1">Ver Produto</a>
              </div>
            </div>
        `;
        containerColecao.appendChild(card);
    });
}

/**
 * Ordena a lista de produtos com base no critério atual.
 * @param {Array} lista - A lista de produtos (já filtrada).
 * @returns {Array} A lista ordenada.
 */
function ordenarProdutos(lista) {
    switch (ordenacaoAtual) {
        case 'preco-asc':
            // Menor Preço (crescente)
            lista.sort((a, b) => a.preco - b.preco);
            break;
        case 'preco-desc':
            // Maior Preço (decrescente)
            lista.sort((a, b) => b.preco - a.preco);
            break;
        case 'novidades-desc':
            // Novidades (data de lançamento mais recente primeiro)
            lista.sort((a, b) => b.dataLancamento.getTime() - a.dataLancamento.getTime());
            break;
        case 'vendidos-desc':
        default:
            // Mais Vendidos (decrescente)
            lista.sort((a, b) => b.vendidos - a.vendidos);
            break;
    }
    return lista;
}

/**
 * Função principal que aplica todos os filtros e a ordenação.
 */
function filtrarProdutos() {
    const precoMaximo = parseFloat(rangeInput.value);

    // 1. FILTRO por CATEGORIA
    const categoriasSelecionadas = Array.from(checkboxesCategoria)
        .filter(cb => cb.checked)
        .map(cb => cb.getAttribute('data-categoria'));

    let produtosFiltrados = produtosColecao;

    if (categoriasSelecionadas.length > 0) {
        produtosFiltrados = produtosFiltrados.filter(p =>
            categoriasSelecionadas.includes(p.categoria)
        );
    }
    
    // IMPORTANTE: Criamos uma cópia do array filtrado para poder ordená-lo 
    // e evitar modificar o array original 'produtosColecao'
    let produtosProcessados = produtosFiltrados.slice(); 

    // 2. FILTRO por PREÇO
    produtosProcessados = produtosProcessados.filter(p => p.preco <= precoMaximo);
    
    // 3. ORDENAÇÃO
    produtosProcessados = ordenarProdutos(produtosProcessados);

    // 4. Renderiza a lista processada (filtrada e ordenada)
    renderizarProdutos(produtosProcessados);
}


// =========================================================
// INTERAÇÃO E EVENTOS
// =========================================================
document.addEventListener('DOMContentLoaded', () => {

    // 1. Eventos do Slider de Preço
    if (rangeInput && priceValueSpan) {
        // Inicializa o display do valor do preço
        priceValueSpan.textContent = `R$ ${rangeInput.value},00`;

        rangeInput.addEventListener('input', (e) => {
            // Atualiza o valor exibido
            priceValueSpan.textContent = `R$ ${e.target.value},00`;
            // Aplica o filtro imediatamente
            filtrarProdutos(); 
        });
    }

    // 2. Eventos dos Checkboxes de Categoria
    checkboxesCategoria.forEach(cb => {
        cb.addEventListener('change', filtrarProdutos);
    });
    
    // 3. Eventos do Dropdown de Ordenação
    opcoesOrdenacao.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            
            const novoSort = e.target.getAttribute('data-sort');
            const textoDisplay = e.target.textContent;

            ordenacaoAtual = novoSort; // Atualiza a variável global
            btnOrdenacao.textContent = `Ordenar por: ${textoDisplay}`; // Atualiza o texto do botão
            
            filtrarProdutos(); // Re-filtra e re-ordena a lista
        });
    });

    // 4. Chamada inicial
    // Garante que, ao carregar a página, a lista é exibida com os filtros/ordenamento padrão.
    filtrarProdutos(); 
});