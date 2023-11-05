let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); 
  }



  function addFixedClass(element) {
    element.classList.add('fixed');
    document.querySelector('.escurecer').classList.add("show")
    document.querySelector('.fechar').classList.add('show');
}

function resetClasses() {

  var imgElements = document.querySelectorAll(".img");

imgElements.forEach(function(imgElement) {
imgElement.classList.remove("fixed");
});


        document.querySelector('.escurecer').classList.remove("show")
        document.querySelector('.fechar').classList.remove('show');

}



//casa

casabutton = document.querySelector('.images_casaButton');
images_casa = document.querySelector(".images_casa");
botaosetaCasa = document.querySelector(".images_casaButton span");

casabutton.addEventListener("click", function(){

  images_casa.classList.toggle("show")
  botaosetaCasa.classList.toggle("show")

})


galpaobutton = document.querySelector('.images_galpaoButton');
images_galpao = document.querySelector(".images_galpao");
botaosetaGalpao = document.querySelector(".images_galpaoButton span");

galpaobutton.addEventListener("click", function(){

  images_galpao.classList.toggle("show")
  botaosetaGalpao.classList.toggle("show")

})


// terras

terrasEmGeralButton = document.querySelector('.images_terrasEmGeralButton');
images_terrasEmGeral = document.querySelector(".images_terrasEmGeral");
botaosetaTerrasEmGeral = document.querySelector(".images_terrasEmGeralButton span");

terrasEmGeralButton.addEventListener("click", function(){

  images_terrasEmGeral.classList.toggle("show")
  botaosetaTerrasEmGeral.classList.toggle("show")

})



        // Função para definir um cookie que registra a aceitação do aviso
        function setCookie(cname, cvalue, exdays) {
          const d = new Date();
          d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
          const expires = "expires=" + d.toUTCString();
          document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
      }

      // Verificar se o aviso de cookies já foi aceito
      if (document.cookie.indexOf("cookie_accepted=true") === -1) {
          document.getElementById("cookie-notice").style.display = "none";
      } else {
        document.getElementById("cookie-notice").style.display = "block";

      }

      // Adicionar um evento ao botão de aceitação
      document.getElementById("accept-cookie").addEventListener("click", function() {
          document.getElementById("cookie-notice").style.display = "none";
          setCookie("cookie_accepted", "true", 365); // O cookie expira em 365 dias
      });




// Função para carregar imagens preguiçosamente
function lazyLoadImages() {
  const images = document.querySelectorAll('.img img');

  images.forEach((image) => {
    if (isElementInViewport(image) && !image.getAttribute('src')) {
      image.setAttribute('src', image.getAttribute('data-src'));
    }
  });
}

// Função para verificar se o elemento está visível na janela
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Carregar imagens preguiçosamente quando a página é carregada
window.addEventListener('load', lazyLoadImages);
// Carregar imagens preguiçosamente quando a página é rolada
window.addEventListener('scroll', lazyLoadImages);
