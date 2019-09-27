import React, { Fragment } from 'react'
import {
    View,
    Text
} from 'react-native'

const Home = props => {
    const { navigation } = props
    const name = navigation.getParam("name")
    return (
        <View>
            <Text>Hi {name}!</Text>
        </View>
    )
}

export default Home