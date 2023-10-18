const item = document.querySelector("#item")
const todobox = document.querySelector("#to-do-box")
item.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addToDo(this.value)
        this.value = ""
        localStorage.setItem("todo",JSON.stringify(todobox.value))
        //  saveData();
    }
    
})
const addToDo = (item) =>{
    const listContainer = document.createElement("li")
    listContainer.innerHTML = `
    ${item}
    <i class="fas fa-times"></i>
`;
// saveData();
listContainer.addEventListener("click", function(){
    listContainer.classList.toggle("done");
})
listContainer.querySelector("i").addEventListener("click", function(){
    listContainer.remove();
})
todobox.appendChild(listContainer)
// saveData();
}

// function saveData(){
//     localStorage.setItem("data",item.value)
// }
// localStorage.setItem("key1","${item}")
// localStorage.getItem("${item}")