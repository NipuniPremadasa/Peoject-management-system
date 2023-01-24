import {MainController} from "./main_controller.js";

let newMainController =  new MainController();

document.addEventListener("DOMContentLoaded", newMainController.strat());

const filterButton = document.getElementById("filterBtn");


filterButton.addEventListener("click", function(){
    const keyword = document.getElementById("word").value;
    newMainController.searchByKeyword(keyword);
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
    var projectlistView = document.getElementById("list");
    var element = projectlistView.lastElementChild;
    while (element) {
        projectlistView.removeChild(element);
        element = projectlistView.lastElementChild;
    }
}
