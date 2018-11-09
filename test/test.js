const should = require('should');
const {expect} = require('chai')
const sendEmail = require('../index')

describe('Array', function() {
  describe('#indexOf()', function() {
    const sendFake = () => Promise.resolve({statusCode: 202})

    const emailClient = {send: sendFake}
    it('should return -1 when the value is not present', async function() {
      const result = await sendEmail(emailClient)
      result.statusCode.should.equal(202);
    });
  });

  describe('blargh', () => {
    const sendFake = () => Promise.reject(Error('email error'))

    const emailClient = {send: sendFake}
    it('should return -1 when the value is not present', async function() {
      return sendEmail(emailClient).should.be.rejectedWith(
        Error('email error')
      );
    });
  })
});