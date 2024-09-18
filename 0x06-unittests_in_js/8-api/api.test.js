// api.test.js
const request = require('supertest');
const { expect } = require('chai');
const app = require('./api');

describe('index page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request(app)
      .get('/')
      .expect(200, done);
  }));

  it('should return the correct message', () => new Promise((done) => {
    request(app)
      .get('/')
      .end((err, res) => {
        expect(res.text).to.equal('Welcome to the payment system');
        done();
      });
  }));
});
