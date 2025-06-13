var form = document.getElementById("formulario-atividades");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var input = document.getElementById("envio-tarefa");
    var texto = input.value;

    var novaTarefa = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    var botaoRemover = document.createElement("button");
    botaoRemover.textContent = "Remover"
    botaoRemover.classList.add("botao-remover");

    botaoRemover.addEventListener("click", function(){
        novaTarefa.remove();
    })

    checkbox.addEventListener("change", function(){
        if(checkbox.checked){
            novaTarefa.classList.add("concluida");

            var lista = document.getElementById("lista-tarefas");
            lista.appendChild(novaTarefa);
        } else{
            novaTarefa.classList.remove("concluida");
        }
    })

    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(document.createTextNode(texto));
    novaTarefa.appendChild(botaoRemover);
    document.getElementById("lista-tarefas").appendChild(novaTarefa);
    input.value = "";
});