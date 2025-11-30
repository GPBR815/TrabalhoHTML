// Adiciona uma nova nota à lista
function addNote() {
    const input = document.getElementById("noteInput");
    const text = input.value.trim();
    
    if (text === "") {
        alert("Digite algo antes de adicionar!");
        return;
    }

    const list = document.getElementById("noteList");

    const li = document.createElement("li");
    li.textContent = text;

    // Botão de deletar
    const btn = document.createElement("button");
    btn.textContent = "Excluir";
    btn.classList.add("delete-btn");
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
}
