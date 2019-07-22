import axios from 'axios' // database management

// Action Types
export const ADD_SMURF = 'ADD_SMURF'
export const GET_SMURF = 'GET_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

// Data Actions
export const GET_SUCCESS = 'GET_SUCCESS' // successful
export const GET_FAILED = 'GET_FAILED' // fails

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf UPDATE_SMURF
   D - deleteSmurf DELETE_SMURF
*/

// action creator - Create
export function addSmurf(smurf) {
	return {
		type: ADD_SMURF,
		payload: {
			smurf,
		}
	}
}

// action creator - Read -> GET_SMURF
// Retrieve an array all the Smurfs in the Smurf DB
export function getSmurfs(smurf) {
	// can return a function because we're using redux-thunk
	return (dispatch) => { // receives direct access to the dispatcher
		// enter the "loading" state
		dispatch({ type: GET_SMURF })

		axios.get('http://localhost:3333/smurf')
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
        console.log(err)
				dispatch({ type: GET_FAILED, payload: err.message })
			})
	}
}

// action creator - Update
export function updateSmurf(smurf) {
	return {
		type: UPDATE_SMURF,
		payload: {
			smurf,
		}
	}
}

// action creator - Delete
export function deleteSmurf(smurf) {
	return {
		type: DELETE_SMURF,
		payload: {
			smurf,
		}
	}
}