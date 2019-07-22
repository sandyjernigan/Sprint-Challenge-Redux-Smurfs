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
export function addSmurf(payload) {
  console.log("addSmurf called")

	return (dispatch) => {
    console.log("Before Dispatch")
    dispatch({ type: GET_SMURF }) // Loading State
    console.log("After Dispatch")

		return axios.post("http://localhost:3333/smurfs", payload)
			.then((res) => {
        console.log("ADD_SMURF")
        console.log(payload)
				dispatch({ type: ADD_SMURF, payload })
			})
			.catch((err) => {
        console.log(err)
				dispatch({ type: GET_FAILED, payload: err.message })
			})
	}
}

// action creator - Read -> GET_SMURF
// Retrieve an array all the Smurfs in the Smurf DB
export function getSmurfs(smurf) {
	// can return a function because we're using redux-thunk
	return (dispatch) => { // receives direct access to the dispatcher
		dispatch({ type: GET_SMURF }) // Loading State

		axios.get('http://localhost:3333/smurfs')
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
        console.log(err)
				dispatch({ type: GET_FAILED, payload: err.message })
			})
	}
}

// action creator - Update --> UPDATE_SMURF
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