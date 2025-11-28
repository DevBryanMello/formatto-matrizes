let slideIndex = 1;
showSlides(slideIndex);

// Função para mudar o slide (recebe 1 para próximo, -1 para anterior)
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Função para ir diretamente a um slide específico (clique no ponto/dot)
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel-slide");
  let dots = document.getElementsByClassName("dot");
  
  // Se o índice for maior que o número de slides, volta para o primeiro
  if (n > slides.length) {
    slideIndex = 1
  }    
  
  // Se o índice for menor que 1, vai para o último slide
  if (n < 1) {
    slideIndex = slides.length
  }
  
  // Esconde todos os slides e remove a classe 'active' dos dots
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Exibe o slide atual e marca o dot correspondente como 'active'
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Opcional: Adicionar Autoplay (para rodar automaticamente)

    let autoSlideIndex = 0;
    autoShowSlides();

    function autoShowSlides() {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    autoSlideIndex++;
    
    if (autoSlideIndex > slides.length) {
        autoSlideIndex = 1
    }    
    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[autoSlideIndex-1].style.display = "block";  
    dots[autoSlideIndex-1].className += " active";
    
    // Roda a cada 3 segundos (3000 milissegundos)
    setTimeout(autoShowSlides, 3000); 
    }