import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { featureStyles } from '../commonStyles'
import { connect } from 'react-redux'
import { add_person, remove_person } from '../actions'

const CounterBtns = props => {
	const buttonIconSize = 60

	const countPlus = () => {
		if (props.people.length < props.maxCapacity) {
			props.dispatch(
				add_person({
					gender: props.gender,
					ageRange: props.ageRange
				})
			)
		}
	}

	const countMinus = () => {
		if (props.people.length !== 0) {
			props.dispatch(
				remove_person({
					gender: props.gender,
					ageRange: props.ageRange
				})
			)
		}
	}

	console.log(props)

	return (
		<View style={styles.clickerColumn}>
			<View>
				<TouchableOpacity
					style={styles.clickerBtn}
					onPress={() => countPlus()}>
					<Icon
						name={props.gender}
						size={buttonIconSize}
						color={featureStyles.dark}
					/>
				</TouchableOpacity>
				<Text style={styles.plusMinusSign}>+</Text>
			</View>

			<View>
				<Text style={styles.plusMinusSign}>-</Text>
				<TouchableOpacity
					style={[
						styles.clickerBtn,
						{ backgroundColor: featureStyles.dark }
					]}
					onPress={() => countMinus()}>
					<Icon
						name={props.gender}
						size={buttonIconSize}
						color="white"
					/>
				</TouchableOpacity>
			</View>

			<View style={styles.genderTitles}>
				<Text style={styles.uppercaseHeadings}>{props.gender}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	clickerColumn: {
		width: '40%',
		borderRadius: 100,
		borderColor: 'black',
		borderWidth: 1,
		padding: 10,
		height: '100%',
		flexDirection: 'column',
		justifyContent: 'space-between',
		flexWrap: 'wrap'
	},
	clickerBtn: {
		width: '100%',
		aspectRatio: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: 200,
		shadowOffset: { width: 0, height: 10 },
		shadowColor: 'black',
		shadowOpacity: 0.1,
		shadowRadius: 15
	},
	plusMinusSign: {
		alignSelf: 'center',
		fontSize: 20
	},
	genderTitles: {
		position: 'absolute',
		alignSelf: 'center',
		bottom: -40
	},
	uppercaseHeadings: {
		textTransform: 'uppercase'
	}
})

const mapStateToProps = state => ({
	people: state.people,
	ageRange: state.ageRange,
	maxCapacity: state.maxCapacity
})

export default connect(mapStateToProps)(CounterBtns)
