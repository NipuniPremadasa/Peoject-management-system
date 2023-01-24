import { ProjectRepository } from "./project_repository.js";
import { displayProjects } from "./index.js";

export class MainController{
    constructor() {
        this.newProjectRepository = new ProjectRepository();
        //this.newIndex = new index();
    }

    async strat(){
        let arr = await this.newProjectRepository.getAll();
       //console.log(arr);
       displayProjects(arr);
    }
    
    async searchByKeyword(keyword){
        console.log(keyword);
        let arr = this.newProjectRepository.getAll();
        console.log(arr);

        let filteredList = [];
        this.arr.forEach(item => {
            let name = item;
            if (name.toLowerCase().search(keyword.toLowerCase()) >= 0) {
                filteredList.push(item);
            }
        });
        //this.newProjectRepository.getAll();
        return filteredList;
    }
}
