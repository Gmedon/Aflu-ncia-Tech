var verificarheight = window.screen.height;
var verificarwidth = window.screen.width;
//CONTAGEM
function starttimer(duration, display) {
    var timer = duration, minutes, seconds;
  
    setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = minutes + " : " + seconds;
      if (--timer < 0) {
        timer = duration;
      }
    }, 1000)
  }
  window.onload = function () {
    var duration = 60 * 20;
    var display = document.querySelector(".exibir-timer")
    starttimer(duration, display)
  }
  function descersobre() {
    window.scrollTo(1000, 1781);
  }
//ITENS A GUARDAR
let email = []
let senha = []
let nome = []
var contagemdepaginas = 1;
//PROPORÇÂO DA TELA
console.log(verificarheight)
if (verificarwidth <= 1000) {
    document.querySelector(".container-total-login").style.height = verificarheight + "px";
    document.querySelector(".container-total-login").style.padding = "0px";

} else if (verificarwidth >= 1001) {
    document.querySelector(".container-total-login").style.height = (verificarheight - 143) + "px"; 
}
//ENTRA NO REGISTRO
function entrarregistro() {
    document.querySelector(".cubo-login").style.display = "none"
    document.querySelector(".container-cadastro").style.display = "flex"
    document.querySelector(".display-etapa-1").style.display = "flex"
    document.querySelector(".display-etapa-4").style.display = "none"
}
//PROXIMA ETAPA 2 REGISTRO
let inputetapa1 = document.querySelectorAll(".input-js-etapa1")
function passaretapa2() {

    inputetapa1[0].style.backgroundColor = "white";
    inputetapa1[1].style.backgroundColor = "white";
    inputetapa1[2].style.backgroundColor = "white";
    inputetapa1[3].style.backgroundColor = "white";
    if (inputetapa1[0].value == "") {
        inputetapa1[0].style.backgroundColor = "red";
    } else if (inputetapa1[1].value == "") {
        inputetapa1[1].style.backgroundColor = "red";
    } else if (inputetapa1[2].value == "") {
        inputetapa1[2].style.backgroundColor = "red";
    } else if (inputetapa1[3].value == "") {
        inputetapa1[3].style.backgroundColor = "red";
    } else {
        document.querySelector(".display-etapa-1").style.display = "none"
        document.querySelector(".display-etapa-2").style.display = "block"
        nome.push(inputetapa1[0].value)
        email.push(inputetapa1[3].value)
    }
}
//CEP
//API via CEP
let inputetapa2 = document.querySelectorAll(".input-js-etapa2")
async function pegar() {
    let cep = inputetapa2[0].value
    let api = await fetch("https://viacep.com.br/ws/" + cep + "/json/");
    let pegar = await api.json();
    montarform(pegar);
}

//Montagem do HTML/CSS do Viacep

function montarform(lista) {
    let log = lista.logradouro;
    let bair = lista.bairro;
    let cidad = lista.localidade;
    let UF = lista.uf;
    inputetapa2[2].setAttribute("value", bair);
    inputetapa2[1].setAttribute("value", log);
    inputetapa2[3].setAttribute("value", cidad);
    inputetapa2[4].setAttribute("value", UF);
}
//PROXIMA ETAPA 3 REGISTRO

function passaretapa3() {
    inputetapa2[0].style.backgroundColor = "white";
    if (inputetapa2[0].value == "") {
        inputetapa2[0].style.backgroundColor = "red";
    } else {
        document.querySelector(".display-etapa-2").style.display = "none"
        document.querySelector(".display-etapa-3").style.display = "block"
    }
}
let inputetapa3 = document.querySelectorAll(".input-js-etapa3")
console.log(inputetapa3)
//ULTIMA ETAPA CADASTRO
function finalizarcadastro() {
    if (inputetapa3[0].value.length < 6) {
        alert("Sua senha deve conter 6 digitos")
    } else if (inputetapa3[0].value != inputetapa3[1].value) {
        alert("As senhas devem ser iguais")
    } else {
        document.querySelector(".display-etapa-3").style.display = "none"
        document.querySelector(".cubo-login").style.display = "flex"
        document.querySelector(".container-cadastro").style.display = "none"
        senha.push(inputetapa3[0].value)
    }
}
//LOGIN
let inputlogin = document.querySelectorAll(".login-input")
function entrarindex() {
    if (inputlogin[0].value != email[0]) {
        alert("Este email não esta cadastrado")
    }else if (inputlogin[1].value == senha[0] || inputlogin[1].value == senha[1]) {
        document.querySelector(".total-index").style.display = "block";
        document.querySelector(".container-total-login").style.display = "none";
        document.querySelector("#login-menu").innerHTML = nome[0];

    } else if (inputlogin[1].value != senha[0]) {
        alert("Senha incorreta")
    }
}

//ENTRAR EM REDEFINIR SENHA
function redefinir() {
    document.querySelector(".container-cadastro").style.display = "flex";
    document.querySelector(".cubo-login").style.display = "none";
    document.querySelector(".display-etapa-4").style.display = "block"
}
// REDEFINIR SENHA
let inputredefinir = document.querySelectorAll(".input-js-etapa4")
function acertarsenha() {
    if (inputredefinir[0].value != email[0]) {
        alert("Email não cadastrado")
    } else if (inputredefinir[1].value != inputredefinir[2].value) {
        alert("Por favor escolher a mesma senha!")
    } else if (inputredefinir[1].value.length < 6) {
        alert("Escolher uma senha com mais de 6 digitos")
    } else {
        document.querySelector(".display-etapa-4").style.display = "none"
        document.querySelector(".cubo-login").style.display = "flex"
        document.querySelector(".container-cadastro").style.display = "none"
        senha.push(inputredefinir[1].value)
    }
}

//ENTRAR NA ABA LOGIN
function entrarabalogin() {
    if (contagemdepaginas == 1) {
        document.querySelector(".total-index").style.display = "none";
        if (verificarwidth < 1000) {
            document.querySelector(".container-total-login").style.display = "flex";
        } else {
             document.querySelector(".container-total-login").style.display = "block";
        }
        contagemdepaginas = 2;
    } else if(contagemdepaginas == 2) {
        document.querySelector(".lista-nav").style.display = "block";
        contagemdepaginas = 3;
    } else if (contagemdepaginas == 3) {
        document.querySelector(".lista-nav").style.display = "none";
        contagemdepaginas = 2;
    }
}
//DESLOGAR
function deslo() {
    contagemdepaginas = 1;
    document.querySelector(".lista-nav").style.display = "none";
    document.querySelector("#login-menu").innerHTML = "login"

}
//COMPRAR CONTAGEM
function comprarcontagem() {
    if(contagemdepaginas = 1){
     document.querySelector(".total-index").style.display = "none"
     document.querySelector(".container-total-login").style.display = "block"
     document.querySelector(".cubo-login").style.display = "flex"
    }else if(contagemdepaginas == 2 || contagemdepaginas == 3){
        window.location.href = "https://www.sympla.com.br/";
    }
}
//ROLAGEM ATE INSCREVA-SE
function Rolarincrevase() {
    window.scrollTo({
        top: 3710,
        left: 0,
        behavior: 'smooth'
      });
}