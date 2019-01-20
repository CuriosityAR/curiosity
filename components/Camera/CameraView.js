'use strict'

import React from 'react'
import { View, Image } from 'react-native'
import { Camera, Permissions } from 'expo'

import { Txt, Btn } from '../Custom/Custom'
import UX from '../../styles/UX';

export default class CameraView extends React.Component {
    camera = null

    state = {
        hasCameraPerm: null,
        snap: {uri: null},
        type: Camera.Constants.Type.back
    }

    async componentDidMount() {
        if (!this.state.hasCameraPerm) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA)

            this.setState({
                hasCameraPerm: status === 'granted'
            })
        }
    }

    snap = async () => {
        if (this.camera) {
            await this.camera.takePictureAsync({
                quality: 0.5,
                skipProcessing: true,
                onPictureSaved: res => {
                   this.setState({
                       snap: res
                   })
                }
            })
        }
    }

    render() {
        let view = null

        if (this.state.hasCameraPerm) {
            view = (
                <View style={UX.container}>
                    <Camera 
                        style={UX.container}
                        type={this.state.type}
                        ref={ ref => this.camera = ref }
                        onCameraReady={() => this.snap()}
                    />

                    <Image
                        style={UX.container}
                        source={{uri: this.state.snap.uri}}
                    />

                    <Btn
                        title="Picture"
                        onPress={() => this.snap()}
                    />
                </View>
            )
        } else {
            view = (
                <View>
                    <Txt>Curiosity needs Camera permission to be used.</Txt>
                </View>
            )
        }
                
        return view
    }
}