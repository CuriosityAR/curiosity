import { StyleSheet } from 'react-native'

const UX = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#220044'
    },

    container: {
        flex: 1,
        backgroundColor: '#220044'
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
        flex: 1
    }
})

export default UX