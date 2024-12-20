import { useState } from "react";
import SideBar from "./components/SideBar.jsx";
import NewProject from "./components/NewProject.jsx"
import NoProject from "./components/NoProject.jsx";
import SelectedProject from "./components/SelectedProject.jsx";
function App() {
const [projectState, setProjectState ] = useState({
  selectedProjectId: undefined,
  projects: [],
  tasks: [],
});

function handleAddTask(text){
  setProjectState(prevState => {
    const taskId = Math.random();
    const newtask = {
      text: text,
      projectId: prevState.selectedProjectId,
      id: taskId
    };
    return {
      ...prevState,
      tasks: [...prevState.tasks, newtask]
    }
  })
}

function handleDeleteTask(){

}  

function  handleStartProject (){
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId:null,
    }
  });
}

function handleSelectProject(id){
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: id,
    }
  });
}

function handleCancelProject(){
  setProjectState(prevState => {
    return {
      ...prevState,
      selectedProjectId: undefined,
    }
  });
}

function handleAddProject(projectData){
  setProjectState(prevState => {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    };
    return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject]
    }
  })
}

function handleDeleteProject(){
    setProjectState((prevState) => {
      return{
        ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
};

const selectedPeoject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

let content = (<SelectedProject 
                  project={selectedPeoject} 
                  onDelete={handleDeleteProject} 
                  onAddTask={handleAddTask} 
                  onDleteTask={handleDeleteTask}
                  tasks={projectState.tasks}
                />);

if (projectState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProject} onCancel={handleCancelProject} />
} else if (projectState.selectedProjectId === undefined){
  content = <NoProject onStartProject={handleStartProject} />
}

return (
      <main className="h-screen my-8 flex gap-8">
        <SideBar 
          onStartProject={handleStartProject} 
          projects={projectState.projects} 
          onSelectProject={handleSelectProject}
        />
            {content}
      </main>   
  );
}

export default App;