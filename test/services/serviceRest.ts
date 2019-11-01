import 'chai-http'
import * as chai from 'chai'
const dotenv = require('../../server')

chai.use(require('chai-http'))
let response: any

export function GetRequest() {
    // let response
    response = chai.request('https://api.magicthegathering.io/v1')
    .get('/cards')
    
    return response
}