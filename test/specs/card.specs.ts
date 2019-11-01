import { GetRequest } from '../services/serviceRest'
import 'chai-http'
import * as chai from 'chai'
import { expect } from 'chai'
let response: any

chai.use(require('chai-http'))


describe("Teste API magicthegathering.io", () => {

    it("Deve receber 100 cartas", (done) => {


            let response
            response = chai.request('https://api.magicthegathering.io/v1')
            .get('/cards')
            .end((err, res) => {
                // res.should.have.status(200);
                console.log(res.status)
                // res.body.should.be.a('array');
                done()
            })
            // response = GetRequest()
            // console.log(response.statusCode)
            // done()
        // expect(response.statusCode).to.equal(200)
    })
})
