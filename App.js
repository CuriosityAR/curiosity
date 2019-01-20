import React from 'react'
import { View } from 'react-native'

import UX from './styles/UX'
import CameraView from './components/Camera/CameraView'

export default class App extends React.Component {
    render() {
        return (
            <View style={UX.main}>
                <CameraView />
            </View>
        )
    }
}