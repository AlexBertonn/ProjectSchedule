import { useRef } from "react"
import Input from "./Input.jsx"
import { data } from "autoprefixer";
export default function NewProject({onAdd}){
   const titleRef = useRef();
   const descriptionRef = useRef();
   const dueDataRef = useRef();

   function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueData = dueDataRef.current.value;

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueData: enteredDueData,
    })
   }

    return(
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                </li>
                <li>
                    <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                            onClick={handleSave}>
                            Save
                    </button>
                </li>
            </menu>
            <div className="">
                <Input type="text" ref={titleRef} label="Title"/>
                <Input ref={descriptionRef} label="Description" textarea/>
                <Input type="date" ref={dueDataRef} label="Due Data"/>
            </div>
        </div>
    )
};