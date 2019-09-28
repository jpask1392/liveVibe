import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const CheckIn = props => {

	return (
		<View>
			<Text>Check In!</Text>
		</View>
	)
}

CheckIn.navigationOptions = {
	title: 'Check In',
	...headerStyles
}

export default CheckIn
