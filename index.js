import {MainController} from "./main_controller.js";

let newMainController =  new MainController();

document.addEventListener("DOMContentLoaded", newMainController.strat());

const filterButton = document.getElementById("filterBtn");
const resetButton = document.getElementById("resetBtn");

filterButton.addEventListener("click", function(){
    const keyword = document.getElementById("word").value;
    newMainController.searchByKeyword(keyword);
});

resetButton.addEventListener("click", function(){
    //const keyword = document.getElementById("word").value;
    newMainController.reset();
});

 export function displayProjects(array){
    const list = document.querySelector(".list");
                
    const addList = (array, element) => {
        array.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item
            element.appendChild(li)
        });
    }
            
    addList(array, list);
}

export function removeList(){
    let projectlistView = document.getElementById("list");
    let element = projectlistView.lastElementChild;
    while (element) {
        projectlistView.removeChild(element);
        element = projectlistView.lastElementChild;
    }
}

export function errorMessage(message){
    let error = document.getElementById("error");
    error.textContent = message;
    error.style.display = 'block';
}

export function hideMessage(message){
    let error = document.getElementById("error");
    error.textContent = message;
    error.style.display = 'none';
}
