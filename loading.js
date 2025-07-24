document.addEventListener('DOMContentLoaded', function() {
    const conteudo = document.querySelector('.terminal');
    const loadingScreen = document.createElement('div');
    
    loadingScreen.classList.add('loading-screen');
    loadingScreen.innerHTML = `
      <pre>
  Iniciando sistemas...
  Carregando variáveis de ambiente...
  Estabelecendo conexão segura...
  Acesso autorizado.
      </pre>
    `;
  
    document.body.appendChild(loadingScreen);
    conteudo.style.display = 'none';
  
    setTimeout(() => {
      loadingScreen.style.display = 'none';
      conteudo.style.display = 'block';
    }, 4000); // Tempo de loading em milissegundos (4 segundos)
  });
  