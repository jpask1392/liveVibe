import React, { useState } from 'react'
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	TouchableHighlight
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { featureStyles } from '../commonStyles'
import HeaderBar from '../components/headerBar'
import CounterBtns from './counterBtns'
import AgeRangeBtns from './ageRangeBtns'
import CapacityDisplay from './capacityDisplay'

const CheckIn = props => {
	return (
		<View style={styles.container}>
			<HeaderBar>Checkin</HeaderBar>

			<Text style={{ marginLeft: 20, marginTop: 20 }}>
				Select Age Range
			</Text>

			<AgeRangeBtns />

			<View style={styles.clickerbtnContainer}>
				<CounterBtns gender="male" />
				<CounterBtns gender="female" />
			</View>

			<CapacityDisplay />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
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
