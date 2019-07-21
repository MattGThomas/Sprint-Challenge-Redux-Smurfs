import axios from 'axios'
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ADD_SMURF = 'ADD_SMURF'

export const GETTING_SMURFS = 'GETTING_SMURFS'
export const GET_SMURFS_COMPLETE = ' GET_SMURFS_COMPLETE' 
export const GET_SMURFS_FAILED = 'GET_SMURFS_FAILED'

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
export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GETTING_SMURFS })
    axios.get('http://localhost:3333/smurfs')
      .then((res) => {
        dispatch({ type: GET_SMURFS_COMPLETE, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: GET_SMURFS_FAILED, payload: err.response.data })
      })
  }
}