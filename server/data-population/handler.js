"use strict";
const https = require("https");
const uuid = require("uuid"); // Make sure to install the 'uuid' package if not already done

const {
  insertDataIntoDynamoDB,
} = require("./db-queries/member-queries/memberQueries");
const { handleSpecializationData } = require("./data-handlers/dataHandler");

module.exports.populateData = async (event) => {
  try {
    const urls = [
      "https://demo3211332.mockable.io/99x/getMember",
      "https://demo3211332.mockable.io/wso2/getMember",
      "https://demo3211332.mockable.io/cakelabs/getMember",
      "https://demo3211332.mockable.io/mit/getMember",
    ];

    const allData = await fetchDataFromAPI(urls);
    for (const data of allData) {
      await handleSpecializationData(data);
      await insertDataIntoDynamoDB(data);
    }

    return {
      statusCode: 200,
      body: JSON.stringify("Data inserted into DynamoDB"),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify("An error occurred"),
    };
  }
};

function fetchDataFromAPI(urls) {
  return Promise.all(urls.map(fetchDataFromSingleURL));
}

function fetchDataFromSingleURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          const extractedData = processJsonData(jsonData);
          resolve(extractedData);
        } catch (error) {
          console.log("error", error);
          reject(error);
        }
      });

      response.on("error", (error) => {
        reject(error);
      });
    });
  });
}

function processJsonData(jsonData) {
  const extractedData = jsonData.map((entry) => ({
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
