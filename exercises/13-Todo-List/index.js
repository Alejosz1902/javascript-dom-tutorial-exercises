// Your code here
// Obtain elements from HTML
let listImput = document.getElementById("addToDo");
let list = document.querySelector("ul");

//Add new element to list
let addElement = () =>{
    const taskContent = list.value.trim();
    if (taskContent !== ""){
        const newTask =  document.createElement('li');
        newTask.innerHTML = `<span><i class="fa fa-trash"></i></span> ${taskContent}`;
        list.appendChild(newTask);
        list.value ='';
    }
}

//Delete element from list

let deleteElement = (event) => {
    let clickedElement = event.target;
    if(clickedElement.classList.contains("fa-trash")){
        let listElement = clickedElement.parentElement.parentElement;
        list.removeChild(listElement);
    }
}

//Add element by pressing enter 

listImput.addEventListener("keypress",function(e){
    if (e.key === "Enter"){
        addElement();
    }
})

//Remove element by clicking 

list.addEventListener('click',deleteElement);