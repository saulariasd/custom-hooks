import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
};
export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
        const action = {
            type: "add",
            payload: todo,
        };
        dispatch(action);
    };

    const handleRemoveTodo = (todoId) => {
        const action = {
            type: "remove",
            payload: todoId,
        };
        dispatch(action);
    };

    const handleToogleTodo = (todoId) => {
        const action = {
            type: "toogle",
            payload: todoId,
        };
        dispatch(action);
    };

    return {
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleToogleTodo,
    };

}