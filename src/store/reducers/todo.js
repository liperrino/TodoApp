import moment from 'moment';
import {
  ADD_TODO,
  EDIT_TODO,
  CHECK_TODO,
  FAVORITE_TODO,
  DELETE_TODO,
} from '../actions/todo';

import Todo from '../../models/TodoModel';

let dt = new Date();
let ds = dt;
dt.setDate(dt.getDate() + 3);

const Todos = [];
const initialState = {
  todos: Todos,
  favors: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const key = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 10);
      const newTodo = new Todo(
        key,
        action.name,
        action.place,
        action.day,
        action.start,
        action.end,
      );
      const existingTodos = [newTodo, ...state.todos];
      return {...state, todos: existingTodos};
    case EDIT_TODO:
      const updatedTodos = [...state.todos];
      updatedTodos.filter((todo) => {
        if (todo.key === action.id) {
          todo.isChecked = action.isChecked;
          todo.name = action.name;
          todo.place = action.place;
          todo.start = action.start;
          todo.end = action.end;
          todo.day = action.day;
        }
        return todo;
      });
      return {...state, todos: updatedTodos};
    case CHECK_TODO:
      const checkedTodos = [...state.todos];
      checkedTodos.map((todo) => {
        if (todo.key === action.id) {
          todo.isChecked = !todo.isChecked;
        }
        return todo;
      });
      return {...state, todos: checkedTodos};
    case DELETE_TODO:
      let deletedTodos = [...state.todos];
      let deletedFavors = [...state.favors];
      deletedTodos = deletedTodos.filter((todo) => {
        if (todo.key !== action.id) return todo;
      });
      deletedFavors = deletedFavors.filter((todo) => {
        if (todo.key !== action.id) return todo;
      });
      return {...state, todos: deletedTodos, favors: deletedFavors};
    case FAVORITE_TODO: {
      let favors = [...state.favors];
      let deletedFavors = favors.filter((todo) => {
        if (todo.key !== action.id) return todo;
      });
      if (deletedFavors.length === favors.length) {
        const todo = state.todos.find((todo) => {
          if (todo.key === action.id) return todo;
        });
        const newFavors = [todo, ...state.favors];
        return {...state, favors: newFavors};
      }
      return {...state, favors: deletedFavors};
    }
    default:
      return state;
  }
};
export default todosReducer;
