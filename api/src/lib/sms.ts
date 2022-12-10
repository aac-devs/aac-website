import config from './config';

const { accountSid, authToken, messagingServiceSid, toPhone } = config.twilio;

const client = require('twilio')(accountSid, authToken);

export function sendSMSMessage(body: { username: string; useremail: string; usermessage: string }) {
  const { username, useremail, usermessage } = body;
  const message = `Mr./Mrs. ${username}, with the email: ${useremail}, wrote you the next message: ${usermessage}.`;

  client.messages
    .create({
      body: message,
      messagingServiceSid,
      to: toPhone,
    })
    .then((message: any) => console.log(message.sid))
    .done();

  console.log('send sms');
}
