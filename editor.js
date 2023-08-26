let sliderElement = document.querySelector("#slider")
let buttonElemant = document.querySelector("#button")

let seziPassowod = document.querySelector("#valor")
let Passowod = document.querySelector("#password")

let conternerPassword = document.querySelector("#container-pasword")

let charset = "1234567890qwertyuiopaassdfghjklçmnbvcxz!@#$%¨&*"
let novaSenha = ""

//para aparecer o numero no meio do TAMANHO     CARACTERES 
seziPassowod.innerHTML =  sliderElement.value

//para o numero mudar no meio TAMANHO    CARACTERES 
slider.oninput = function(){
    seziPassowod.innerHTML = this.value
}

function genarartaPassword(){
    
    let pass = ""
    
    for(let i = 0, n = charset.length; i < sliderElement.value ;++i){
        pass += charset.charAt(Math.floor(Math.random()* n))
    } 
    conternerPassword.classList.remove("hide")
    
    Passowod.innerHTML = pass
    novaSenha = pass
}

//para copiar a senha
function copyPassoword(){
    alert("Senha copiada com sucesso!")
    navigator.clipboard.writeText(novaSenha)
}