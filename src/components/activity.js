import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Activity = props => {

	return (
		<View>
			<Text>Activity!</Text>
		</View>
	)
}

Activity.navigationOptions = {
	title: 'Activity',
	...headerStyles
}

export default Activity
