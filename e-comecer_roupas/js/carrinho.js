// [carrinho.js]

// Array central para armazenar os itens do carrinho
let carrinhoItens = [];

// Elementos DOM
const listaItensContainer = document.getElementById('lista-itens-carrinho');
const subtotalElement = document.getElementById('subtotal-carrinho');
const contadorNav = document.getElementById('contador-carrinho-nav'); 
const contadorHeader = document.getElementById('contador-carrinho-header');
const mensagemVazio = document.getElementById('carrinho-vazio-mensagem');
const btnFinalizar = document.getElementById('btn-finalizar-compra');


// =========================================================
// 1. FUNÇÕES PRINCIPAIS DE CÁLCULO E RENDERIZAÇÃO
// =========================================================

/**
 * Atualiza o subtotal e todos os contadores do carrinho.
 * Esta função é a principal e deve ser chamada sempre que a lista for alterada.
 */
function atualizarCarrinhoGeral() {
    let totalItens = 0;
    let subtotal = 0;

    carrinhoItens.forEach(item => {
        totalItens += item.quantidade;
        subtotal += item.produto.preco * item.quantidade;
    });

    // Atualiza o DOM
    if (contadorNav) contadorNav.textContent = totalItens;
    if (contadorHeader) contadorHeader.textContent = totalItens;
    
    if (subtotalElement) {
        subtotalElement.textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    }

    // Mostra/Esconde a mensagem de carrinho vazio e habilita/desabilita o botão
    if (carrinhoItens.length === 0) {
        if (mensagemVazio) mensagemVazio.style.display = 'block';
        if (listaItensContainer) listaItensContainer.innerHTML = '';
        if (btnFinalizar) btnFinalizar.disabled = true;
    } else {
        if (mensagemVazio) mensagemVazio.style.display = 'none';
        if (btnFinalizar) btnFinalizar.disabled = false;
        renderizarItensCarrinho(); // Renderiza a lista se houver itens
    }
}

/**
 * Renderiza a lista de itens dentro do Offcanvas.
 */
function renderizarItensCarrinho() {
    if (!listaItensContainer) return;
    listaItensContainer.innerHTML = ''; // Limpa o conteúdo
    
    carrinhoItens.forEach((item, index) => {
        const itemHtml = document.createElement('div');
        itemHtml.className = 'd-flex align-items-center border-bottom py-3';
        
        itemHtml.innerHTML = `
            <img src="${item.produto.img}" alt="${item.produto.nome}" style="width: 60px; height: 60px; object-fit: cover;" class="rounded me-3">
            <div class="flex-grow-1">
                <p class="mb-0 small fw-bold text-truncate">${item.produto.nome}</p>
                ${item.tamanho ? `<p class="mb-0 small text-muted">Tam.: ${item.tamanho}</p>` : ''}
                
                <div class="d-flex justify-content-between align-items-center mt-1">
                    <p class="mb-0 fw-bold text-dark">R$ ${(item.produto.preco * item.quantidade).toFixed(2).replace('.', ',')}</p>
                    <div class="d-flex align-items-center">
                        <input type="number" value="${item.quantidade}" 
                               data-index="${index}" 
                               min="1" 
                               style="width: 50px; text-align: center;" 
                               class="form-control form-control-sm me-2 input-quantidade-carrinho">
                        <button class="btn btn-sm btn-outline-danger btn-remover-item" data-index="${index}">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        listaItensContainer.appendChild(itemHtml);
    });

    // Anexa eventos aos novos botões de remoção/inputs de quantidade
    adicionarEventosRemoverEQuantidade();
}

// =========================================================
// 2. FUNÇÕES DE MANIPULAÇÃO DO CARRINHO (EXPORTÁVEL)
// =========================================================

/**
 * Adiciona um produto ao carrinho. Esta é a função que você chamará dos botões "Adicionar".
 * @param {Object} produto - O objeto completo do produto.
 * @param {number} quantidade - A quantidade a ser adicionada.
 * @param {string|null} tamanho - A variação (tamanho) selecionada.
 */
function adicionarAoCarrinho(produto, quantidade = 1, tamanho = null) {
    // Tenta encontrar se o item exato (mesmo ID e TAMANHO) já existe
    const itemExistente = carrinhoItens.find(i => 
        i.produto.id === produto.id && i.tamanho === tamanho
    );

    if (itemExistente) {
        itemExistente.quantidade += quantidade;
    } else {
        carrinhoItens.push({
            produto: produto,
            quantidade: quantidade,
            tamanho: tamanho
        });
    }
    
    // Atualiza a visualização
    atualizarCarrinhoGeral();
    // Opcional: abre o painel lateral para o usuário ver que o item foi adicionado.
    // var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasCarrinho'));
    // offcanvas.show();
}

function removerDoCarrinho(index) {
    carrinhoItens.splice(index, 1);
    atualizarCarrinhoGeral();
}

function alterarQuantidade(index, novaQuantidade) {
    // Garante que a quantidade seja um número inteiro positivo
    const qtd = parseInt(novaQuantidade);
    if (qtd > 0) {
        carrinhoItens[index].quantidade = qtd;
    }
    atualizarCarrinhoGeral();
}


// =========================================================
// 3. EVENTOS DE INTERAÇÃO DO PAINEL LATERAL
// =========================================================

function adicionarEventosRemoverEQuantidade() {
    // Evento de Remoção
    document.querySelectorAll('.btn-remover-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            removerDoCarrinho(index);
        });
    });

    // Evento de Alteração de Quantidade
    document.querySelectorAll('.input-quantidade-carrinho').forEach(input => {
        input.addEventListener('change', (e) => {
            const index = parseInt(e.currentTarget.getAttribute('data-index'));
            const novaQtd = parseInt(e.currentTarget.value);
            // Se o usuário digitar 0 ou menos, remove o item
            if (novaQtd <= 0) {
                removerDoCarrinho(index);
            } else {
                alterarQuantidade(index, novaQtd);
            }
        });
    });
}

// Inicialização: carrega o estado do carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', atualizarCarrinhoGeral);