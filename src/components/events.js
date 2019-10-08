import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from './headerBar'

const Events = props => {

	return (
		<View style={styles.container}>
			<HeaderBar>Events</HeaderBar>
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
	}
})

export default Events