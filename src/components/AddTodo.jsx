import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {todoAdded, todoUpdate} from "../features/todo/todo.slice"

const AddTodo = () => {
    const [input, setinput] = useState("")

    const editTodo = useSelector((state) => state.todos.editTodo);

    useEffect(()=>{
        if(editTodo){
            setinput(editTodo.text);
        }
    },[editTodo])

    const dispatch = useDispatch();

    function handelSubmit(e){
        e.preventDefault();
        if (input.trim() === "") return;
        if (editTodo) {
            dispatch(todoUpdate({id: editTodo.id, text: input}));
        } else {
            dispatch(todoAdded({text:input}));
        }
        setinput('');
    }
    
    return (
        <div className="mb-6">
            <form onSubmit={handelSubmit} className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    placeholder='Enter text'
                    onChange={(e) => setinput(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1">
                    {editTodo ? "Update" : "Submit"}
                </button>
            </form>
        </div>
    )
}

export default AddTodo