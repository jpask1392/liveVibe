import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { featureStyles } from '../commonStyles'
import Icon from 'react-native-vector-icons/FontAwesome'

const AddBtn = props => {
	return (
		<TouchableOpacity style={styles.wrapper}>
            <Icon name="plus" size={30} color="#D3D3D3"/>
		</TouchableOpacity>
	)
}

const btnSize = 75
const styles = StyleSheet.create({ 
    wrapper: {
        backgroundColor: featureStyles.dark,
        width: btnSize,
        height: btnSize,
        borderRadius: btnSize,
        position: "absolute",
        bottom: 15,
        right: 15,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "black",
        shadowOffset: {height: 1, width: 1},
        shadowOpacity: 0.4,
        shadowRadius: 1
    }
})

export default AddBtn