import { createSlice } from '@reduxjs/toolkit'
import { AddTodo, DeleteTodo, UpdateTodo } from './todo.reducers'


const todosSlice = createSlice({
    name:'todo',
    initialState:{
        todos:[],
        editTodo:null
    },
    
    reducers:{
        todoAdded:AddTodo,
        todoDelete:DeleteTodo,
        todoEdit:(state,action)=>{
            state.editTodo = action.payload;
        },
        todoUpdate:UpdateTodo
    }
})

export const { todoAdded, todoDelete, todoEdit, todoUpdate } = todosSlice.actions
export default todosSlice.reducer