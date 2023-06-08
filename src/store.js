

export const Actions ={
  ADD_TODO: "add",
  DEL_TODO: "del",
  DONE_TODO: "done"
}

export function reducer(todos, action){
  switch (action.type) {
    case Actions.ADD_TODO:
      return [...todos , newItem(action.payload.name)]
    case Actions.DEL_TODO:
      return todos.filter(todo => todo.id !== action.payload.id);
    case Actions.DONE_TODO:
        return (todos.map(todo => {
        if(todo.id === action.payload.id){
        return {...todo, complete : !todo.complete}
        }
        return todo;
        }));
    default:
      return todos;
  }
}

function newItem(name){
  return {id:Date.now(), name: name, complete: false};
}
