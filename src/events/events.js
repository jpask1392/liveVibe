import React, { useState, useEffect } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TextInput,
	ScrollView
} from 'react-native'
import { featureStyles } from '../commonStyles'
import HeaderBar from '../components/headerBar'
import EventTile from '../events/eventTile'
import AddBtn from '../events/addButton'
import SearchBarContainer from './searchBarContainer'

const Events = props => {
	const [events, setEvents] = useState([])

	// api call get request for all event items
	useEffect(() => {
		fetch('http://localhost:3000/api/events')
			.then(res => res.json())
			.then(events => setEvents(events))
	}, [])

	return (
		<View style={styles.container}>
			<HeaderBar theme="dark">Events</HeaderBar>
			<View style={styles.header}>
				<SearchBarContainer />
			</View>
			<ScrollView>
				{events.map((event, i) => (
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
})

export default Events
