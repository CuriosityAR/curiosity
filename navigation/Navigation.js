'use strict'

import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import CustomDrawerItem from './CustomDrawerItem'

import Explorer from '../components/Explorer/Explorer'
import Scanner from '../components/Scanner/Scanner'

import UX from '../styles/UX'

const drawerNavigator = createDrawerNavigator({
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
    drawerBackgroundColor: UX.themeNavBar.backgroundColor,
    contentComponent: CustomDrawerItem
})

export default createAppContainer(drawerNavigator)