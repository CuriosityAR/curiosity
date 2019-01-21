'use strict'

import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import FontAwesome from '@expo/vector-icons/FontAwesome'

import Explorer from '../components/Explorer/Explorer'
import Scanner from '../components/Scanner/Scanner'

import UX from '../styles/UX'

const materialBottomTabNavigation = createMaterialBottomTabNavigator({
    Explorer: {
        screen: Explorer,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name='paper-plane'
                    size={26}
                    color={focused ? UX.themeNavBarActive.color : UX.themeNavBarInactive.color}
                />
            )
        }
    },
    Scanner: {
        screen: Scanner,
        navigationOptions: {
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name='street-view'
                    size={26}
                    color={focused ? UX.themeNavBarActive.color : UX.themeNavBarInactive.color}
                />
            )
        }
    }
}, {
    // labeled: false,
    initialRouteName: 'Explorer',
    barStyle: UX.themeNavBar
})

export default createAppContainer(materialBottomTabNavigation)