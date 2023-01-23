import {MainController} from "./main_controller.js";
//import {ProjectRepository} from "./project_repository"

let newMainController =  new MainController();

document.addEventListener("DOMContentLoaded", newMainController.strat());

console.log("This is index");

const filterButton = document.getElementById("filterBtn");

filterButton.addEventListener("click", newMainController.searchByKeyword(".word"));