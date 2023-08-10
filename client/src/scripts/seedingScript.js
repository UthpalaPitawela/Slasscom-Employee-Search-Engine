const AWS = require('aws-sdk');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

// Configure AWS SDK
AWS.config.update({
  region: "us-east-1",
  accessKeyId: "AKIA6L42DEMGHAYPWN4M",
  secretAccessKey: "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"
});

const DynamoDB = new AWS.DynamoDB.DocumentClient();

// REST API endpoint URL
const restEndpoint = "https://demo3211332.mockable.io/getMember"

async function fetchDataFromRestAPI() {

  try {
    const response = await axios.get(restEndpoint, {
        // Add any headers or query parameters here
    });

    return response.data; // Assuming the response contains the data you need
  } catch (error) {
    console.error('Error fetching data from REST API:', error);
    throw error;
  }
}

async function seedDynamoDB(data) {
  const tableName = "Member-ynrdvamykba6xegc6vzup4icxi-dev"

  try {
    for (const item of data) {
      const params = {
        TableName: tableName,
        Item: {
            id: uuidv4(), // Generate a unique ID for each item
            nic: item?.nic?? '',
            fullName: item?.fullName??'',
            currentWorkplace: item?.currentWorkplace??'' ,
            designation: item?.designation??'' ,
            specialization: item?.specialization??[] ,
            profileSummary: item?.profileSummary??'',
            contactDetails: item?.contactDetails?? {},
            previousWorkplaces: item?.previousWorkplaces??[], 
            professionalInstitutes: item?.professionalInstitutes??[],
            createdAt: item?.createdAt??'',
            updatedAt: item?.updatedAt??''
        }
      };

      await DynamoDB.put(params).promise();
      console.log(`Item with ID ${params.Item.id} seeded.`);
    }
  } catch (error) {
    console.error('Error seeding DynamoDB:', error);
    throw error;
  }
}

async function main() {
  try {
    const restData = await fetchDataFromRestAPI();
    await seedDynamoDB(restData);
    console.log('Data seeding completed.');
  } catch (error) {
    console.error('Main error:', error);
  }
}

main();
