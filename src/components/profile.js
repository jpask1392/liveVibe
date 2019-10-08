import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from './headerBar'

const tempData = {
	bioText:
		'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem.',
	companyName: 'Revolution',
	email: 'Revolution@revolution.com',
	address: {
		streetNumber: 'Revolution',
		streetName: 'St Mary Street',
		city: 'Cardiff',
		country: 'Wales',
		postcode: 'CF53NL'
	}
}

const Profile = props => {
	return (
		<View style={styles.container}>
			<HeaderBar>Profile</HeaderBar>
			<ScrollView>
				<View style={styles.headerBackground}></View>
				<View style={styles.profilePicture}></View>
				<View style={styles.textWrapper}>
					<View>
						<Text style={styles.sectionHeader}>Bio</Text>
						<Text style={styles.sectionText}>
							{tempData.bioText}
						</Text>
					</View>
					<View>
						<Text style={styles.sectionHeader}>Company Name</Text>
						<Text style={styles.sectionText}>
							{tempData.companyName}
						</Text>
					</View>
					<View>
						<Text style={styles.sectionHeader}>Email</Text>
						<Text style={styles.sectionText}>{tempData.email}</Text>
					</View>
					<View>
						<Text style={styles.sectionHeader}>Address</Text>
						<Text style={[styles.sectionText, {}]}>
							{tempData.address.streetNumber} {'\n'}
							{tempData.address.streetName} {'\n'}
							{tempData.address.city} {'\n'}
							{tempData.address.country} {'\n'}
							{tempData.address.postcode} {'\n'}
						</Text>
					</View>
				</View>
			</ScrollView>
		</View>
	)
}

const profilePictureSize = 150
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	},
	headerBackground: {
		backgroundColor: featureStyles.dark,
		height: 150
	},
	profilePicture: {
		width: profilePictureSize,
		height: profilePictureSize,
		marginTop: -profilePictureSize / 2,
		borderRadius: profilePictureSize / 2,
		alignSelf: 'center',
		backgroundColor: 'grey'
	},
	textWrapper: {
		marginLeft: 15,
		marginRight: 15,
		marginTop: 30,
	},
	sectionHeader: {
		fontWeight: "bold",
		fontSize: 12,
		textTransform: "uppercase",
		letterSpacing: 1.5
	},
	sectionText: {
		marginTop: 10,
		marginBottom: 30,
		lineHeight: 20,
		fontSize: 12
	}
})

export default Profile
