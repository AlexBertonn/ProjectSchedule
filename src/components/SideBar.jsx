import Button from "./Button.jsx"
export default function SideBar({onStartProject, projects}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="text-xl font-bold text-stone-700 my-4">You Projects</h2>
            <Button onClick={onStartProject} children="+ Add Project" />
            <ul className="mt-8">
                {projects.map(project => 
                <li key={project.id}>
                    <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                        {project.title}
                    </button>
                </li>)}
            </ul>
        </aside>
    )
}