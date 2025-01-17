// import in all of the action types from `../actions`

import {
  ADD_SMURF, GET_SMURF, UPDATE_SMURF, DELETE_SMURF, 
  GET_SUCCESS, GET_FAILED, ADD_FAILED
} from '../actions'

 // initial/default state
 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null,
   addError: null
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
        error: action.payload,
			}
    }
    case ADD_SMURF: {	
      // Creating a new smurf
			return {
        ...state,
        addingSmurf: true,
        error: null
			}
    }
    case ADD_FAILED: {	
			return {
				...state,
        addError: action.payload,
			}
    }
    case UPDATE_SMURF: {	
      // Placeholder for updating a smurf
			return {
				...state,
			}
    }
    case DELETE_SMURF: {	
      // Placeholder for deleting a smurf
			return {
				...state,
			}
    }
		default:
			return state
	}
}