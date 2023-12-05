const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.NEXT_PUBLIC_MAILCHIMP_SERVER,
});

async function callPing() {
  const response = await mailchimp.ping.get();
  return response;
}

export default callPing;
