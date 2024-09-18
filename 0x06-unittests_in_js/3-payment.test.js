/* eslint-disable no-unused-expressions */
/* eslint-disable jest/prefer-expect-assertions */
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with SUM, 100, 20', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20);
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    spy.restore();
  });
});
