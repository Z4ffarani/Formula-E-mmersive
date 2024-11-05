function checarDados(){
    var email = sessionStorage.getItem('email')
    var senha = sessionStorage.getItem('senha')
    var nome = sessionStorage.getItem('nome')
    var loginEmail = document.getElementById('loginEmail').value
    var loginSenha = document.getElementById('loginSenha').value

    if(email!=loginEmail || senha!=loginSenha){
        senhaLog.style.color = "red"
        emailLog.style.color = "red"
        setTimeout(function(){
            alert("E-mail ou senha incorretos!\nTente novamente.")
        }, 500)
    }
    else if(email==loginEmail && senha==loginSenha){
        senhaLog.style.color = "#01FD47"
        emailLog.style.color = "#01FD47"
        setTimeout(function(){
            alert(`Bom te ver de novo, ${nome}!\nClique em "OK" para ser redirecionado.`)
            window.location.assign("https://z4ffarani.github.io/Formula-E-mmersive/src/pages/userPage/userPage.html");
        }, 500)
    }
}