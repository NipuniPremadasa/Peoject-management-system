import { ProjectRepository } from "./project_repository.js"
export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
    }

    strat(){
        this.newProjectRepository.getAll();
       //console.log(projectList);
    }
    
    searchByKeyword(keyword){
        console.log(keyword);
        //this.newProjectRepository.getAll();
    
    }
}
