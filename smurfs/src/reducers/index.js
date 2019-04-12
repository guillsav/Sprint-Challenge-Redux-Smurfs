import {ADD_SMURF, GET_SMURF, UPDATE_SMURF, DELETE_SMURF} from '../actions';

const initialState = {
  smurfs: [],
  fetchingSmurfs: false,
  addingSmurf: false,
  updatingSmurf: false,
  deletingSmurf: false,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        addingSmurf: true,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case GET_SMURF:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: [...state.smurfs],
        fetchingSmurfs: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      };
    case DELETE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        fetchingSmurfs: false,
        updatingSmurf: true,
        deletingSmurf: true,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
