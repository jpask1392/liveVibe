// define type constants
export const ADD_PERSON = 'ADD_PERSON'
export const REMOVE_PERSON = 'REMOVE_PERSON'
export const SET_ACTIVE_AGE_RANGE = 'SET_ACTIVE_AGE_RANGE'
export const SET_MAX_CAPACITY = 'SET_MAX_CAPACITY'

// Notes
// Components that need access to data:
// People tracking bar on checkin page - count, gender
// Activty page - count, gender, dates

// structure of store
const appState = [{ gender: String, ageRange: String }]

// define actions
export const add_person = person => ({
	type: ADD_PERSON,
	person
})

export const remove_person = person => ({
	type: REMOVE_PERSON,
	person
})

export const set_active_age_range = ageRange => ({
	type: SET_ACTIVE_AGE_RANGE ,
	ageRange
})

export const set_max_capacity = maxCapacity => ({
    type: SET_MAX_CAPACITY,
    maxCapacity
})