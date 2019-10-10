import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { headerStyles, featureStyles } from '../commonStyles'
import HeaderBar from './headerBar'
import { connect } from 'react-redux'
import { set_max_capacity } from '../actions'

const tempData = {
	openTime: { hour: '22', minute: '30' },
	closeTime: { hour: '03', minute: '00' }
}

const Profile = props => {
	const openTime = new Date()
	openTime.setUTCHours(tempData.openTime.hour, tempData.openTime.minute)
	const closeTime = new Date()
	closeTime.setUTCHours(tempData.closeTime.hour, tempData.closeTime.minute)

	const [data, setData] = useState({})

	// need to confirm user is logged in
	useEffect(() => {
		fetch('http://localhost:3000/api/companyProfile')
			.then(res => res.json())
			.then(data => setData(data))
			// may need to move this one
			.then(props.dispatch(set_max_capacity(10)))
	}, [])

	if (data.companyName === undefined) {
		return null
	} else {
		return (
			<View style={styles.container}>
				<ScrollView>
					<HeaderBar theme="dark">Profile</HeaderBar>
					<View style={styles.headerBackground}></View>
					<View style={styles.profilePicture}></View>
					<View style={styles.textWrapper}>
						<View>
							<Text style={styles.sectionHeader}>Bio</Text>
							<Text style={styles.sectionText}>
								{data.companyProfile.bio}
							</Text>
						</View>
						<View>
							<Text style={styles.sectionHeader}>
								Company Name
							</Text>
							<Text style={styles.sectionText}>
								{data.companyName}
							</Text>
						</View>
						<View>
							<Text style={styles.sectionHeader}>Email</Text>
							<Text style={styles.sectionText}>
								{data.companyProfile.email}
							</Text>
						</View>
						<View>
							<Text style={styles.sectionHeader}>Address</Text>
							<Text style={styles.sectionText}>
								{data.companyProfile.address.propertyName}{' '}
								{'\n'}
								{data.companyProfile.address.streetName} {'\n'}
								{data.companyProfile.address.city} {'\n'}
								{data.companyProfile.address.country} {'\n'}
								{data.companyProfile.address.postcode}
							</Text>
						</View>
						<View>
							<Text style={styles.sectionHeader}>
								Open / Close Times
							</Text>
							<Text style={styles.sectionText}>
								{`${openTime.getUTCHours()}:${openTime.getUTCMinutes()} `}
								to
								{` ${closeTime.getUTCHours()}:${closeTime.getUTCMinutes()}`}
							</Text>
						</View>
					</View>
				</ScrollView>
			</View>
		)
	}
}

const profilePictureSize = 150
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: featureStyles.backgroundColor
	},
	headerBackground: {
		backgroundColor: featureStyles.dark,
		height: 125
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
		marginTop: 30
	},
	sectionHeader: {
		fontWeight: 'bold',
		fontSize: 12,
		textTransform: 'uppercase',
		letterSpacing: 1.5
	},
	sectionText: {
		marginTop: 10,
		marginBottom: 30,
		lineHeight: 20,
		fontSize: 12
	}
})

export default connect()(Profile)
