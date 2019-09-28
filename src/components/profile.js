import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Profile = props => {

	return (
		<View>
			<Text>Profile!</Text>
		</View>
	)
}

Profile.navigationOptions = {
	title: 'Profile',
	...headerStyles
}

export default Profile