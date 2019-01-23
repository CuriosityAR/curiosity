'use strict'

import React from 'react'
import { View, Image, Text, Platform } from 'react-native'
import { Container, CustomText, Animate } from '../Custom'
import { Constants, Location, Camera, Permissions } from 'expo'

import CuriosityAPI from '../../libs/curiosityAPI'
import Geometrics from '../../libs/geometrics'
import UX from '../../styles/UX'

export default class Explorer extends React.Component {
    radius   = 1000
    camera   = null
    heading  = null
    location = {
        latitude: null,
        longitude: null
    }

    state = {
        location: {
            error: null,
        },
        camera: {
            hasPermission: null,
            type: Camera.Constants.Type.back
        },
        match: null
    }

    _activateCamera = async () => {
        if (!this.state.hasCameraPerm) {
            const { status } = await Permissions.askAsync(Permissions.CAMERA)

            this.setState({
                camera: {
                    hasPermission: status === 'granted'
                }
            })
        }
    }

    _activateGeolocation = async () => {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                location: {
                    error: 'Geolocation does not work in an Android emulator.'
                }
            })
        } else {
            let { status } = await Permissions.askAsync(Permissions.LOCATION)

            if (status !== 'granted') {
                this.setState({
                    location: {
                        error: 'Curiosity needs to access to your location to work.'
                    }
                })
            }

            this._watchPosition()
            this._watchHeading()
            this._watchUserMatching()
        }
    }

    _watchPosition = () => {
        Location.watchPositionAsync({
            enableHighAccuracy: true,
            accuracy: Location.Accuracy.Highest,
            timeInterval: 10,
            distanceInterval: 0.1
        }, res => {
            this.location = res.coords
        })
    }

    _watchHeading = () => {
        Location.watchHeadingAsync(res => {
            this.heading = res.accuracy >= 3 ? res.magHeading : null
        })
    }

    _watchUserMatching = () => {
        CuriosityAPI.getLocations(
            this.location.latitude, 
            this.location.longitude, 
            this.radius
        ).then(res => {
            if (res.err) return console.log(res.err)

            let matched = null
            // console.log(res)

            for (let row of res.locations) {
                let b = Geometrics.bearing(
                    this.location.latitude, 
                    this.location.longitude, 
                    row.lat, 
                    row.lon
                )
    
                if (Geometrics.headingsMatched(this.heading, b)) {
                    matched = row
                }
            }

            this.setState({
                match: matched
            }, () => setTimeout(this._watchUserMatching, 500))
        })
    }

    _renderMatched = () => {
        if (this.state.match) {
            return (
                <Animate style={UX.explorerMatchedContainer}>
                    <View style={UX.explorerMatchedDetails}>
                        <Image 
                            style={UX.explorerMatchedImage}
                            source={{uri: this.state.match.img_path}}
                        />

                        <Text style={UX.explorerMatchedTitle}>
                            {this.state.match.name}
                        </Text>

                        <Text style={UX.explorerMatchedDescribe}>
                            {this.state.match.describe}
                        </Text>
                    </View>
                </Animate>
            )
        }
    }

    async componentDidMount() {
        await this._activateCamera()
        await this._activateGeolocation()
    }

    render() {
        let view = null

        if (this.state.camera.hasPermission) {
            view = (
                <Container>
                    <Camera 
                        style={UX.explorerCamera} 
                        type={this.state.camera.type}
                        ref={ ref => this.camera = ref }
                    />

                    <Container>
                        {this._renderMatched()}
                    </Container>
                </Container>
            )
        } else {
            view = (
                <Container>
                    <CustomText>Curiosity needs Camera permission to be used.</CustomText>
                </Container>
            )
        }
                
        return view
    }
}