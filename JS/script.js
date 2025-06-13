var form = document.getElementById("formulario-atividades");

form.addEventListener("submit", function(event){
    event.preventDefault();

    var input = document.getElementById("envio-tarefa");
    var texto = input.value;

    var novaTarefa = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    novaTarefa.appendChild(checkbox);
    novaTarefa.appendChild(document.createTextNode(texto));
    document.getElementById("lista-tarefas").appendChild(novaTarefa);
    input.value = "";
});