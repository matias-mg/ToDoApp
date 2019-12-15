import { ADD_TODO, TOGGLE_TODO, SET_CURRENT, ADD_NOTE, DELETE_TODO, GET_NOTES } from './todo.types';
import { addNote, setCurrentTodo } from './todo.utils';

const initialState = {
  todos: [],
  current: {
    id: 1,
    text: 'Testeo a Africa',
    active: true,
    date: new Date()
  }
}

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case SET_CURRENT:
      return {
        ...state,
        current: setCurrentTodo(state.todos, action.payload)
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          (todo.id === action.id)
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      }
    case ADD_NOTE:
      return {
        ...state,
        todos: addNote(state.todos, action.id, action.payload)
      }
    default:
      return state
  }
}

export default todos

