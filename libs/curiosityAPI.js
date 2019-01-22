'use strict'

export default class CuriosityAPI {
    static getLocations(lat, lon, radius) {
        return fetch(`http://scallar.fr:8002/get/locations?lat=${lat}&lon=${lon}&radius=${radius}`)
            .then(res => res.json())
            .catch(err => console.log(err))
    }
}