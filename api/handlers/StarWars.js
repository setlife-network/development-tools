import { RESTDataSource } from 'apollo-datasource-rest'

// sample RESTDataSource using the Star Wars API
export default class StarWars extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://swapi.co/api/'
    }
    async getPlanetList(page = 1) {
        return this.get(`planets/?page=${page}`)
    }
}