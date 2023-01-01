const GET_GOALS = 'ajenda/goals/GET_GOALS';
const SET_GOALS = 'ajenda/goals/SET_GOALS';

const getGoals = (data) => ({
  type: GET_GOALS,
  payload: {
    data,
  },
});

const setGoals = (goals) => ({
  type: SET_GOALS,
  payload: goals,
});

const getGoalsThunk = () => (dispatch) => {
  fetch('http://127.0.0.1:3001/api/goals')
    .then((res) => res.json())
    .then((data) => dispatch(getGoals(data)));
};

// Create goal action creators for submeting the goals to the database after building the backend

const initialState = {
  goals: [],
};

const goalsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_GOALS:
      return action.payload;
    case SET_GOALS:
      return { ...state, goals: action.payload };
    default:
      return state;
  }
};

export { getGoals, setGoals, getGoalsThunk };
export default goalsReducer;
