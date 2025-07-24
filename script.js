function mostrarInfo(secao) {
    const conteudo = document.getElementById('conteudo');
    
    if (secao === 'sobre') {
      conteudo.innerHTML = `
        <p class="linha">> Sobre Mim:</p>
        <p>Sou um entusiasta da tecnologia apaixonado por resolver problemas de forma criativa. Atualmente estudante de ADS, busco constantemente melhorar minhas habilidades e aplicar meu conhecimento em projetos reais.</p>
      `;
    } else if (secao === 'projetos') {
      conteudo.innerHTML = `
        <p class="linha">> Projetos:</p>
        <p>- Sistema de Controle de Estoque: Otimização de processos logísticos.</p>
        <p>- Landing Page para Empresa: Foco em design responsivo e moderno.</p>
        <p>- Site Especial em Homenagem: Projeto personalizado, utilizando animações e interatividade.</p>
      `;
    } else if (secao === 'contato') {
      conteudo.innerHTML = `
        <p class="linha">> Contato:</p>
        <p><a href="mailto:seuemail@email.com" target="_blank">Email</a></p>
        <p><a href="https://www.linkedin.com/in/seuperfil/" target="_blank">LinkedIn</a></p>
        <p><a href="https://github.com/seuusuario" target="_blank">GitHub</a></p>
      `;
    } else if (secao === 'puxar') {
      conteudo.innerHTML = `
        <p class="linha">> Puxar Sardinha:</p>
        <p>Estou pronto para colocar meu potencial e comprometimento em ação, agregando valor à equipe e à empresa. Estou extremamente ansioso para fazer parte deste time incrível e contribuir para o crescimento de todos!</p>
      `;
    }
  }
  
  // Ativar o campo de comando
document.addEventListener('keydown', () => {
    document.getElementById('comando').focus();
  });
  
  // Interpretar o que foi digitado
  document.getElementById('comando').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const comando = this.value.toLowerCase().trim();
      
      if (comando === 'sobre') {
        mostrarInfo('sobre');
      } else if (comando === 'projetos') {
        mostrarInfo('projetos');
      } else if (comando === 'contato') {
        mostrarInfo('contato');
      } else if (comando === 'puxar sardinha') {
        mostrarInfo('puxar');
      } else {
        document.getElementById('conteudo').innerHTML = `<p class="linha">> Comando não reconhecido: ${comando}</p>`;
      }
      
      this.value = '';
    }
  });
  
  
  
// Matrix Effect
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // Verde neon
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}

setInterval(drawMatrix, 33);
// Toggle Matrix Effect PRO
const toggleButton = document.getElementById('toggleMatrix');
let matrixActive = true;

toggleButton.addEventListener('mouseenter', () => {
  toggleButton.style.opacity = 0.5; // quando passa o mouse
});

toggleButton.addEventListener('mouseleave', () => {
  toggleButton.style.opacity = 0.05; // mouse sai
});

toggleButton.addEventListener('click', () => {
  matrixActive = !matrixActive;
  canvas.style.display = matrixActive ? 'block' : 'none';

  // Troca o ícone do botão
  toggleButton.innerHTML = matrixActive ? '🧿' : '☠️';
});
