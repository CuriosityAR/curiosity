import React from 'react'
import { View, Text, Button, Animated } from 'react-native'
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

export class Animate extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: 1,
                duration: 500
            }
        ).start()
    }

    render() {
        return (
            <Animated.View
                style={{
                    ...this.props.style, 
                    opacity: this.state.fadeAnim
                }}
            >
                {this.props.children}
            </Animated.View>
        )
    }
}