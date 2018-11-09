const sinon = require('sinon')
var chai = require("chai");
const expect = chai.expect

var sinonChai = require("sinon-chai");
const chaiSpies = require('chai-spies')

chai.use(sinonChai);
const sendgrid = require('@sendgrid/mail')
const sendEmail = require('../index')


describe('Array', function () {

  const user = {
    email: 'partyPlanner@example.com',
    name: 'new name',
  }

  before(() => {
    spy = sinon.spy(sendgrid, 'send')
  })

  describe('#indexOf()', function () {
    let spy;


    it('sends the correct template', async () => {
      const expectedMessage = {
        to: 'partyPlanner@example.com',
        from: 'info@thebash.com',
        subject: 'Welcome to the Bash',
        templateId: 'registration-confirmation',
        dynamic_template_data: {
          username: user.name,
        }
      }
      await sendEmail(user)
      expect(sendgrid.send).to.have.been.calledWith(expectedMessage)
    })

    it.only('returns a successful response', async function () {
      const result = await sendEmail(user)
      expect(result.statusCode).to.equal(202)
    })
  })

  describe('blargh', () => {
    const sendFake = () => Promise.reject(Error('email error'))

    const emailClient = {send: sendFake}
    it('should return -1 when the value is not present', async function () {
      return sendEmail(user).should.be.rejectedWith(
        Error('email error')
      )
    })
  })
})