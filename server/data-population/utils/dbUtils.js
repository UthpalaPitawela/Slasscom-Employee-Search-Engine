const AWS = require('aws-sdk');
require('dotenv').config();

AWS.config.update({
    accessKeyId: process.env.ACCESS_ID,
    secretAccessKey: process.env.SECRET_ACCESS_ID,
    region:process.env.REGION,
  });
  
module.exports.dynamodb = new AWS.DynamoDB.DocumentClient();