import http from "http";
import fs from "fs";
import EventEmitter from "events";
import nodemailer from "nodemailer";

class CustomEvent extends EventEmitter {
  mailSent(email) {
    this.emit("mailSent", email);
  }
}

const customEvent = new CustomEvent();

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let data = "";

    // Accumulate data from the request
    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      const { name, email, message } = JSON.parse(data);
      const queryString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

      // Append user query to "queries.txt"
      fs.appendFileSync("queries.txt", queryString, { encoding: "utf-8" });
      console.log("Query Save");
      console.log(`User name: ${name}`)

      // Nodemailer transporter configuration
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "codingninjas2k16@gmail.com",
          pass: "slwvvlczduktvhdj", 
        },
      });

      // Mail options
      const mailOptions = {
        from: "codingninjas2k16@gmail.com",
        to: email,
        subject: "Query received",
        text: "We have received your query and will get back to you soon.",
      };

      // Send confirmation email
      transporter.sendMail(mailOptions, (error) => {
        if (error) {
          console.log("Error sending email:", error);
          res.end("Failed to send confirmation email");
        } else {
          // Emit custom event on successful email
          customEvent.mailSent(email);
          res.end("Query received");
        }
      });
    });
  } else {
    res.end("Welcome to Coding Ninjas!");
  }
});

const Solution = () => {
  // Set up listener for 'mailSent' event
  customEvent.on("mailSent", (email) => {
    console.log("Custom event 'mailSent' emitted");
    console.log(`Confirming that the email has been sent successfully to ${email}`);
  });
};


export default server;
export { server, CustomEvent, Solution };
