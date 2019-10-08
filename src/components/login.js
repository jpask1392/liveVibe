/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, useState, useEffect } from 'react'
import {
	StyleSheet,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
	Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { featureStyles } from '../commonStyles'

const Login = props => {

	const [data, setData] = useState({})
	const { navigate } = props.navigation

	// check the user is in the database
	// return the data that relates to the user
	useEffect(() => {
		const fetchData = async () => {
			let res = await fetch('http://localhost:3000/api/test')
			let resJson = await res.json()
			return resJson
		}
		// when the data is collected, setState
		fetchData().done(res => {
			setData(res)
		})
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={{ width: 94, height: 100 }}
					source={require('../../assets/logoLight.png')}
				/>
			</View>
			<View style={styles.formContainer}>
				<View style={styles.inputContainer}>
					<View style={styles.textInput}>
						<TextInput
							style={{ flexGrow: 1 }}
							placeholder="Username"
						/>
						<Icon name="lock" size={30} color="#D3D3D3" />
					</View>
					<View style={styles.textInput}>
						<TextInput
							style={{ flexGrow: 1 }}
							placeholder="Password"
						/>
						<Icon name="user" size={30} color="#D3D3D3" />
					</View>
				</View>

				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => navigate('Profile', { name: 'Jamie' })}>
					<Text style={{ color: 'white', alignSelf: 'center' }}>
						Login
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.signingInTroubleBox}>
				<Text>Trouble signing in? Click Here</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: featureStyles.backgroundColor,
		flex: 1,
		justifyContent: 'center'
	},
	formContainer: {
		flex: 0.4,
		backgroundColor: 'white',
		marginRight: 10,
		marginLeft: 10,
		alignItems: 'center'
	},
	loginButton: {
		backgroundColor: '#1F1F1F',
		height: 60,
		borderRadius: 60,
		width: 240,
		top: 30,
		justifyContent: 'center'
	},
	textInput: {
		flexDirection: 'row',
		height: 50,
		borderWidth: 1,
		marginTop: 20,
		padding: 10,
		borderColor: '#D3D3D3'
	},
	inputContainer: {
		width: '90%',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logoContainer: {
		flex: 0.4,
		justifyContent: 'center',
		alignSelf: 'center'
	},
	signingInTroubleBox: {
		flex: 0.4,
		justifyContent: 'flex-start',
		alignSelf: 'center',
		top: 50
	}
})

export default Login
