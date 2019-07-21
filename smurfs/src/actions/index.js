import axios from 'axios' // database management

// Action Types
export const ADD_SMURF = 'ADD_SMURF'
export const GET_SMURF = 'GET_SMURF'
export const UPDATE_SMURF = 'UPDATE_SMURF'
export const DELETE_SMURF = 'DELETE_SMURF'

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

// action creator - Read 
export function getSmurfs(smurf) {
	return {
		type: GET_SMURF,
		payload: {
			smurf,
		}
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