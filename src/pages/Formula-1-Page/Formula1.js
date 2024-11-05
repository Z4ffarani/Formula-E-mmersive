document.addEventListener("DOMContentLoaded", function(){
    const toggleButton = document.getElementById('toggleButton');
    const contentBox = document.getElementById('contentBox');

    toggleButton.addEventListener('click', () => {
    // Alterna a exibição da caixa de conteúdo
    if (contentBox.style.display === 'none' || contentBox.style.display === '') {
      contentBox.style.display = 'flex';
    } else {
      contentBox.style.display = 'none';
    }
  });



    var totalBlitz = sessionStorage.getItem('saldo-blitz');
    if (totalBlitz === null) {
        // Se não houver saldoBlitz no sessionStorage, inicialize com um valor padrão
        totalBlitz = 500;
        sessionStorage.setItem('saldo-blitz', totalBlitz.toString());
    } else {
        totalBlitz = parseInt(totalBlitz);
    }
    document.getElementById("saldo-blitz").textContent = totalBlitz.toString();

    var nome = sessionStorage.getItem('nome')
    document.getElementById('username').textContent = nome

    // SISTEMA PARA PARTICIPAÇÃO DE SORTEIO //
    const addBtn = document.getElementById("maisBtn")
    addBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitz-qtd")
        var valorAtual = document.getElementById("blitz-qtd").textContent
        valorAtual = parseInt(valorAtual)
        const acrescimo = 1000
        var novoValor = valorAtual + acrescimo
        qtdAtual.textContent = `${novoValor}`
    })

    const subBtn = document.getElementById("menosBtn")
    subBtn.addEventListener("click", function(){
        var qtdAtual = document.getElementById("blitz-qtd")
        var valorAtual = document.getElementById("blitz-qtd").textContent
        valorAtual = parseInt(valorAtual)
        const decrescimo = 1000
        var novoValor = valorAtual - decrescimo
        if (valorAtual >= 1000){
            qtdAtual.textContent = `${novoValor}`
        }
    })

    // ADQUIRIR ITENS //
    // MOLDURA //
        moldura = document.getElementById("compra-moldura")
        moldura.addEventListener("click", function(){
        var botaoMoldura = document.getElementById("compra-moldura")

        var saldoBlitz = document.getElementById("saldo-blitz").textContent
        saldoBlitz = parseInt(saldoBlitz)
        
            if(saldoBlitz < 2000){
                alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
            }
            else{
                botaoMoldura.classList.add("item-adquirido")
                botaoMoldura.classList.remove("lendario")
                botaoMoldura.textContent = 'adquirido'
                var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
                saldoBlitz -= 2000;
                document.getElementById('saldo-blitz').textContent = saldoBlitz;
                sessionStorage.setItem('saldoblitz', saldoBlitz.toString());
                sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
                var img = document.getElementById("moldura-user")
                img.src = '../../../public/assets/images/gold-profile.png' 
                sessionStorage.setItem("moldura-adquirida", "true")

                setTimeout(function(){
                    alert(`Parabéns você acaba de adquirir uma moldura Gold para seu perfil!`)
                }, 300);
            }
        })
    // PLAY STORE //
        playStore = document.getElementById("compra-especial")
        playStore.addEventListener("click", function(){
        var botaoPlayStore = document.getElementById("compra-especial")

        var saldoBlitz = document.getElementById("saldo-blitz").textContent
        saldoBlitz = parseInt(saldoBlitz)
        
            if(saldoBlitz < 20000){
                alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
            }
            else{
                botaoPlayStore.classList.add("item-adquirido")
                botaoPlayStore.classList.remove("especial")
                botaoPlayStore.textContent = 'adquirido'
                var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
                saldoBlitz -= 20000;
                document.getElementById("saldo-blitz").textContent = saldoBlitz;
                sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
                sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
                sessionStorage.setItem("giftcard-adquirido", "true")

                setTimeout(function(){
                    alert(`Parabéns você acaba de adquirir um giftcard de R$15,00 para ser utilizado na PlayStore`)
                }, 300);
            }
            
        
        })

    // EXEMPLO
    exemplo = document.getElementById("compra-exemplo")
    exemplo.addEventListener("click", function(){
    var botaoExemplo = document.getElementById("compra-exemplo")

    var saldoBlitz = document.getElementById("saldo-blitz").textContent
    saldoBlitz = parseInt(saldoBlitz)
        if(saldoBlitz < 1000){
            alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
        }
        else{
            botaoExemplo.classList.add("item-adquirido")
            botaoExemplo.classList.remove("comum")
            botaoExemplo.textContent = 'adquirido'
            var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
            saldoBlitz -= 1000;
            document.getElementById("saldo-blitz").textContent = saldoBlitz;
            sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
            sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
            sessionStorage.setItem("exemplo-adquirido", "true")
            setTimeout(function(){
                alert(`Parabéns você acaba de adquirir 'exemplo'!\nNão é muito util não é mesmo?`)
            }, 300);
        }
    })

    // MANTER MOLDURA E MANTER ADQUIRIDO
    var botaoMoldura = document.getElementById("compra-moldura")
    var adquiriuMoldura = sessionStorage.getItem("moldura-adquirida")
    if (adquiriuMoldura === "true"){
        var img = document.getElementById("moldura-user")
        img.src = '../../../public/assets/images/gold-profile.png'
        botaoMoldura.classList.add("item-adquirido")
        botaoMoldura.classList.remove("lendario")
        botaoMoldura.textContent = 'adquirido'
    }

    // MANTER ADQUIRIDO ESPECIAL
    var botaoPlayStore = document.getElementById("compra-especial")
    var adquiriuGiftCard = sessionStorage.getItem("giftcard-adquirido")
    if (adquiriuGiftCard === "true"){
        botaoPlayStore.classList.add("item-adquirido")
        botaoPlayStore.classList.remove("especial")
        botaoPlayStore.textContent = 'adquirido'
    }

    // MANTER ADQUIRIDO COMUM
    var botaoExemplo = document.getElementById("compra-exemplo")
    var adquiriuExemplo = sessionStorage.getItem("exemplo-adquirido")
    if (adquiriuExemplo === "true"){
        botaoExemplo.classList.add("item-adquirido")
        botaoExemplo.classList.remove("comum")
        botaoExemplo.textContent = 'adquirido'
    }

    // TEMPORIZADOR LOJA //
    const duracao = 62741 // tempo em Horas, minutos e segundos
    const elementoTimer = document.getElementById("timer"); //puxando o timer html

    function formataçãoTempo(segundos){
        const horas = Math.floor(segundos / 3600)//segundos para horas
        const minutos = Math.floor((segundos % 3600) / 60) // segundos para minutos
        const seg = segundos % 60;
        return `${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(seg).padStart(2, '0')}s`//quando o tempo diminuir de dois digitos para um (exemplo: 10 para 9), o "0" será adicionado ficando (exemplo: 09, ao inves de apenas 9)
    }

    function iniciarTimer(duracao, display){
        var tempoRestante = duracao;
        display.textContent = formataçãoTempo(tempoRestante)

        const intervaloTimer = setInterval(function(){
            tempoRestante = tempoRestante - 1
            display.textContent = formataçãoTempo(tempoRestante)
        
            if (tempoRestante <= 0) {
                clearInterval(intervaloTimer)
                display.textContent = '00h 00m 00s'
            }
        }, 1000)
    }

    // INICIADOR AUTOMATICO DE TIMER //
    window.onload = function(){
        iniciarTimer(duracao, elementoTimer)
    }
})

