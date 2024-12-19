import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx"
import NoProject from "./components/NoProject.jsx";
function App() {
const [projectState, setProjectState ] = useState({
  selectedProjectId: undefined,
  projects: []
});
  
function  handleStartProject (){
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId:null,
    }
  });
}

function handleAddProject(projectData){
  setProjectState(prevState => {
    const newProject = {
      ...projectData,
      id: Math.random()
    };
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    }
  })
}


let content;
if (projectState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProject} />
} else if (projectState.selectedProjectId === undefined){
  content = <NoProject onStartProject={handleStartProject} />
}

return (
      <main className="h-screen my-8 flex gap-8">
        <SideBar 
          onStartProject={handleStartProject} 
          projects={projectState.projects} 
        />
            {content}
      </main>   
  );
}

export default App;