'use strict'

import React from 'react'
import { createDrawerNavigator, createAppContainer } from 'react-navigation'
import SideMenu from './SideMenu'

import Explorer from '../components/Explorer/Explorer'
import Scanner from '../components/Scanner/Scanner'

import UX from '../styles/UX'

const drawerNavigator = createDrawerNavigator({
    Explorer: {
        screen: Explorer,
    },
    Scanner: {
        screen: Scanner,
    }
}, {
    initialRouteName: 'Explorer',
    drawerBackgroundColor: UX.themeNavBar.backgroundColor,
    contentComponent: SideMenu
})

export default createAppContainer(drawerNavigator)