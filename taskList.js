let leButton = document.querySelector("button");

function ajouterTask(){
    let leInput = document.getElementById("todo");
    let laList = document.getElementsByTagName("ul")[0];
    let newLi = document.createElement("li");
    newLi.textContent = leInput.value;
    laList.append(newLi);
}

leButton.addEventListener("click", ajouterTask);