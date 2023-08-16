'use strict';
const https = require('https');
const uuid = require('uuid'); // Make sure to install the 'uuid' package if not already done
 
const { insertDataIntoDynamoDB } = require('./db-queries/member-queries/memberQueries');
const { handleSpecializationData } = require('./data-handlers/dataHandler');


module.exports.populateData = async (event) => {
  try {
    const urls = [
        'https://demo3211332.mockable.io/getMember',
        // 'https://example.com/api/data2',
        // Add more URLs as needed
    ];

    const allData = await fetchDataFromAPI(urls);
    await handleSpecializationData(allData[0]);
    await insertDataIntoDynamoDB(allData[0]);

    // Insert allData into DynamoDB or perform other actions

    return {
        statusCode: 200,
        body: JSON.stringify('Data inserted into DynamoDB'),
    };
} catch (error) {
    console.error('Error:', error);
    return {
        statusCode: 500,
        body: JSON.stringify('An error occurred'),
    };
}
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

function fetchDataFromAPI(urls) {
  return Promise.all(urls.map(fetchDataFromSingleURL));
}

function fetchDataFromSingleURL(url) {
  return new Promise((resolve, reject) => {
      https.get(url, (response) => {
          let data = '';

          response.on('data', (chunk) => {
              data += chunk;
          });

          response.on('end', () => {
            try {
              const jsonData = JSON.parse(data);
              const extractedData = processJsonData(jsonData);
              resolve(extractedData);
          } catch (error) {
            console.log('error', error)
              reject(error);
          }
          });

          response.on('error', (error) => {
              reject(error);
          });
      });
  });
}

function processJsonData(jsonData) {
  const extractedData = jsonData.map(entry => ({
      // id: uuid.v4(),
      nic: entry.nic,
      fullName: entry.fullName,
      currentWorkplace: entry.currentWorkplace,
      designation: entry.designation,
      specialization: entry.specialization,
      profileSummary: entry.profileSummary,
      contactDetails: entry.contactDetails,
      previousWorkplaces: entry.previousWorkplaces,
      professionalInstitutes: entry.professionalInstitutes,

  }));
  
  return extractedData;
}






