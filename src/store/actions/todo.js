export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const CHECK_TODO = 'CHECK_TODO';
export const FAVORITE_TODO = 'FAVORITE_TODO';

export const addTodo = (name, place, day, start, end) => {
  return {type: ADD_TODO, name, place, day, start, end};
};

export const editTodo = (id, name, place, day, start, end) => {
  return {type: EDIT_TODO, id, name, place, day, start, end};
};

export const checkTodo = (id) => {
  return {type: CHECK_TODO, id};
};

export const deleteTodo = (id) => {
  return {type: DELETE_TODO, id};
};

export const favoriteTodo = (id) => {
  return {type: FAVORITE_TODO, id};
};
