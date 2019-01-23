import { StyleSheet } from 'react-native'

const UX = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#220044'
    },

    container: {
        flex: 1,
        // backgroundColor: '#220044'
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
        backgroundColor: '#220044',
        borderRadius: 5,
        padding: 20
    },
    explorerMatchedImage: {
        height: 150,
        borderRadius: 5
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
    themeDrawerItemContainer: {
        flex: 1,
    },
    themeDrawerItemActive: {
        color: '#fff'
    },
    themeDrawerItemInactive: {
        color: '#ffffff44'
    }
})

export default UX