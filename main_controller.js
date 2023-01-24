import { ProjectRepository } from "./project_repository.js";
import { displayProjects } from "./index.js";
import { removeList } from "./index.js";
import { errorMessage } from "./index.js";
import { hideMessage } from "./index.js";

export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
    }

    async strat(){
        let arr = await this.newProjectRepository.getAll();
        if(arr.length==0){
            errorMessage("Project list id not found");
        }
        else{
            displayProjects(arr);
        }
       
    }
    
    async searchByKeyword(keyword){
        console.log(keyword);
        let arr = this.newProjectRepository.getAll();
        console.log(arr);
       
           
            let filteredList = [];
            arr.forEach(item => {
                if (item.toLowerCase().search(keyword.toLowerCase()) !== -1) {
                    filteredList.push(item);
                }
            });
            console.log(filteredList);

            if(filteredList.length==0){
                removeList();
                //displayProjects(filteredList);
                errorMessage("No result found");
                
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
