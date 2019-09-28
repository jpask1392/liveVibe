import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'

const Profile = props => {

	return (
		<View style={styles.container}>
			<Text>Profile!</Text>
		</View>
	)
}

Profile.navigationOptions = {
	title: 'Profile',
	...headerStyles
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	}
})

export default Profile