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

    }

    getAll(){
      console.log("This is project repository");
      const list = document.querySelector(".list");
         
      const addList = (projects, element) => {
        projects.forEach(item => {
            const li = document.createElement('li')
            li.textContent = item.name
            element.appendChild(li)
        });
      }
      //console.log(addList );
      //addList(projects, list);
      addList(projects, list);
      console.log(list);
      
    }

    
  }