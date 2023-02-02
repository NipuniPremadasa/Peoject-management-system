import { ProjectRepository } from "./project_repository.js";
import { displayProjects } from "./index.js";
import { removeList } from "./index.js";
import { showErrorMessage } from "./index.js";
import { hideMessage } from "./index.js";

export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
    }

    async strat(){
        let arr = await this.newProjectRepository.getAll();
        if(arr.length==0){
            showErrorMessage("Project list is not found!");
        }
        else{
            displayProjects(arr);
        } 
    }
    
    //search by keyword
    async searchByKeyword(keyword){
        console.log(keyword);
        let arr = this.newProjectRepository.getAll();
        console.log(arr);
       
           
        let filteredList = [];
        //filter project names with keyword and add to an array
        arr.forEach(item => {
            if (item.toLowerCase().search(keyword.toLowerCase()) !== -1) {
                filteredList.push(item);
            }
        });
        console.log(filteredList);


        if(filteredList.length==0){
            removeList();
            showErrorMessage("No result found!");
        }
        else{
            removeList();
            displayProjects(filteredList);
        }   
    }

    reset(){
        hideMessage();
        removeList(); 
        let arr = this.newProjectRepository.getAll();
        displayProjects(arr);
    }
}
