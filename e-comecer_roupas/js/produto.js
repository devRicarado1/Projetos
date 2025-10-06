// [produto.js]

// Base de dados fake para simular o produto
const produtos = [
    { 
        id: 1, 
        nome: "Conjunto Cropped Manga Bufante e Short Saia", 
        preco: 129.90, 
        categoria: "Conjuntos",
        descricao: "Conjunto moderno e versátil. O cropped com manga bufante é a tendência da estação, combinado com um short-saia elegante e confortável.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-28-09-2025-01-10-09.jpg",
            "https://via.placeholder.com/600x600?text=Imagem+Detalhe+A",
            "https://via.placeholder.com/600x600?text=Imagem+Detalhe+B"
        ],
        tamanhos: ["P", "M", "G"],
    },
    // Adicione outros produtos conforme a necessidade.
    { 
        id: 2, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-24-09-2025-22-54-50.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
        
    },
    { 
        id: 3, 
        nome: "Vestido Cut-Out Midi com Amarração", 
        preco: 89.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/09/facetune-27-09-2025-23-00-35.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 4, 
        nome: "Conjunto Regata Aberta e Short", 
        preco: 189.90, 
        categoria: "Conjunto",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/08/facetune-03-08-2025-13-49-15-jpg.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 5, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-52-00.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 6, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/10/img-8471.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 7, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-22-34-43.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 8, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/10/facetune-27-09-2025-20-56-51.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 9, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/09/img-5633.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    { 
        id: 10, 
        nome: "Vestido Longo Tomara Que Caia Recortes", 
        preco: 109.90, 
        categoria: "Vestidos",
        descricao: "Vestido longo elegante, perfeito para eventos noturnos. Possui recortes estratégicos que valorizam a silhueta.",
        imagens: [
            "https://s.lilianstoreatacado.com.br/product/2025/08/img-2499.jpg",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Frente",
            "https://via.placeholder.com/600x600?text=Vestido+Longo+Lateral"
        ],
        tamanhos: ["M", "G", "GG"],
    },
    // ...
];


document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGAR PRODUTO BASEADO NO ID DA URL
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = parseInt(urlParams.get('id'));

    // Encontra o produto na lista
    const produto = produtos.find(p => p.id === produtoId);

    if (!produto) {
        // Se o produto não for encontrado, exibe mensagem de erro ou redireciona
        document.querySelector('.container').innerHTML = `
            <div class="alert alert-danger text-center">Produto não encontrado.</div>
        `;
        return;
    }

    // 2. PREENCHER INFORMAÇÕES DO PRODUTO NO HTML
    document.getElementById('nome-produto').textContent = produto.nome;
    document.title = `${produto.nome} | Modern Store`;
    document.getElementById('id-produto').textContent = `#${produto.id}`;
    document.getElementById('categoria-produto').textContent = produto.categoria;
    document.getElementById('preco-produto').textContent = `R$ ${produto.preco.toFixed(2)}`;
    document.getElementById('descricao-produto').textContent = produto.descricao;


    // 3. RENDERIZAR GALERIA DE IMAGENS
    const mainImagesContainer = document.getElementById('main-images-container');
    const thumbnailsContainer = document.getElementById('thumbnails-container');
    
    // Limpa os placeholders estáticos
    mainImagesContainer.innerHTML = '';
    thumbnailsContainer.innerHTML = '';

    produto.imagens.forEach((imgSrc, index) => {
        const isActive = index === 0 ? 'active' : '';

        // Adiciona Imagem Principal ao Carrossel
        const item = document.createElement('div');
        item.className = `carousel-item ${isActive}`;
        item.innerHTML = `<img src="${imgSrc}" class="d-block w-100" alt="Imagem ${index + 1}">`;
        mainImagesContainer.appendChild(item);

        // Adiciona Thumbnail
        const thumbnail = document.createElement('button');
        thumbnail.type = 'button';
        thumbnail.setAttribute('data-bs-target', '#carouselProduto');
        thumbnail.setAttribute('data-bs-slide-to', index);
        thumbnail.className = `thumbnail-img ${isActive}`;
        thumbnail.innerHTML = `<img src="${imgSrc}" class="d-block w-100 border rounded" alt="Thumbnail ${index + 1}">`;
        
        // Adiciona CSS para o thumbnail (seria melhor no produto.css)
        thumbnail.style.width = '60px'; 
        thumbnail.style.height = '60px'; 
        thumbnail.style.marginRight = '8px';
        thumbnail.style.marginBottom = '8px';
        thumbnail.style.padding = '0';
        thumbnail.style.border = '1px solid #ccc';
        
        thumbnailsContainer.appendChild(thumbnail);
    });
    
    // 4. RENDERIZAR OPÇÕES DE TAMANHO
    const opcoesTamanhoContainer = document.getElementById('opcoes-tamanho');
    const tamanhoSelecionadoSpan = document.getElementById('tamanho-selecionado');
    
    opcoesTamanhoContainer.innerHTML = ''; // Limpa placeholders
    
    // Define o primeiro tamanho como padrão selecionado
    let tamanhoAtual = produto.tamanhos.length > 0 ? produto.tamanhos[0] : 'N/A';
    tamanhoSelecionadoSpan.textContent = tamanhoAtual;

    produto.tamanhos.forEach((tamanho, index) => {
        const btn = document.createElement('button');
        btn.className = `btn btn-outline-dark btn-sm me-1 ${index === 0 ? 'active' : ''}`;
        btn.setAttribute('data-tamanho', tamanho);
        btn.textContent = tamanho;
        
        btn.addEventListener('click', (e) => {
            // Remove 'active' de todos os botões
            opcoesTamanhoContainer.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            // Adiciona 'active' ao botão clicado
            e.target.classList.add('active');
            tamanhoAtual = tamanho;
            tamanhoSelecionadoSpan.textContent = tamanho;
            // Aqui você chamaria uma função para verificar estoque/preço da variação
        });
        
        opcoesTamanhoContainer.appendChild(btn);
    });

    // 5. LÓGICA DE QUANTIDADE (+ / -)
    const inputQuantidade = document.getElementById('quantidade-produto');
    document.getElementById('btn-mais').addEventListener('click', () => {
        let qtd = parseInt(inputQuantidade.value);
        inputQuantidade.value = qtd + 1;
    });
    document.getElementById('btn-menos').addEventListener('click', () => {
        let qtd = parseInt(inputQuantidade.value);
        if (qtd > 1) { // Garante que a quantidade mínima é 1
            inputQuantidade.value = qtd - 1;
        }
    });

});