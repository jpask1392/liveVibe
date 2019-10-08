import React, { Fragment } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from './headerBar'
import CounterBtns from './counterBtns'

const CheckIn = props => {
	return (
		<View style={styles.container}>

			<HeaderBar>Checkin</HeaderBar>
			
			<Text style={{marginLeft: 20, marginTop: 20}}>Select Age Range</Text>
			<View style={styles.ageRangeContainer}>
				<View style={styles.ageRangeBtn}>
					<Text>18 - 25</Text>
				</View>
				<View style={styles.ageRangeBtn}>
					<Text>25 - 35</Text>
				</View>
				<View style={styles.ageRangeBtn}>
					<Text>35 - 50</Text>
				</View>
			</View>

			<View style={styles.clickerbtnContainer}>
				<CounterBtns gender="male" />
				<CounterBtns gender="female" />
			</View>

			<View style={styles.capacityDisplayContainer}>
				<View style={styles.capacityDisplay}></View>
			</View>
		</View>
	)
}

CheckIn.navigationOptions = {
	title: 'Check In',
	...headerStyles
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	},
	ageRangeContainer: {
		flex: 0.2,
		flexDirection: "row",
		justifyContent: "space-between",
		marginLeft: 20,
		marginRight: 20,
		alignItems: "center"
	},
	ageRangeBtn: {
		height: 35,
		paddingLeft: 20,
		paddingRight: 20,
		borderRadius: 35,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "black",
	},
	clickerbtnContainer: {
		flex: 0.6,
		flexWrap: 'wrap',
		justifyContent: 'space-evenly',
		flexDirection: 'row'
	},
	capacityDisplayContainer: {
		flex: 0.2,
		justifyContent: 'flex-end'
	},
	capacityDisplay: {
		height: 40,
		backgroundColor: featureStyles.dark
	}
})

export default CheckIn
