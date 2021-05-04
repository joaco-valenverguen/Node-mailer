const { Router } = require("express");
const router = Router();
const nodemailer = require("nodemailer");

router.post("/send-email", async (req, res) => {
  const { name, email, phone, message } = req.body;

  contentHTML = `
  <h1>User information</h1>
  <ul>
  <li>Username: ${name}</li>
  <li>email: ${email}</li>
  <li>phone: ${phone}</li>
  <li>Message: ${message}</li>
  </ul>
  `;
  const transporter = nodemailer.createTransport({
    host: "mail.valenverguen.xyz",
    port: 26,
    secure: false,
    auth: {
      user: "joaco@xd.xd",
      pass: "password",
    },
  });
  const info = await transporter.sendMail({
    from: "'valenverguen Server'   <joaco@zd.xd>",
    to: "joaquinxd@xd.cxd",
    subject: "xd",
    html: contentHTML,
  });
  console.log(info);

  res.redirect("/succes.html");
});

module.exports = router;
