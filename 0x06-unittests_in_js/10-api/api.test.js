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

describe('cart page', () => {
  it('should return status code 200 when :id is a number', () => new Promise((done) => {
    request(app)
      .get('/cart/123')
      .expect(200, done);
  }));

  it('should return the correct message when :id is a number', () => new Promise((done) => {
    request(app)
      .get('/cart/123')
      .end((err, res) => {
        expect(res.text).to.equal('Payment methods for cart 123');
        done();
      });
  }));

  it('should return status code 404 when :id is not a number', () => new Promise((done) => {
    request(app)
      .get('/cart/abc')
      .expect(404, done);
  }));
});

describe('available payments page', () => {
  it('should return status code 200', () => new Promise((done) => {
    request(app)
      .get('/available_payments')
      .expect(200, done);
  }));

  it('should return the correct payment methods object', () => new Promise((done) => {
    request(app)
      .get('/available_payments')
      .end((err, res) => {
        expect(res.body).to.deep.equal({
          payment_methods: {
            credit_cards: true,
            paypal: false,
          },
        });
        done();
      });
  }));
});

describe('login page', () => {
  it('should return the correct welcome message', () => new Promise((done) => {
    request(app)
      .post('/login')
      .send({ userName: 'John' })
      .end((err, res) => {
        expect(res.text).to.equal('Welcome John');
        done();
      });
  }));
});
