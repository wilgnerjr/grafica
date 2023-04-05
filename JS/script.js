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

    