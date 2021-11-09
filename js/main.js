window.onload = function (){
    start();
}

function start(){
let myList = document.getElementsByTagName("li");


for(let i = 0; i < myList.length; i++) {
    let span = document.createElement("span");
    let textNode = document.createTextNode("\u2573");
    span.className = "closeButton";
    span.appendChild(textNode);
    myList[i].appendChild(span);
}

let closeButton = document.getElementsByClassName("closeButton");

for(let i = 0; i < closeButton.length; i++){
    closeButton[i].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

}

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

// newListItem(){
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput");
// }