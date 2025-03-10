import Button from "./Button.jsx"
import SelectedProject from "./SelectedProject.jsx";
export default function SideBar({onStartProject, projects, onSelectProject, selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="text-xl font-bold text-stone-700 my-4">You Projects</h2>
            <Button onClick={onStartProject} children="+ Add Project" />
            <ul className="mt-8">
                {projects.map(project => {
                    let cssClasses ="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-600 hover:text-stone-100";
                    if(project.id === selectedProjectId){
                        cssClasses += 'bg-stone-800 text-stone-200'
                    }else {
                        cssClasses += 'text-stone-400'
                    }

                    return(
                        <li key={project.id}>
                        <button 
                        className={cssClasses}
                        onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                    </li>
                    );
                })}
            </ul>
        </aside>
    )
}