// GANHAR 100MIL BLITZ //
function adicionarBlitz() {
    var ganhouAdicionarBlitz = sessionStorage.getItem('ganhouAdicionarBlitz');
    if (ganhouAdicionarBlitz === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 100000;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouAdicionarBlitz', 'true');
    }
}

function botaoDescobrir(){
    var ganhouBotaoDescobrir = sessionStorage.getItem('ganhouBotaoDescobrir');
    if (ganhouBotaoDescobrir === null) {
        var saldoBlitz = parseInt(document.getElementById("saldo-blitz").textContent);
        saldoBlitz += 2000;
        document.getElementById("saldo-blitz").textContent = saldoBlitz;
        sessionStorage.setItem('saldo-blitz', saldoBlitz.toString());
        sessionStorage.setItem('ganhouBotaoDescobrir', 'true');
    }
}


// SISTEMA DE CONFIRMAÇÃO DE COMPRA DE INGRESSOS PARA SORTEIO//
function participar(){
    var saldoBlitz = document.getElementById("saldo-blitz").textContent
    saldoBlitz = parseInt(saldoBlitz)

    var valorAtual = document.getElementById("blitz-qtd").textContent
    valorAtual = parseInt(valorAtual)

    var popUp = document.getElementById("pop-up-compra")

    if (valorAtual == 0){
        alert("Determine a quantidade de blitz que quer utilizar!")
    }
    else if (saldoBlitz < valorAtual){
        alert("Você não possui Blitz suficientes\nUtilize nossas ferramentas para obter mais!")
    }
    else{
        popUp.classList.add("mostrar-pop-up") //Ativar popUp Confirmação//
        document.body.style.overflow = 'hidden';
    }
}

function cancelar(){
    var popUp = document.getElementById("pop-up-compra")
    popUp.classList.remove("mostrar-pop-up")
    document.body.style.overflow = 'auto';
}

function confirmar(){
    var saldoBlitz = document.getElementById("saldo-blitz").textContent
    saldoBlitz = parseInt(saldoBlitz)

    var popUp = document.getElementById("pop-up-compra")
    popUp.classList.remove("mostrar-pop-up")

    var valorAtual = document.getElementById("blitz-qtd").textContent
    valorAtual = parseInt(valorAtual)

    var qtdIngressos = valorAtual / 1000
    setTimeout(function(){
        alert(`Parabéns você acaba de adquirir ${qtdIngressos} chances de ser sorteado!\nBoa Sorte! Resultado disponivel em: xx/xx/xxxx`)
    }, 300);
    
    var saldoBlitzTotal = document.getElementById("saldo-blitz")
    saldoBlitzTotal.textContent = `${saldoBlitz-valorAtual}`
    document.body.style.overflow = 'auto';
}




// BOTÕES AINDA NÃO FUNCIONAIS
function underConstruction(){
    alert("Area em desenvolvimento, volte mais tarde <3\nAtenciosamente: Equipe E•mmersive")
}

