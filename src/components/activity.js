import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from './headerBar'

const Activity = props => {

	return (
		<View style={styles.container}>
			<HeaderBar>Activity</HeaderBar>
		</View>
	)
}

Activity.navigationOptions = {
	title: 'Activity',
	...headerStyles
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	}
})

export default Activity
