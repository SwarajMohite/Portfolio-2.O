const { response } = require("express");
const http =  require("http");
const nodemailer = require("nodemailer");

const server = http.createServer((request, response) => {
    const auth = nodemailer.createTransport ({
        service: "gmail",
        secure: true,
        port: 465,
        auth:{
            user: "thetechhspark@gmail.com",
            pass: " "
        }
});

    const receiver ={
        from: " ",
        to: " ",
        subject: "PortFolio Contact Us!",
        text: "Thanks for Contacting!... Author : Swaraj Mohite ... Reply this mail. Thanks :)"
    };

    auth.sendMail(receiver, (error, emailResponse) => {
        if(error)
            throw error;
        console.log("Success!!");
        response.end();

    });
});

server.listen(8080);