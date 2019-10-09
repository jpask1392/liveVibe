import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from 'react-navigation-stack'
import { featureStyles } from '../commonStyles'

const HeaderBar = props => (
	<View style={props.theme === 'dark' ? styles.dark : {}}>
		<View style={styles.headerContainer}>
			<Text style={props.theme === 'dark' ? { color: 'white' } : {}}>
				{props.children}
			</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	headerContainer: {
		height: 100,
		justifyContent: 'center',
		alignItems: 'flex-end',
		flexDirection: 'row',
		paddingBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#E8E8E8'
	},
	dark: {
		backgroundColor: featureStyles.dark
	}
})

export default HeaderBar
