import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Dashboard = props => {
	const tiles = [
		{ title: 'Profile', picture: 'skjds', link: 'skjds' },
		{ title: 'Check in', picture: 'skjds', link: 'skjds' },
		{ title: 'Events', picture: 'skjds', link: 'skjds' },
		{ title: 'Activity', picture: 'skjds', link: 'skjds' },
        { title: 'Settings', picture: 'skjds', link: 'skjds' },
        { title: '', picture: '', link: '' },
	]

	const { navigation } = props
	const name = navigation.getParam('name')
	return (
		<View style={styles.wrapper}>
			{/* <Text>Welcome {name}!</Text> */}
			<View style={styles.tileContainer}>
				{tiles.map((tile, i) => (
					<DashboardTile
						key={i}
						title={tile.title}
						picture={tile.picture}
						link={tile.link}
					/>
				))}
			</View>
		</View>
	)
}

const DashboardTile = props => (
	<TouchableOpacity style={styles.dashboardTile}>
		<Text>{props.title}</Text>
		<Text>{props.picture}</Text>
		<Text>{props.link}</Text>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		backgroundColor: '#F5F5F5',
		justifyContent: 'center'
	},
	tileContainer: {
        flex: 0.7,
        width: "90%",
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
        alignContent: "stretch", 
        alignSelf: "center"
	},
	dashboardTile: {
		width: '45%',
		backgroundColor: 'white',
        marginTop: 5,
        marginBottom: 5,
        flexDirection: 'column',
        borderRadius: 10,
        shadowColor: "black",
        shadowOffset: {width: 1, height: 1},
        shadowOpacity: 0.1,
	}
})

export default Dashboard
