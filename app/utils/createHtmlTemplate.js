const createHtmlTemplate = (body) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
    <div>
      <p style="white-space: pre-line;">
        ${body.message}
      </p>
      <div>
        <span style="font-weight: bold">${body.name}</span><br>
        <span style="font-weight: bold">${body.email}</span>
      </div>
    </div>
    </body>
    </html>
    `;
};

export default createHtmlTemplate;
