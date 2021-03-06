/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/

import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF';
export const GET_SMURF_START = 'GET_SMURF_START';
export const GET_SMURF_SUCCESS = 'GET_SMURF_SUCCESS';
export const GET_SMURF_FAILURE = 'GET_SMURF_FAILURE';
export const UPDATE_SMURF = 'UPDATE_SMURF';
export const DELETE_SMURF_START = 'DELETE_SMURF_START';
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';
export const DELETE_SMURF_FAILURE = 'DELETE_SMURF_FAILURE';

export const addSmurf = smurf => {
  return {
    type: ADD_SMURF,
    payload: smurf
  };
};

export const getSmurfs = () => dispatch => {
  dispatch({type: GET_SMURF_START});

  axios
    .get('http://localhost:3333/smurfs')
    .then(res => dispatch({type: GET_SMURF_SUCCESS, payload: res.data}))
    .catch(err => dispatch({type: GET_SMURF_FAILURE, payload: err.response}));
};

export const deleteSmurfs = id => dispatch => {
  dispatch({type: DELETE_SMURF_START});

  axios
    .delete('http://localhost:3333/smurfs')
    .then(() => dispatch({type: DELETE_SMURF_SUCCESS}))
    .catch(err =>
      dispatch({type: DELETE_SMURF_FAILURE, payload: err.response})
    );
};
