import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todo/todo.slice'

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    }
})