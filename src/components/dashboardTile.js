import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const DashboardTile = props => {
	const { navigate } = props.navigate
	return (
		<TouchableOpacity
			style={styles.dashboardTile}
			onPress={() => navigate(props.link)}>
			<View style={styles.iconContainer}>
				<Icon name={props.icon} size={40} color="black" />
			</View>
			<View style={styles.headingContainer}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	dashboardTile: {
		width: '45%',
		backgroundColor: 'white',
		marginTop: 5,
		marginBottom: 5,
		flexDirection: 'column',
		borderRadius: 10,
		shadowColor: 'black',
		shadowOffset: { width: 1, height: 1 },
		shadowOpacity: 0.1,
		padding: 20
	},
	iconContainer: {
		flexGrow: 0.8,
		justifyContent: 'center',
		alignContent: 'center'
	},
	headingContainer: {
		flexGrow: 0.2,
		justifyContent: 'flex-end'
	}
})

export default DashboardTile