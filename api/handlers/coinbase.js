import { RESTDataSource } from 'apollo-datasource-rest'

export default class Coinbase extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'https://api.coinbase.com/v2/'
    }
    async getPrice() {
        return this.get('prices/BTC-USD/spot')
    }
}