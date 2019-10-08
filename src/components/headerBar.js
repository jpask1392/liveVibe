import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
import { Header } from 'react-navigation-stack'

const HeaderBar = props => 
	<View style={styles.headerContainer}>
		<Text>{props.children}</Text>
	</View>

const styles = StyleSheet.create({
	headerContainer: {
		height: 100,
		justifyContent: "center",
		alignItems: "flex-end",
		flexDirection: 'row',
		paddingBottom: 20,
		marginLeft: 20,
		marginRight: 20,
		borderBottomWidth: 1,
		borderBottomColor: '#E8E8E8',
	}
})

export default HeaderBar