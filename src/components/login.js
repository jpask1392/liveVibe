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

const Login = () => {
	const [data, setData] = useState({})

	useEffect(async () => {
        const result = await fetch('http://localhost:3000/api/test')
        setData(result)
    }, [])
    
	console.log(data)
	return (
		<View style={styles.container}>
			<View style={styles.formContainer}>
				<TextInput style={styles.textInput} />
				<TextInput style={styles.textInput} />
				<TouchableOpacity
					style={styles.loginButton}
					onPress={() => Alert.alert('Simple Button pressed')}>
					<Text>Login</Text>
				</TouchableOpacity>
			</View>
			<Text>Trouble signing in? Click Here</Text>
			<Text></Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#F5F5F5',
		flex: 1,
		justifyContent: 'center'
	},
	formContainer: {
		flex: 0.3,
		backgroundColor: 'white',
		marginRight: 10,
		marginLeft: 10,
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	loginButton: {
		backgroundColor: '#1F1F1F',
		height: 40,
		borderRadius: 20,
		width: '50%'
	},
	textInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		width: '100%',
		marginRight: 10,
		marginLeft: 10
	}
})

export default Login
