'use strict'

import React from 'react'
import { Platform } from 'react-native'
import { Container, CustomText, CustomButton } from '../Custom'
import { Constants, Location, Camera, Permissions } from 'expo'

import Geometrics from '../../libs/geometrics'
import UX from '../../styles/UX'

export default class Explorer extends React.Component {
    camera = null
    location = null
    heading = null
    bearing = null
    lat = 48.8588007
    lon = 2.2953182

    state = {
        location: {
            error: null,
        },
        camera: {
            hasPermission: null,
            type: Camera.Constants.Type.back
        }
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
                });
            }

            this._watchPosition()
            this._watchHeading()
        }
    }

    _watchPosition = () => {
        Location.watchPositionAsync({
            enableHighAccuracy: true,
            accuracy: Location.Accuracy.High,
            timeInterval: 10,
            distanceInterval: 0.1
        }, res => {
            this.location = res.coords
            console.log(this.location)

            let d = Geometrics.distance(
                this.location.latitude, this.location.longitude, 
                this.lat, this.lon
            )

            let b = Geometrics.bearing(
                this.location.latitude, this.location.longitude, 
                this.lat, this.lon
            )
            
            this.bearing = b

            console.log('bearing: ', b)

            console.log('distance: ', d)
        })
    }

    _watchHeading = () => {
        Location.watchHeadingAsync(res => {
            console.log(res.trueHeading)
            console.log(Geometrics.headingsMatched(res.trueHeading, this.bearing))
            
            if (Geometrics.headingsMatched(res.trueHeading, this.bearing)) {
                console.log('Matched at: ', res.trueHeading)
            }
        })
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