const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "",
    pass: ""
  }
});


async function main() {
  const info = await transporter.sendMail({
    from: '"" <>',
    to: "", // list of receivers
    subject: "Implementación de servidor de correos.", // Subject line
    text: " ¡Servidor de correo funcionando excelente!" // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

main().catch(console.error);
