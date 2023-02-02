//import data from './project.json';

export class ProjectRepository{
    constructor(){
      
    }

    async getAll(){
     let response = await fetch("./projects.json");
     //console.log(projects.json());
     let projectsJson=await response.json();
     //console.log(projectsJson);
     
      this.projectList = [];
      // this.projectList= projects.map(function(element){
      //   return element.name;
      // }
      // );
      for (let i=0;i<projectsJson.projects.length;i++){
        this.projectList.push(projectsJson.projects[i].name);
      }
      console.log(this.projectList);
      return this.projectList; 
    } 
  }