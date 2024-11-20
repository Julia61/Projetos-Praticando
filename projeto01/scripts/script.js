function envio(){
    var filmeEscolha = document.getElementById('filme').value
    var catalago = document.querySelector('p#pergunta')
    if(filmeEscolha.length == 0){
        alert('errado')
    }else{
        catalago.innerHTML = `seu filme ${filmeEscolha}`
    }
}