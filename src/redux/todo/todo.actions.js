import { ADD_TODO, TOGGLE_TODO, SET_CURRENT, REMOVE_TODO, ADD_NOTE, GET_NOTES, REMOVE_NOTE, SET_NOTE, UPDATE_NOTE, RESET_NOTE } from './todo.types';

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
})

export const setCurrent = id => ({
  type: SET_CURRENT,
  payload: id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const deleteTodo = id => ({
  type: REMOVE_TODO,
  payload: id
})

export const getNotes = id => ({
  type: GET_NOTES,
  payload: id
})

export const addNote = (id, note) => ({
  type: ADD_NOTE,
  id,
  payload: note
})

export const removeNote = (todoId, noteId) => ({
  type: REMOVE_NOTE,
  todoId,
  noteId
})

export const setNote = (note) => ({
  type: SET_NOTE,
  payload: note
})

export const updateNote = (todoId, note) => ({
  type: UPDATE_NOTE,
  todoId,
  payload: note
})

export const resetNote = () => ({
  type: RESET_NOTE
})