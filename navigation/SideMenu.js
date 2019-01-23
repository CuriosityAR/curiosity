'use strict'

import PropTypes from 'prop-types'
import React from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View } from 'react-native'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import UX from '../styles/UX'

class SideMenu extends React.Component {
    navigateToScreen = route => () => {
        const navigateAction = NavigationActions.navigate({
            routeName: route
        })

        this.props.navigation.dispatch(navigateAction)
    }

    render() {
        return (
            <View style={UX.sideMenuContainer}>
                <ScrollView style={{flexDirectom: 'column'}}>
                    <View style={UX.sideMenuItemsContainer}>
                        <View style={UX.sideMenuItems}>
                            <FontAwesome name='image' size={18} style={[UX.sideMenuFont, this.props.activeItemKey === 'Explorer' ? UX.sideMenuItemActive : UX.sideMenuItemInactive]} />

                            <Text style={[UX.sideMenuItemsLabel, this.props.activeItemKey === 'Explorer' ? UX.sideMenuItemActive : UX.sideMenuItemInactive]} onPress={this.navigateToScreen('Explorer')}>
                                Explorer
                            </Text>
                        </View>

                        <View style={UX.sideMenuItems}>
                            <FontAwesome name='map' size={18} style={[UX.sideMenuFont, this.props.activeItemKey === 'Scanner' ? UX.sideMenuItemActive : UX.sideMenuItemInactive]} />

                            <Text style={[UX.sideMenuItemsLabel, this.props.activeItemKey === 'Scanner' ? UX.sideMenuItemActive : UX.sideMenuItemInactive]} onPress={this.navigateToScreen('Scanner')}>
                                Scanner
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

SideMenu.propTypes = {
    navigation: PropTypes.object
}

export default SideMenu