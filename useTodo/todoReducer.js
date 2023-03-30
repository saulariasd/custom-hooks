export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'add':
            return [...initialState, action.payload];
        case 'remove':
            return initialState.filter(todo => todo.id !== action.payload);
        case 'toogle':
            return initialState.map(todo =>
                (todo.id === action.payload) ? {...todo, done: !todo.done } :
                todo
            );

        default:
            return initialState;
    }
}