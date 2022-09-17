

 import nodemailer from 'nodemailer';



export const sendEmail = async (to, subject , text) => {


    try {

      let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "devridoy96@gmail.com",
          pass: "monjejfuhtftncgj"
        }

      })


         await transport.sendMail({ 

            from : 'devridoy96@gmail.com',
            to : to, 
            subject : subject,
            text : text
          });
        
    } catch (error) {
        
        console.log(error);
    }

}