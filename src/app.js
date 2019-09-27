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
import Dashboard from './components/dashboard'

const MainNavigator = createStackNavigator({
	Login: { screen: Login },
	Dashboard: { screen: Dashboard },
})

const App = createAppContainer(MainNavigator)

export default App
