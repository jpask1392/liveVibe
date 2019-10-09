import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { featureStyles } from '../commonStyles'

const EventTile = props => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.dateContainer}>
				<Text style={styles.dateText}>{props.date}</Text>
			</View>
			<View style={styles.infoContainer}>
				<Text>{props.name}</Text>
				<Text>{props.description}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		height: 120,
		marginTop: 15,
		marginLeft: 15,
        marginRight: 15,
        flexDirection: "row"
	},
	dateContainer: {
		height: '100%',
		aspectRatio: 1,
        backgroundColor: featureStyles.dark,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    dateText: {
        color: "white"
    },
	infoContainer: {
        flex: 1,
        marginLeft: 20,
        justifyContent: "center"
    }
})

export default EventTile
