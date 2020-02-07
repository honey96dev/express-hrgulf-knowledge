import nodemailer from 'nodemailer';
import emailTemplates from 'email-templates';
import {server, smtp} from 'core/config';
import tracer from "core/tracer";
import {sprintf} from 'sprintf-js';

const email = new emailTemplates({
  message: {
    from: {
      address: smtp.user,
      name: server.name,
    },
  },
  transport: {
    jsonTransport: true,
  }
});

export default {
  sendPasswordResetMail: ({email, token, subject}) => {
    return new Promise((resolve, reject) => {
      email.render('../email-templates/reset-password/html.pug', {})
        .then((html) => {
          let transporter = nodemailer.createTransport({
            // service: smtp.service,
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            auth: {
              user: smtp.user, //generated by Mailtrap
              pass: smtp.pass //generated by Mailtrap
            },
            tls: {
              rejectUnauthorized: false,
            }
          });

          const mailOptions = {
            from: sprintf("%s <%s>", name, smtp.user),
            to: email,
            subject: subject,
            html: html,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              reject(error);
            } else {
              resolve(info);
            }
          });
        })
        .catch(reject);
    });
  },

  sendContactUsMail: (params) => {
    return new Promise((resolve, reject) => {
      email.render('../email-templates/contact-us/html.pug', params)
        .then(html => {
      let transporter = nodemailer.createTransport({
        // service: smtp.service,
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        auth: {
          user: smtp.user, //generated by Mailtrap
          pass: smtp.pass //generated by Mailtrap
        },
        tls: {
          rejectUnauthorized: false,
        }
      });

      const mailOptions = {
        from: sprintf("%s <%s>", 'PM', smtp.user),
        to: smtp.user,
        subject: 'اتصل بن(Contact Us)',
        html,
      };

      tracer.info(mailOptions);

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          reject(error);
        } else {
          resolve(info);
        }
      });
          })
          .catch(reject);
    });
  },
  sendCourseJoinMail: async (to, name, subject) => {
    return new Promise((resolve, reject) => {
      email.render('../email-templates/course-join/html.pug', {})
        .then((html) => {
          let transporter = nodemailer.createTransport({
            // service: smtp.service,
            host: smtp.host,
            port: smtp.port,
            secure: smtp.secure,
            auth: {
              user: smtp.user, //generated by Mailtrap
              pass: smtp.pass //generated by Mailtrap
            },
            tls: {
              rejectUnauthorized: false,
            }
          });

          const mailOptions = {
            from: sprintf("%s <%s>", name, smtp.user),
            to: to,
            subject: subject,
            html: html,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if (error) {
              reject(error);
            } else {
              resolve(info);
            }
          });
        })
        .catch(reject);
    });
  }
};
