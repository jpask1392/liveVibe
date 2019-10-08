/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react'

import Login from './components/login'
import CheckIn from './components/checkIn'
import Profile from './components/profile'
import Events from './components/events'
import Activity from './components/activity'
import Settings from './components/settings'

const AuthStack = createStackNavigator({ Login: Login })
const MainNavigator = createBottomTabNavigator(
	{	
		Profile: { screen: Profile },
		CheckIn: { screen: CheckIn },
		Events: { screen: Events },
		Activity: { screen: Activity },
		Settings: { screen: Settings }
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state
				let iconName
				switch (routeName) {
					case 'Profile':
						iconName = 'user'
						break
					case 'CheckIn':
						iconName = 'check-square'
						break
					case 'Events':
						iconName = 'calendar'
						break
					case 'Activity':
						iconName = 'line-chart'
						break
					case 'Settings':
						iconName = 'cog'
						break
				}
				return <Icon name={iconName} size={30} color={'#A3A3A3'} />
			},
			tabBarOptions: {
				style: {
					height: 80,
					backgroundColor: "#1F1F1F"
				},
				labelStyle: {
					fontSize: 12
				}
			}
		})
	}
)

const App = createAppContainer(
	createSwitchNavigator(
		{
			App: MainNavigator,
			Auth: AuthStack
		},
		{
			initialRouteName: 'App'
		}
	)
)

export default App
