import React from 'react'
import { View } from 'react-native'

import UX from './styles/UX'
import Navigation from './navigation/Navigation'

export default class App extends React.Component {    
    render() {
        return (
            <View style={UX.main}>
                <Navigation />
            </View>
        )
    }
}