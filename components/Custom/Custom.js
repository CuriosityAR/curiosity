import React from 'react'
import { Text, Button } from 'react-native'
import UX from '../../styles/UX'

export class Txt extends React.Component {
    render = () => (
        <Text style={UX.themeText}>
            {this.props.children}
        </Text>
    )
}

export class Btn extends React.Component {
    render = () => (
        <Button
            color={UX.themeButton.color}
            title={this.props.title}
            onPress={this.props.onPress}
        />
    )
}