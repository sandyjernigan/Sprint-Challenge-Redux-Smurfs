// import in all of the action types from `../actions`

import {
  ADD_SMURF, GET_SMURF, UPDATE_SMURF, DELETE_SMURF, 
  GET_SUCCESS, GET_FAILED
} from '../actions'

 // initial/default state
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 // export reducer
export default function(state = initialState, action) {
	switch (action.type) {
		case GET_SMURF: {			
			return {
				...state,
        smurfs: [],
        fetchingSmurfs: true
			}
    }
    case GET_SUCCESS: {	
			return {
				...state,
        smurfs: action.payload,
        fetchingSmurfs: false,
        error: null
			}
    }
    case GET_FAILED: {	
			return {
				...state,
        fetchingSmurfs: false,
        error: action.payload
			}
    }
    
// ADD_SMURF, UPDATE_SMURF, DELETE_SMURF
		default:
			return state
	}
}