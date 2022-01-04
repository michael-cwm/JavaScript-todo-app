
class Todo{
        constructor(description, done){
            this.description = description;
            this.done = done;
        }
}




let todo1 = new Todo("Plugga", false);
let todo2 = new Todo("Meditera", false);
let todo3 = new Todo("Gymma", false);
let todo4 = new Todo("Krama Sebastian", false);

let todoArray = [todo1, todo2, todo3, todo4];

let myList = document.createElement("ul");


createTodo();



function createTodo (){

            let myContainer = document.createElement("div");

            myContainer.appendChild(myList);    

            for(let i = 0; i < todoArray.length; i++){

                let listItem = document.createElement("li");
                let listSpan = document.createElement("span");
                let listDelete = document.createElement("p");

                listItem.innerHTML = todoArray[i].description;
                listSpan.innerHTML = todoArray[i].done;
                listDelete.innerHTML = "x";

                myList.appendChild(listItem);
                myList.appendChild(listSpan);
                myList.appendChild(listDelete);

                document.body.appendChild(myContainer);

                listDelete.addEventListener("click", () => {
                    listItem.classList.add("remove");
                    listSpan.classList.add("remove");
                    listDelete.classList.add("remove");
                })

                listItem.addEventListener("click", () => {
                    listSpan.classList.toggle("markAsDone");
                })


                //togglar objektets "done" mellan true och false och ändrar done-status i HTML
                listItem.addEventListener("click", () => {
                    todoArray[i].done = !todoArray[i].done;
                    if(todoArray[i].done === true){
                        listSpan.innerHTML = "true";

                    }else{
                        listSpan.innerHTML = "false";
                    }
                })

                
                //förhindra sidan från att reloada vid submit
                let form = document.getElementById("theForm");
                function handleForm(event) { event.preventDefault(); } 
                form.addEventListener('submit', handleForm);

                console.log(todoArray);

                }


          
}


document.querySelector("button").addEventListener("click", addStuff);

//funktionalitet för att lägga till en ny to-do
function addStuff(){
    myList.innerHTML = "";
    let myInput = document.getElementById("inputStuff");
    let todo = new Todo(myInput.value, false);
    todoArray.push(todo);
    console.log(todoArray);
    myInput.value = "";
    createTodo();
    
}










    




