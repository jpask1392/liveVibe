import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { set_active_age_range } from '../actions'

const AgeRangeBtns = props => {
	const ageRanges = ['18 - 25', '25 - 35', '35 - 50']
	return (
		<View style={styles.ageRangeContainer}>
			{ageRanges.map((ageRange, i) => (
				<TouchableHighlight
					key={i}
					onPress={() =>
						props.dispatch(set_active_age_range(ageRange))
					}
					style={
						props.activeAgeRange === ageRange
							? [styles.ageRangeBtn, styles.activeAgeRange]
							: styles.ageRangeBtn
					}>
					<Text>{ageRange}</Text>
				</TouchableHighlight>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	ageRangeContainer: {
		flex: 0.2,
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20,
		alignItems: 'center'
	},
	ageRangeBtn: {
		height: 35,
		flex: 1,
		borderRadius: 35,
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: 'black',
		marginLeft: 5
	},
	activeAgeRange: {
		backgroundColor: 'red'
	}
})

const mapStateToProps = state => ({ activeAgeRange: state.ageRange })

export default connect(mapStateToProps)(AgeRangeBtns)
