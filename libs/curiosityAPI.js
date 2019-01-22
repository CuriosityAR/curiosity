'use strict'

export default class CuriosityAPI {
    static getLocations(lat, lon, radius) {
        return fetch(`http://192.168.0.14:8080/get/locations?lat=${lat}&lon=${lon}&radius=${radius}`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}