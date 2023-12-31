const nodemailer = require("nodemailer");

exports.nodeMailer = (email, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "omarwork1010@gmail.com",
            pass: "hkwgccwphgzprbrm",
        },
    });

    const mailOptions = {
        from: 'omarwork1010@gmail.com',
        to: email,
        subject,
        text
    };


    transporter.sendMail(mailOptions)

}





// businesses




