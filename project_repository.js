//import data from './project.json';

export class ProjectRepository{
    constructor(){
      //this.projectList = [];
      //this.projects =[];
    }

    async getAll(){
     let response = await fetch("./projects.json");
     //console.log(projects.json());
     let projectsJson=await response.json();
     //console.log(projectsJson);
     
    //  .then(function(response){
    //     return response.json();
        
    //  })
    //  .then(function(data){
    //   for(let i=0;i<data.length;i++){
    //     console.log(data[i]);
    //   }
    //  })
     
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