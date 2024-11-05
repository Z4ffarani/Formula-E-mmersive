document.addEventListener("DOMContentLoaded", function(){
    var totalBlitz = sessionStorage.getItem('saldo-blitz');
    if (totalBlitz === null) {
        totalBlitz = 500;
        sessionStorage.setItem('saldo-blitz', totalBlitz.toString());
    }
    else{
        totalBlitz = parseInt(totalBlitz);
    }
    document.getElementById("saldo-blitz").textContent = totalBlitz.toString();


    var nome = sessionStorage.getItem('nome')
    document.getElementById('username').textContent = nome

    sessionStorage.setItem('saldo-blitz', totalBlitz.toString());

     // MANTER MOLDURA
     var adquiriuMoldura = sessionStorage.getItem("moldura-adquirida")
     if (adquiriuMoldura === "true"){
         var img = document.getElementById("moldura-user")
         img.src = '../../../public/assets/images/gold-profile.png'
     }

// programação carrossel //
const carrossel = document.getElementById("carrossel")
const slides = document.querySelectorAll(".slide")
const totalSlides = slides.length;
let slideAtual = 0

const carrosselTexto = document.getElementById("carrosselTexto")
let slideTextAtual = 0

document.getElementById("proxBtn").addEventListener("click", function(){
    if (slideAtual < totalSlides - 1){
        slideAtual = slideAtual + 1;
        slideTextAtual = slideTextAtual + 1
        atualizarCarrossel()
    }
    else{
        slideAtual = 0;
        slideTextAtual = 0
        atualizarCarrossel();
    }
});

document.getElementById("voltBtn").addEventListener("click", function(){
    if (slideAtual > 0 ){
        slideAtual = slideAtual - 1;
        slideTextAtual = slideTextAtual -1
        atualizarCarrossel()
    }
    else{
        slideAtual = totalSlides - 1;
        slideTextAtual = totalSlides -1
        atualizarCarrossel();
    }
});

function atualizarCarrossel(){
    if (window.matchMedia("(max-width: 425px").matches){
        const troca = -slideAtual * 320;
        carrossel.style.transform='translateX(' + troca + 'px)';
        const trocaSlideTexto = -slideTextAtual * 320;
        carrosselTexto.style.transform='translateX(' + trocaSlideTexto + 'px)';
    }
    else if (window.matchMedia("(max-width: 768px)").matches){
        const troca = -slideAtual * 425;
        carrossel.style.transform='translateX(' + troca + 'px)';
        const trocaSlideTexto = -slideTextAtual * 425;
        carrosselTexto.style.transform='translateX(' + trocaSlideTexto + 'px)';
    }
    else{
        const troca = -slideAtual * 460;
        carrossel.style.transform='translateX(' + troca + 'px)';
        const trocaSlideTexto = -slideTextAtual * 600;
        carrosselTexto.style.transform='translateX(' + trocaSlideTexto + 'px)';
      }
}
})

function proximaPagina() {
    var ganhouProximaPagina = sessionStorage.getItem('ganhouProximaPagina');
    if (ganhouProximaPagina === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 2000;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximaPagina', 'true');
    }
}

function proximoSlideFormulaE() {
    var ganhouProximoSlideFormulaE = sessionStorage.getItem('ganhouProximoSlideFormulaE');
    if (ganhouProximoSlideFormulaE === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormulaE', 'true');
    }
}

function proximoSlideFormula1() {
    var ganhouProximoSlideFormula1 = sessionStorage.getItem('ganhouProximoSlideFormula1');
    if (ganhouProximoSlideFormula1 === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 500;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouProximoSlideFormula1', 'true');
    }
}
