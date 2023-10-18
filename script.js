const item = document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")
item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
        
    }
    
})
const addToDo = (item) =>{

    const listContainer = document.createElement("li")
    listContainer.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
`;

listContainer.addEventListener("click", function(){
    listContainer.classList.toggle("done");
})
listContainer.querySelector("i").addEventListener("click", function(){
    listContainer.remove();
})
todobox.appendChild(listContainer)

}

