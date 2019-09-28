/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './components/login'
import Dashboard from './components/dashboard'
import CheckIn from './components/checkIn'
import Profile from './components/profile'
import Events from './components/events'
import Activity from './components/activity'
import Settings from './components/settings'

const MainNavigator = createStackNavigator({
	Login: { screen: Login },
	Dashboard: { screen: Dashboard },
	CheckIn: { screen: CheckIn },
	Profile: { screen: Profile },
	Events: { screen: Events },
	Activity: { screen: Activity },
	Settings: { screen: Settings }
})

const App = createAppContainer(MainNavigator)

export default App
