import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { featureStyles } from '../commonStyles'

const EventTile = props => {
	const startDate = new Date(props.date.startDate)
	const endDate = new Date(props.date.endDate)
	return (
		<TouchableOpacity style={styles.wrapper}>
			<View style={styles.dateContainer}>
				<View style={styles.dateItemContainer}>
					<View style={styles.startDateContainer}>
						<Text style={[styles.dateText, styles.largeDay]}>
							{startDate.getDate()}
						</Text>
						<Text style={[styles.dateText, styles.largeMonth]}>
							{startDate.toLocaleString('default', {
								month: 'short'
							})}
						</Text>
					</View>
					<View style={styles.endDateContainer}>
						<Text style={styles.dateText}>
							- {endDate.getDate()}
						</Text>
						<Text style={styles.dateText}>
							{endDate.toLocaleString('default', {
								month: 'short'
							})}
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.infoContainer}>
				<Text>{props.name}</Text>
				<Text>{props.description}</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		height: 120,
		marginTop: 15,
		marginLeft: 15,
		marginRight: 15,
		flexDirection: 'row'
	},
	dateContainer: {
		height: '100%',
		aspectRatio: 1,
		backgroundColor: featureStyles.dark,
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center'
    },
    dateItemContainer: {
        flexDirection: 'row',
    },
	dateText: {
        color: 'white',
	},
	largeDay: {
        fontSize: 50,
        lineHeight: 50,
        fontWeight: 'bold',
    },
    largeMonth: {
        fontSize: 16,
        textTransform: "uppercase",
        marginTop: -5,
    },
	infoContainer: {
        flex: 1,
		marginLeft: 20,
		justifyContent: 'center'
	},
	startDateContainer: {
        alignItems: "center",
        marginRight: 5,
	},
	endDateContainer: {
        // backgroundColor: 'red',
		// alignSelf: "baseline"
	}
})

export default EventTile
