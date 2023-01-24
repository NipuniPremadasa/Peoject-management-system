import { ProjectRepository } from "./project_repository.js";
import { displayProjects } from "./index.js";

export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
    }

    async strat(){
        let arr = await this.newProjectRepository.getAll();
       displayProjects(arr);
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
        displayProjects(filteredList);
    }
}
