const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);

  console.log(`The totla is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
