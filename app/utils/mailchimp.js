// const client = require("@mailchimp/mailchimp_marketing");

const MailchimpKey = process.env.MAILCHIMP_API_KEY;
const MailchimpServer = process.env.NEXT_PUBLIC_MAILCHIMP_SERVER;
const MailchimpAudience = process.env.MAILCHIMP_AUDIENCE_ID;

const url = `https://${MailchimpServer}.api.mailchimp.com/3.0/lists/${MailchimpAudience}/members`;

const addSubscriber = async (body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `apikey ${MailchimpKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: body.email,
      status: "subscribed",
      merge_fields: {
        FNAME: body.firstName,
        LNAME: body.lastName,
      },
    }),
  });

  const data = response.json();
  console.log("DATA", data);
  return data;
};

export default addSubscriber;
