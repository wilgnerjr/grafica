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
        }, 3000);
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

// Formulario
