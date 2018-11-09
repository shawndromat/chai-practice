const sendgrid = require('@sendgrid/mail')

const sendEmail = async (emailClient) => {
  try {
    // sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: 'shawnamatt@gmail.com',
      from: 'sender@example.org',
      subject: 'Hello world',
      text: 'Hello plain world!',
      html: '<p>Hello HTML world!</p>',
    };
    const result = await emailClient.send(msg);
    return result
  } catch(e) {
    console.log(e)
    throw e;
  }
}

module.exports = sendEmail
