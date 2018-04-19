var ses = require('node-ses');

var awsConfig = require('../config/settings').aws;

var client = ses.createClient({ key: awsConfig.accessKeyId, secret: awsConfig.secretAccessKey });

var aws = module.exports = (function() {

    //Basic Send Email, to and from cant be the same email

    return {
        sendEmail: (params) => {
            console.log('sendEmail');
            console.log(params);
            
            return new Promise((resolve, reject) => {
                client.sendEmail({
                    to: awsConfig.contactRecipient,
                    from: params.sender,
                    subject: params.subject,
                    message: params.message
                },
                (err, data, res) => {
                    if (err) reject(err);
                    else resolve(res);
                });
            });        
        }
    };
})();