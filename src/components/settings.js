import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Settings = props => {

	return (
		<View style={styles.container}>
			<Text>Settings!</Text>
		</View>
	)
}

Settings.navigationOptions = {
	title: 'Settings',
	...headerStyles
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	}
})

export default Settings
