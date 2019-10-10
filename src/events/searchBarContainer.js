import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements'

const SearchBarContainer = props => {
    let [search, updateSearch] = useState('')
    // search bar logic here
    // create an array that holds visible events - default to everything

	return (
		<SearchBar
			containerStyle={styles.searchBar}
			onChangeText={search => updateSearch(search)}
			value={search}
			placeholder="Search events"
			round={true}
		/>
	)
}

// custom edits to standard searchbar
const styles = StyleSheet.create({
    searchBar: {
		width: '85%',
		backgroundColor: 'transparent',
		borderTopColor: 'transparent',
		borderBottomColor: 'transparent'
	}
})

export default SearchBarContainer
