/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/login'
import Home from './components/home'

const MainNavigator = createStackNavigator({
	Login: { screen: Login },
	Home: { screen: Home },
})

const App = createAppContainer(MainNavigator)

export default App
