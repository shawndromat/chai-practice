const sendgrid = require('@sendgrid/mail')

const sendRegistrationConfirmation = async (user) => {
  try {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY2);
    const msg = {
      to: 'shawnamatt@gmail.com',
      from: 'info@example.com',
      subject: 'Welcome to the Bash',
      templateId: 'd-4c1e553122fc457d86cd008958be4ec4',
      dynamic_template_data: {
        username: user.name,
      }
    }
    let result = await sendgrid.send(msg)
    return result[0];
  } catch(e) {
    // console.log(e)
    throw e;
  }
}

module.exports = sendRegistrationConfirmation
