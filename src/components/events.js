import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Events = props => {

	return (
		<View>
			<Text>Events!</Text>
		</View>
	)
}

Events.navigationOptions = {
	title: 'Events',
	...headerStyles
}

export default Events