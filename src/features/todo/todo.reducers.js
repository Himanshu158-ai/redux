import { nanoid } from 'nanoid'

export const AddTodo = (state, action) => {
    state.todos.push({
        id: nanoid(),
        text: action.payload.text,
        completed: false
    })
}

export const DeleteTodo = (state, action) => {
    state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload.id
    );
}

export const UpdateTodo = (state, action) => {
    state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
    );
    state.editTodo = null;
}

export const CompleteTodo = (state, action)=>{
    const todo = state.todos.find((todo)=> todo.id===action.payload.id);
    if(todo){
        todo.completed = action.payload.completed;
    }
}