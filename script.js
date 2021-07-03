window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  
  let scrollPos = window.pageYOffset;
  let navbarHeight = document.getElementById("navbar").clientHeight;
  let secao2 = document.getElementById("quem_somos").offsetTop;
  if (scrollPos + navbarHeight >= secao2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-8vh";
  }
}

function telaCheia(id){
  let img = document.createElement("img");
  let local = document.getElementById("tela_cheia");
  img.src = "./images/galeria/"+id+".jpg";
  local.appendChild(img);
  local.className = "visivel";
}

function fechar_imagem(){
  let local = document.getElementById("tela_cheia");
  let img = local.querySelector("img");
  local.removeChild(img);
  local.className = "oculto";
}