const { MemberTable, SpecializationTable } = require("../constants/tableNames");
const { dynamodb } = require("../utils/dbUtils");

module.exports.checkMemberExist = async(nic) =>{
  try {
    const scanParams = {
      TableName: MemberTable,
      FilterExpression: 'nic = :valueToScan',
      ExpressionAttributeValues: {
        ':valueToScan': nic
      }
    };
    const data = await new Promise((resolve, reject) => {
      dynamodb.scan(scanParams, (err, data) => {
        if (err) {
          reject(err); // Reject the Promise in case of an error
        } else {
          resolve(data); // Resolve with scan result
        }
      });
    });

    if (data.Items.length > 0) {
      console.log('Member exists', data.Items);
      return { exists: true }; // Return object indicating member exists
    } else {
      console.log('No member exists.');
      return { exists: false }; // Return object indicating member doesn't exist
    }
  } catch (error) {
    console.error('An error occurred during scan:', error);
    return { exists: false, error: 'Scanning error' }; // Return object indicating scanning error
  }
}
module.exports.checkSpecializationExist = async(specializedItem) =>{
  try {
    const scanParams = {
      TableName: SpecializationTable,
      FilterExpression: 'specialization = :valueToScan',
      ExpressionAttributeValues: {
        ':valueToScan': specializedItem.specialization
      }
    };
    const data = await new Promise((resolve, reject) => {
      dynamodb.scan(scanParams, (err, data) => {
        if (err) {
          reject(err); // Reject the Promise in case of an error
        } else {
          resolve(data); // Resolve with scan result
        }
      });
    });
    console.log('data', data)

    if (data.Items.length > 0) {
      console.log('Specialization exists', data.Items);
      return { exists: true, savedSpecializationId: data.Items[0].id }; // Return object indicating member exists
    } else {
      console.log('No specialization exists.');
      return { exists: false }; // Return object indicating member doesn't exist
    }
  } catch (error) {
    console.error('An error occurred during scan:', error);
    return { exists: false, error: 'Scanning error' }; // Return object indicating scanning error
  }
}
