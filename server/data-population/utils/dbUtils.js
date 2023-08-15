const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIA6L42DEMGPRDJKEEO',
    secretAccessKey: 'CEteEGgjK8SrIsNlgh03h6J+s1dF8IPCxd73GRTJ',
    region: 'us-west-1', // e.g., us-east-1
  });
  
module.exports.dynamodb = new AWS.DynamoDB.DocumentClient();