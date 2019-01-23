'use strict'

import React from 'react'
import { DrawerItems, SafeAreaView } from 'react-navigation'
import { ScrollView } from 'react-native-gesture-handler';
import UX from '../styles/UX';

const CustomDrawerItem = props => (
    <ScrollView>
        <SafeAreaView
            style={UX.themeDrawerItemContainer}
            forceInset={{
                top: 'always',
                horizontal: 'never'
            }}
        >
            <DrawerItems 
                {...props}
            />
        </SafeAreaView>
    </ScrollView>
)

export default CustomDrawerItem