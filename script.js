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

function abrirForm(){
  document.getElementById("abre_formulario").className = "oculto";
  document.getElementById("abre_mapa").className = "visivel"
  document.getElementById("endereco_e_mapa").className = "oculto";
  document.getElementById("formulario").id = "mobile";
}
function abrirMapa(){
  document.getElementById("abre_formulario").className = "visivel";
  document.getElementById("abre_mapa").className = "oculto"
  document.getElementById("endereco_e_mapa").className = "visivel";
  document.getElementById("mobile").id = "formulario";
}
function open_menu(){
  document.getElementById("navbar").id="nav_fullScreen";
  document.getElementById("burger_menu").style = "display: none";
}
function close_menu(){
  document.getElementById("nav_fullScreen").id = "navbar";
  document.getElementById("burger_menu").style = "display: block"
}