function adicionar() {
    let numero = document.querySelector("input[name='numero']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let cidade = document.querySelector("input[name='cidade']").value;
    let rua = document.querySelector("input[name='rua']").value;

    let listaCasa = document.createElement("li");
    listaCasa.innerText = "Rua: "+ rua + ", Número " + numero + ", Bairro: " + bairro + " - " + cidade + " ";  

    let botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.innerText = "Deletar";
    botaoRemover.setAttribute("onclick", "remover(this)");

    listaCasa.appendChild(botaoRemover);

    document.getElementById("lista-casa").appendChild(listaCasa);
}

function remover (button) {
    let removerLi = button.parentNode;
    document.getElementById("lista-casa").removeChild(removerLi);
}