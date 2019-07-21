// import in all of the action types from `../actions`

import {
	ADD_SMURF,
	GET_SMURF,
	UPDATE_SMURF,
	DELETE_SMURF
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
				smurfs: []
			}
		}
		default:
			return state
	}
}