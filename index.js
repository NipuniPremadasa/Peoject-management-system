import {MainController} from "./main_controller.js";
//import {ProjectRepository} from "./project_repository"

let newMainController =  new MainController();

document.addEventListener("DOMContentLoaded", newMainController.strat());

//console.log("This is index");

const filterButton = document.getElementById("filterBtn");
const keyword = document.getElementById("word").value;

filterButton.addEventListener("click", newMainController.searchByKeyword(keyword));


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
    //console.log(list);
}
