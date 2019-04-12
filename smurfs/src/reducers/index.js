import {
  ADD_SMURF,
  GET_SMURF_START,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  UPDATE_SMURF,
  DELETE_SMURF_START,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from '../actions';

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
      const newSmurf = {
        id: Date.now(),
        name: action.payload.name,
        age: action.payload.age,
        height: action.payload.height
      };
      return {
        ...state,
        smurfs: [...state.smurfs, newSmurf],
        addingSmurf: true,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case GET_SMURF_START:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: true,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case GET_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case GET_SMURF_FAILURE:
      return {
        ...state,
        smurfs: [],
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    case UPDATE_SMURF:
      return {
        ...state,
        smurfs: state.smurfs,
        fetchingSmurfs: false,
        updatingSmurf: true,
        deletingSmurf: false,
        error: null
      };
    case DELETE_SMURF_START:
      return {
        ...state,
        smurfs: state.smurfs,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: true,
        error: null
      };
    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: state.smurfs.filter(smurf => smurf.id !== action.payload),
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: null
      };
    case DELETE_SMURF_FAILURE:
      return {
        ...state,
        smurfs: state.smurfs,
        fetchingSmurfs: false,
        updatingSmurf: false,
        deletingSmurf: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
