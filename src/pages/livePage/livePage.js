document.addEventListener('DOMContentLoaded', function(){
    alert('Receba 2000 Blitz por assistir a transmissão AO VIVO!')
    var totalBlitz = sessionStorage.getItem('saldo-blitz');
    totalBlitz = parseInt(totalBlitz) + 2000;
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

    // SISTEMA APOSTA DE BLITZ
    const addBtn = document.getElementById("maisBtn")
    addBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitz-bet")
        var valorAtual = document.getElementById("blitz-bet").textContent
        valorAtual = parseInt(valorAtual)
        const acrescimo = 225
        var novoValor = valorAtual + acrescimo
        qtdAtual.textContent = `${novoValor}`

        const multiplicado = document.getElementById("multiplicado")
        var novoMultiplicado = novoValor * 4
        multiplicado.textContent = `${novoMultiplicado}`
    })

    const subBtn = document.getElementById("menosBtn")
    subBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitz-bet")
        var valorAtual = document.getElementById("blitz-bet").textContent
        valorAtual = parseInt(valorAtual)
        const decrescimo = 225
        var novoValor = valorAtual - decrescimo
        if (valorAtual >= 225){
            qtdAtual.textContent = `${novoValor}`

            const multiplicado = document.getElementById("multiplicado")
            var novoMultiplicado = novoValor * 4
            multiplicado.textContent = `${novoMultiplicado}`
        }
    })

    
})

function underConstruction(){
    alert("Area em desenvolvimento, volte mais tarde <3\nAtenciosamente: Equipe E•mmersive")
}

