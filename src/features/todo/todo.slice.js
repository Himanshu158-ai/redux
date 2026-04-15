import { createSlice } from '@reduxjs/toolkit'
import { AddTodo, CompleteTodo, DeleteTodo, UpdateTodo } from './todo.reducers'


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
        todoUpdate:UpdateTodo,
        todoComplete:CompleteTodo
    }
})

export const { todoAdded, todoDelete, todoEdit, todoUpdate, todoComplete } = todosSlice.actions
export default todosSlice.reducer