import NewTask from "./NewTask.jsx";
import { useState } from "react";


// export default function Tasks({onAdd, onDelete, tasks}){
//     return(
//         <section>
//             <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
//             <NewTask onAdd={onAdd} />
//             {tasks.length == 0 && <p className="text-stone-800 my-4">Thisproject doesn't have any tasks yet.</p>}
//             {tasks.length == 0 && <ul className="p-4 mt-8 rounded-md bg-stone-100">
//                                     {tasks.map((task) => (
//                                         <li key={task.id} className="flex justify-between my-4"> 
//                                             <span>{task.text}</span> 
//                                             <button className="text-stone-700 hover:text-red-500">Clear</button>
//                                         </li>))}
//                                   </ul>}
//         </section>
//     )
// };

export default function Tasks({ onAdd, onDelete, tasks, doing, setDoing, functionDoing }) {
  
    return (
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAdd={onAdd} /> {/* Passando a função onAdd para o NewTask */}
        {tasks.length === 0 && <p className="text-stone-800 my-4">This project doesn't have any tasks yet.</p>}
        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.text}</span>
                <button onClick={() => {
    console.log('Button clicked');
    functionDoing();  // Disparando a função onDoing, que está ligada a handleDoing
  }} className="text-stone-700 hover:text-red-500" style={{backgroundColor: doing ? 'green' : 'gray'}}>Doing</button>
                <button className="text-stone-700 hover:text-red-500">Clear</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    );
  }
  