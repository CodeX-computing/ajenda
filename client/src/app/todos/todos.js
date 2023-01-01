const GET_TODOS = 'ajenda/todos/GET_TODOS';
const SET_TODOS = 'ajenda/todos/SET_TODOS';

const getTodos = () => ({
  type: GET_TODOS,
});

const setTodos = (todos) => ({
  type: SET_TODOS,
  payload: todos,
});

const getTodosThunk = () => (dispatch) => {
  fetch('/api/todos')
    .then((res) => res.json())
    .then((data) => dispatch(setTodos(data.todos)));
};

// Create todo action creators for submeting the todos to the database after building the backend

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return {
        ...state,
      };
    }
    case SET_TODOS:
      return { ...state, todos: action.payload };
    default:
      return state;
  }
};

export { getTodos, setTodos, getTodosThunk };
export default todosReducer;
