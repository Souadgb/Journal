function addEntry() {
    let text = document.getElementById("entryText").value;
    if (text.trim() === "") return;

    let entryDiv = document.createElement("div");
    entryDiv.classList.add("entry");

    let entryText = document.createElement("p");
    entryText.innerText = text;

    let entryTime = document.createElement("small");
    entryTime.innerText = new Date().toLocaleString();

    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.onclick = function () {
        entryDiv.remove();
    };

    entryDiv.appendChild(entryText);
    entryDiv.appendChild(entryTime);
    entryDiv.appendChild(deleteButton);

    document.getElementById("entries").prepend(entryDiv);
    document.getElementById("entryText").value = "";
}
