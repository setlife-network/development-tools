// So many utility functions (https://lodash.com/docs)
var _ = require('lodash');
var aws = require('../handlers/aws');

var contactModule = module.exports = (function() {

    const sendEmail = function(params) {        
        return new Promise(function(resolve, reject) {
            aws.sendEmail(params)
            .then(function(params) {
                resolve(params);
            })
            .catch(reject);
        });
    };

    return {
        sendEmail: sendEmail,
    };
})();