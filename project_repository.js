const projects =  [
  { "id": 1, "name" : "Project Breeze" },
  { "id": 2, "name" :"Command Program" },
  { "id": 3, "name" :"Project Point" },
  { "id": 4, "name" :"Project Mecha" },
  { "id": 5, "name" :"Program Pad" },
  { "id": 6, "name" :"Project Synergy" },
  { "id": 7, "name" :"Dynamic Program" },
  { "id": 8, "name" :"Project Zen\Sen" }
];

export class ProjectRepository{
    constructor(){
      this.projectList = [];

    }

    getAll(){
      this.projectList= projects.map(function(element){
        return element.name;
      }
      );
      return this.projectList; 
    }

    
  }