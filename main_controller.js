import { ProjectRepository } from "./project_repository.js";
import { displayProjects } from "./index.js";

export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
        //this.newIndex = new index();
    }

    async strat(){
        let arr = await this.newProjectRepository.getAll();
       console.log(arr);
       displayProjects(arr);
    }
    
    searchByKeyword(keyword){
        console.log(keyword);
        //this.newProjectRepository.getAll();
    
    }
}
