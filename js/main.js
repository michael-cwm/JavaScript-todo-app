window.onload = function (){
    start();
}

function start(){
let myList = document.getElementsByTagName("li");

// Lägger till en close-button för varje list-item
for(let i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let textNode = document.createTextNode("\u2573");
    span.className = "closeButton";
    span.appendChild(textNode);
    myList[i].appendChild(span);
}

let closeButton = document.getElementsByClassName("closeButton");

// Tar bort berört list-item vid tryck på close-button
for(let i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

}

// Stryker över och ändrar färg på berört list-item
let checkedColor = "lightgreen";

function done(e){
    e.style.backgroundColor=checkedColor;
    e.style.textDecoration="line-through";
    e.setAttribute("onclick", "revert(this)");
}

function revert(e){
    e.style.backgroundColor="";
    e.style.textDecoration="";
    e.setAttribute("onclick", "done(this)");
}

let closeButton = document.getElementsByClassName("closeButton");

// Lägger till ny list-item i listan samt funktionalitet för att ta bort och markera som klart
function newListItem(){
    let li = document.createElement("li");
    li.setAttribute("onclick", "done(this)");
    let inputValue = document.getElementById("myInput").value;
    let text = document.createTextNode(inputValue);
    li.appendChild(text);
    document.getElementById("theList").appendChild(li);

    let span = document.createElement("span");
    let textNode = document.createTextNode("\u2573");
    span.className = "closeButton";
    span.appendChild(textNode);
    li.appendChild(span);

    for(let i = 0; i < closeButton.length; i++){
        closeButton[i].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

    



}