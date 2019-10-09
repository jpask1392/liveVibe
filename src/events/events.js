import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SearchBar } from 'react-native-elements'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from '../components/headerBar'
import EventTile from '../events/eventTile'
import AddBtn from '../events/addButton'

const tempEvents = [
	{
		eventName: 'Student Night',
		date: 'Date',
		openTime: 'Date', // default to standard openTime
		closeTime: 'Date', // default to standard closeTime
		eventDescription: 'String'
	},
	{
		eventName: 'String',
		date: 'Date',
		openTime: 'Date', // default to standard openTime
		closeTime: 'Date', // default to standard closeTime
		eventDescription: 'String'
	},
	{
		eventName: 'String',
		date: 'Date',
		openTime: 'Date', // default to standard openTime
		closeTime: 'Date', // default to standard closeTime
		eventDescription: 'String'
	},
	{
		eventName: 'String',
		date: 'Date',
		openTime: 'Date', // default to standard openTime
		closeTime: 'Date', // default to standard closeTime
		eventDescription: 'String'
	}
]

const Events = props => {
	// const [events, setEvents] = useState([])
	let [search, updateSearch] = useState('')

	return (
		<View style={styles.container}>
			<HeaderBar theme="dark">Events</HeaderBar>
			<View style={styles.header}>
				<SearchBar
					containerStyle={styles.searchBar}
					onChangeText={search => updateSearch(search)}
					value={search}
					placeholder="Search events"
					round={true}
				/>
			</View>
			<ScrollView>
				{tempEvents.map((event, i) => (
					<EventTile
						key={i}
						date={event.date}
						name={event.eventName}
						description={event.eventDescription}
					/>
				))}
			</ScrollView>
			<AddBtn />
		</View>
	)
}

Events.navigationOptions = {
	title: 'Events',
	...headerStyles
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	},
	header: {
		height: 125,
		backgroundColor: featureStyles.dark,
		alignItems: 'center',
		justifyContent: 'center'
	},
	searchBar: {
		width: '85%',
		backgroundColor: 'transparent',
		borderTopColor: 'transparent',
		borderBottomColor: 'transparent'
	}
})

export default Events
