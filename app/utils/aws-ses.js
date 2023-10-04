import AWS from "aws-sdk";
import createHtmlTemplate from "./createHtmlTemplate";

AWS.config.update({
  region: "us-east-2",
  accessKeyId: process.env.AWS_SES_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SES_SECRET_ACCESS_KEY,
});

const ses = new AWS.SES({ apiVersion: "2010-12-01" });

export const sendEmail = async (body) => {
  const emailHtml = createHtmlTemplate(body);

  const params = {
    Source: "jaylen@moonraydevelopment.com",
    Destination: { ToAddresses: ["jaylen@moonraydevelopment.com"] },
    Message: {
      Subject: { Data: `${body.name} - ${body.subject}` },
      Body: { Html: { Data: emailHtml } },
    },
  };

  try {
    const result = await ses.sendEmail(params).promise();
    console.log("Email sent:", result.MessageId);
    return result.MessageId;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};
