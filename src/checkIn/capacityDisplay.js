import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { featureStyles } from '../commonStyles'

const CapacityDisplay = ({ people, maxCapacity }) => {
	let currentCount = people.length
	// custom hook to get previous count
	const start = usePrevious(people.length) || 0
	const animation = new Animated.Value(start)
	Animated.timing(animation, {
		toValue: currentCount,
		duration: 300
	}).start()

	return (
		<View style={styles.capacityDisplayContainer}>
			<Text>
				{currentCount !== maxCapacity
					? `${people.length} / ${maxCapacity}`
					: 'AT MAXIMUM CAPACITY'}
			</Text>
			<View style={styles.capacityDisplay}>
				<Animated.View
					style={[
						styles.progress,
						{
							width: animation.interpolate({
								inputRange: [0, maxCapacity],
								outputRange: ['0%', '100%']
							})
						}
					]}
				/>
			</View>
		</View>
	)
}

// custom hook
const usePrevious = value => {
	const ref = useRef() // useRef creates an object that can persit
	useEffect(() => {
		ref.current = value
	}, [value]) // only update ref.current if value changes
	return ref.current
}

const styles = StyleSheet.create({
	capacityDisplayContainer: {
		flex: 0.2,
		justifyContent: 'flex-end'
	},
	capacityDisplay: {
		height: 40,
		// backgroundColor: 'blue',
		shadowColor: 'black',
		shadowOpacity: 0.5,
		shadowOffset: { width: 0, height: -1 },
		shadowRadius: 10,
		borderStyle: 'solid',
		borderColor: 'white',
		borderWidth: 1,
		overflow: 'hidden'
	},
	progress: {
		flex: 1,
		backgroundColor: featureStyles.dark
	}
})

const mapStateToProps = state => ({
	people: state.people,
	maxCapacity: state.maxCapacity
})

export default connect(mapStateToProps)(CapacityDisplay)
