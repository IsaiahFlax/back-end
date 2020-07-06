const server = require('./server')
const supertest = require('supertest')
const { intersect } = require('../dbConfig')
const { expectCt } = require('helmet')
const request = supertest(server)

describe('GET server', ()=> {
    
    it('gets the json response message up', async done => {
        const res = await request.get('/')
        expect(res.body.message).toBe('up')
        //console.log('res test', res)
        done()
    })
    
})