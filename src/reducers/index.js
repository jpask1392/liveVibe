import { combineReducers } from 'redux'
import {
	ADD_PERSON,
	REMOVE_PERSON,
	SET_ACTIVE_AGE_RANGE,
	SET_MAX_CAPACITY
} from '../actions'

const people = (state = [], action) => {
	switch (action.type) {
		case ADD_PERSON:
			return [...state, action.person]
		case REMOVE_PERSON:
			const removeIndex = state.findIndex(
				existPerson =>
					JSON.stringify(existPerson) ===
					JSON.stringify(action.person)
			)
			state.splice(removeIndex, 1)
			return state.length > 0 ? [...state] : []
		default:
			return state
	}
}

const ageRange = (state = '18 - 25', action) => {
	switch (action.type) {
		case SET_ACTIVE_AGE_RANGE:
			return action.ageRange
		default:
			return state
	}
}

const maxCapacity = (state = 0, action) => {
	switch (action.type) {
		case SET_MAX_CAPACITY:
			return action.maxCapacity
		default:
			return state
	}
}

const reducer = combineReducers({
	people,
	ageRange,
	maxCapacity
})

export default reducer
