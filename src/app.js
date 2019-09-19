/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment } from 'react'
import {
	SafeAreaView,
	StyleSheet,
	ScrollView,
	View,
	Text,
	StatusBar
} from 'react-native'
import Login from './components/login'

const App = () => {
	return (
		<Fragment>
			<Login />
		</Fragment>
	)
}


export default App
