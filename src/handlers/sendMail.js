import AWS from 'aws-sdk';

const ses = new AWS.SES({ region: 'eu-west-1' });

async function sendMail(event, context) {
  const params = {
    Source: 'eduardosbrasil10@gmail.com',
    Destination: {
      ToAddresses: ['eduardosbrasil10@gmail.com']
    },
    Message: {
      Body: {
        Text: {
          Data: 'Hi! This is a test message sent by AWS SES service.',
        },
      },
      Subject: {
        Data: 'AWS SES | Test Mail',
      },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const handler = sendMail;


