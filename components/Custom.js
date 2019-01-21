import React from 'react'
import { View, Text, Button } from 'react-native'
import UX from '../styles/UX'

export class CustomText extends React.Component {
    render() {
        return (
            <Text style={UX.themeText}>
                {this.props.children}
            </Text>
        )
    }
}

export class CustomButton extends React.Component {
    render() {
        return (
            <Button
                color={UX.themeButton.color}
                title={this.props.title}
                onPress={this.props.onPress}
            />
        )
    }
}

export class Container extends React.Component {
    render() {
        return (
            <View style={UX.container}>
                {this.props.children}
            </View>
        )
    }
}