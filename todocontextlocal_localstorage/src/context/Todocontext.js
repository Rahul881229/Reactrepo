import {createContext, useContext, useState} from 'react'

export const TodoContext = createContext({
    todos: [
        {id:1,
            todo: "Todd msg",
            isCompleted: false
        }, 
        {

        },
        {

        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, updatedTodo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})
export const useTod = () => {
    return useContext(TodoContext)
}

 export const TodoProvider = TodoContext.Provider