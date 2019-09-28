import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { headerStyles, featureStyles } from '../commonStyles'
import DashboardTile from './dashboardTile'

const Dashboard = props => {
	let navigationOptions

	const tiles = [
		{ title: 'Profile', icon: 'user', link: 'Profile' },
		{ title: 'Check in', icon: 'check-square', link: 'CheckIn' },
		{ title: 'Events', icon: 'calendar', link: 'Events' },
		{ title: 'Activity', icon: 'line-chart', link: 'Activity' },
		{ title: 'Settings', icon: 'cog', link: 'Settings' }
	]

	console.log(headerStyles)

	const { navigation } = props
	const name = navigation.getParam('name', 'user')
	return (
		<View style={styles.wrapper}>
			<View style={styles.tileContainer}>
				{tiles.map((tile, i) => (
					<DashboardTile
						key={i}
						title={tile.title}
						icon={tile.icon}
						link={tile.link}
						navigate={props.navigation}
					/>
				))}
			</View>
		</View>
	)
}

Dashboard.navigationOptions = {
	title: 'Dashboard',
	...headerStyles
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor,
		justifyContent: 'center'
	},
	tileContainer: {
		flex: 0.8,
		width: '90%',
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		alignContent: 'stretch',
		alignSelf: 'center'
	}
})

export default Dashboard
