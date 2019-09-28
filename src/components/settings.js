import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Settings = props => {

	return (
		<View>
			<Text>Settings!</Text>
		</View>
	)
}

Settings.navigationOptions = {
	title: 'Settings',
	...headerStyles
}

export default Settings
