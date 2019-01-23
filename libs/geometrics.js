'use strict'

export default class Geometrics {
    static _MARGIN = 20

    static _degToRad = deg => deg * Math.PI / 180

    static _radToDeg = rad => rad * 180 / Math.PI

    static distance = (lat1, lon1, lat2, lon2) => {
        let radius = 6371000

        let dLat = Geometrics._degToRad(lat2 - lat1)
        let dLon = Geometrics._degToRad(lon2 - lon1)

        lat1 = Geometrics._degToRad(lat1)
        lat2 = Geometrics._degToRad(lat2)

        let a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2)

        let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

        return radius * c
    }

    static bearing = (lat1, lon1, lat2, lon2) => {
        lat1 = Geometrics._degToRad(lat1)
        lon1 = Geometrics._degToRad(lon1)
        lat2 = Geometrics._degToRad(lat2)
        lon2 = Geometrics._degToRad(lon2)

        let y = Math.sin(lon2 - lon1) * Math.cos(lat2)

        let x = Math.cos(lat1) * Math.sin(lat2) - 
                Math.sin(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)

        return (Geometrics._radToDeg(Math.atan2(y, x)) + 360) % 360
    }

    static headingsMatched = (h1, h2) => (h1 >= h2 - Geometrics._MARGIN 
                                       && h1 <= h2 + Geometrics._MARGIN)
}