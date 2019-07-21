/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  GETTING_SMURFS,
  GET_SMURF_COMPLETE,
  GET_SMURFS_FAILED,
  ADD_SMURF
} from '../actions'
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
  smurfs: [],
  gettingSmurfs: false,
  addingSmurf: false
}

/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
export default function(state = initialState, action) {
  switch(action.type) {
    case GETTING_SMURFS: {
      return {
        ...state,
        gettingSmurfs: true,
        addingSmurf: false
      }
    }
    case GET_SMURFS_COMPLETE: {
      return {
        ...state,
        gettingSmurfs: false,
        addingSmurf: false,
        smurfs: [...state.smurfs, ...action.payload]
      }
    }
    case GET_SMURFS_FAILED: {
      return {
        ...state,
        gettingSmurfs: true,
        addingSmurf: false,
        error: action.payload
      }
    }
    default:
      return state
  }
}