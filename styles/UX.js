import { StyleSheet } from 'react-native'
import { Constants } from 'expo'

const UX = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#440066'
    },

    container: {
        flex: 1,
    },

    themeText: {
        color: '#fff'
    },
    themeButton: {
        color: '#440066'
    },
    themeNavBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 10,
        backgroundColor: 'transparent',
    },
    themeNavBarActive: {
        color: '#fff'
    },
    themeNavBarInactive: {
        color: '#ffffff88'
    },

    explorerCamera: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    explorerMatchedContainer: {
        position: 'relative',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    explorerMatchedDetails: {
        flex: 0.8,
        // backgroundColor: '#220044',
        borderRadius: 5,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    explorerMatchedImage: {
        width: 150,
        height: 150,
        borderRadius: 300
    },
    explorerMatchedTitle: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginTop: 10,
        marginBottom: 10
    },
    explorerMatchedDescribe: {
        textAlign: 'justify',
        color: '#fff'
    },
    sideMenuContainer: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    sideMenuItemsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    sideMenuItems: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 10
    },
    sideMenuItemsLabel: {
        color: '#fff',
        flex: 1,
        textAlign: 'right',
        fontSize: 18,
        padding: 10,
        paddingRight: 20,
        marginLeft: 5
    },
    sideMenuFont: {
        width: 45,
        height: 45,
        paddingTop: 12.5,
        paddingLeft: 13.5
    },
    sideMenuItemActive: {
        color: '#cc66ffdd',
        backgroundColor: '#440066',
        borderRadius: 100
    },
    sideMenuItemInactive: {
        color: '#ffffff88',
        backgroundColor: '#ffffff22',
        borderRadius: 100
    }
})

export default UX