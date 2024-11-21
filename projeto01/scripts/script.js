function envio(){
    var filmeEscolha = document.getElementById('filme').value
    var catalago = document.querySelector('p#pergunta')
    if(filmeEscolha.length == 0){
        alert('[ERRO].Tente novamente!')
    }else{
        catalago.innerHTML = `Legal!! você gosta de (${filmeEscolha}). Gostaria de ver o nosso catalago?`
        
        var botaoSim = document.createElement('button')
        var botaoNao = document.createElement('button')
        botaoSim.textContent = 'Sim'
        botaoNao.textContent = "Não"
        botaoSim.onclick = function(){
            catalago.innerHTML = `Nosso catalogo: [Ação] [Romance] [Comedia].`
        }

        botaoNao.onclick = function(){
            catalago.innerHTML = "Ta bom"
        }
        catalago.appendChild(botaoSim)
        catalago.appendChild(botaoNao)
    }
}