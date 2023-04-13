// TELA DE ABERTURA INTRODUTORIA
    window.onload = function() {
        window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
        });
        continuarExecucao();
    };
    function continuarExecucao() {
        // Coloque aqui o código que você quer executar depois da atualização da página
        var body = document.getElementById('body');
        body.style.width = '100%';
        body.style.overflow = 'hidden';
        setTimeout(function(){
            telaDeAbertura.style.display = 'none';
            body.style.overflow = 'visible';
        }, 2000);
    }

// CONFIGURAÕES MENU
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const body = document.getElementById('body');
    
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        if(hamburger.classList.contains('active')){
            body.style.overflow = 'hidden';
        }
        else{
            body.style.overflow = 'auto';
        }
    })

    function esconder(){
        navMenu.classList.toggle("active");
        if(hamburger.classList.contains('active')){
            hamburger.classList.remove("active");
            body.style.overflow = 'auto';
        }
        else{
            body.style.overflow = 'auto';
        }
    }
// SLIDER INTRODUTORIO
    const slideItems = document.querySelectorAll('.slide-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    let slideIndex = 0;

    const showSlide = (n) => {
    slideItems.forEach((item) => {
        item.classList.remove('active');
    });
    slideItems[n].classList.add('active');
    };

    const nextSlide = () => {
    slideIndex++;
    if (slideIndex >= slideItems.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
    };

    const prevSlide = () => {
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = slideItems.length - 1;
    }
    showSlide(slideIndex);
    };

    setInterval(() => {
    nextSlide();
    }, 5000);

    prevButton.addEventListener('click', () => {
    prevSlide();
    });

    nextButton.addEventListener('click', () => {
    nextSlide();
    });

    let startX = 0;
    let endX = 0;

    prevButton.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    });

    prevButton.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    if (endX - startX > 50) {
        prevSlide();
    }
    });

    nextButton.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    });
// ==========================================================

const modal1 = document.getElementById('modal1');
      const modal2 = document.getElementById('modal2');
      const closeButton1 = document.getElementById('closeButton1');
      const closeButton2 = document.getElementById('closeButton2');
      const produto1 = document.querySelector('.produto1');
      const produto2 = document.querySelector('.produto2');

      // Adiciona ouvinte de evento para abrir o modal 1
      produto1.addEventListener('click', () => {
        modal1.style.display = 'block';
        document.body.classList.add('modal-open');
      });

      // Adiciona ouvinte de evento para abrir o modal 2
      produto2.addEventListener('click', () => {
        modal2.style.display = 'block';
        document.body.classList.add('modal-open');
      });

      // Adiciona ouvinte de evento para fechar o modal 1
      closeButton1.addEventListener('click', () => {
        modal1.style.display = 'none';
        document.body.classList.remove('modal-open');
      });

      // Adiciona ouvinte de evento para fechar o modal 2
      closeButton2.addEventListener('click', () => {
        modal2.style.display = 'none';
        document.body.classList.remove('modal-open');
    });
    // Adiciona ouvinte de evento para fechar o modal 1 quando clicar fora dele
    window.addEventListener('click', (event) => {
    if (event.target === modal1) {
        modal1.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    if (event.target === modal2) {
        modal2.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
    });



















// Formulario


// Estado de Funcionamento

function exibirMensagem() {
    const data = new Date();
    const hora = data.getHours();
    const diaSemana = data.getDay();
    var mensagem = "";
    var status = "";
  
    if (diaSemana === 0) { // Domingo
      mensagem = "● FECHADO";
      status = "fechado";
      
    } else if (diaSemana === 6) { // Sábado
      if (hora >= 8 && hora < 11) {
        mensagem = "● ABERTO";
        status = "aberto";
      } else {
        mensagem = "● FECHADO";
        status = "fechado";
      }
    } else { // Dias de semana (de segunda a sexta)
      if (hora >= 7 && hora < 18) {
        mensagem = "● ABERTO";
        status = "aberto";
      } else {
        mensagem = "● FECHADO";
        status = "fechado";
      }
    }
  
    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").className = status;
  }
  
  setInterval(exibirMensagem, 200); // a cada 1 segundo