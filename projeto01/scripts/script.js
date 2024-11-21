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
            var botaoAção = document.createElement('button')
            var botaoRomance = document.createElement('button')
            var botaoComedia = document.createElement('button')

            botaoAção.textContent = 'Ação'
            botaoRomance.textContent = 'Romance'
            botaoComedia.textContent = 'Comedia'

            catalago.innerHTML = `Nosso catalogo:.(Selecione para ver as disponibilidades)`

            botaoAção.onclick = function(){
                
            }

            botaoRomance.onclick = function(){

            }
            
            botaoComedia.onclick =  function(){

            }
            catalago.appendChild(botaoAção)
            catalago.appendChild(botaoRomance)
            catalago.appendChild(botaoComedia)
        }

        botaoNao.onclick = function(){
            catalago.innerHTML = "Ta bom"
        }
        catalago.appendChild(botaoSim)
        catalago.appendChild(botaoNao)
    }
}