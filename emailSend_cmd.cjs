const nodemailer = require('nodemailer');

//2. configure email and send it.
async function sendMail() {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
           user:'21352007@pondiuni.ac.in',
           pass:'dcnqlrfymxwzbtjs',
        },
    });

    const mailOptions = {
        from:'21352007@pondiuni.ac.in',
        to:'anjukr55555@gmail.com',
        subject:"Welcome to NodeJS App",
        text:'This is an email using nodemailer'
    };

    //3. send email
    try{
        const result = await transporter.sendMail(mailOptions);
        console.log("Email send successfully");
    } catch (err){
        console.log('Email send failed with error' +err);
    }
  
}

sendMail();
