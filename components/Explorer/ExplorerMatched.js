'use strict'

import React from 'react'
import { View, Image, Text } from 'react-native'
import { Animate } from '../Custom'

import UX from '../../styles/UX'

export default class ExplorerMatched extends React.Component {
    render() {
        return (
            <Animate style={UX.explorerMatchedContainer}>
                <View style={UX.explorerMatchedDetails}>
                    <Image 
                        style={UX.explorerMatchedImage}
                        source={{uri: this.props.match.img_path}}
                    />

                    <Text style={UX.explorerMatchedTitle}>
                        {this.props.match.name}
                    </Text>

                    <Text style={UX.explorerMatchedDescribe}>
                        {this.props.match.describe}
                    </Text>
                </View>
            </Animate>
        )
    }
}