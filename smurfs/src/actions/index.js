import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const GETTING_SMURFS = 'GETTING_SMURFS'
export const GET_SMURFS_COMPLETE = ' GET_SMURFS_COMPLETE' 
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

export const ADDING_SMURF = 'ADDING_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const ADD_SMURF_FAILED = 'ADD_SMURF_FAILED'
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
export const getSmurfs = () => dispatch => {
    dispatch({ type: GETTING_SMURFS })
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: GET_SMURFS_COMPLETE, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: GET_SMURFS_FAILED, payload: err.response.data })
      })
}
export const newSmurf = newSmurf => dispatch => {
    dispatch({ type: ADDING_SMURF })
    axios.post('http://localhost:3333/smurfs', newSmurf)
      .then((res) => {
        dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: ADD_SMURF_FAILED, payload: err})
      })
}