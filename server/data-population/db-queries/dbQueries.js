const { getCurrentDate } = require("../utils/dateUtils");
const { dynamodb } = require("../utils/dbUtils");

module.exports.savedb = async (tabelName, data) => {
      await dynamodb.put({
        TableName: tabelName,
        Item: data
      }, (err, data) => {
        if (err) {
            console.error("Error adding item:", err);
            return err;
        } else {
            console.log("Item added successfully to Member table");
            return data;
        }
  
      });
}



module.exports.getIdBySpecialization = async (tabelName, specializationValue) => {
  console.log('specializationValue', specializationValue)
  console.log('tabelName', tabelName)
    const params = {
      TableName: tabelName, // Replace with your table name
      IndexName: 'specialization-index',
      KeyConditionExpression: 'specialization = :val',
      ExpressionAttributeValues: {
        ':val': specializationValue
      },
      ProjectionExpression: 'id' // This will project only the 'id' attribute
    };
  
    try {
      const data = await dynamodb.query(params).promise();
      if (data.Items.length > 0) {
        return data.Items[0].id;
      } else {
        return null; // No matching items found
      }
    } catch (err) {
      console.error('Error querying DynamoDB:', err);
      throw err;
    }
  
}

module.exports.addBulkData = async(tableName, bulkData) => {
  const batchWriteParams = {
    RequestItems: {
      [tableName]: bulkData.map(item => ({
        PutRequest: {
          Item: {
            ...item,
            createdAt: getCurrentDate(),
            updatedAt: getCurrentDate()
          }
        }
      }))
    }
  };

  // const batchWriteParams = {
  //   RequestItems: {
  //     [tableName]: bulkData.map(item => ({
  //       PutRequest: {
  //         Item: item
  //       }
  //     })),
  //     'specialization-index': bulkData.map(item => ({
  //       PutRequest: {
  //         Item: {
  //           id: item.id, // Use the same id as the main table item
  //           specialization: item.specialization, // Use the attribute for GSI
  //           // ... other attributes for the GSI ...
  //         }
  //       }
  //     }))
  //   }
  // };
  console.log('batchWriteParams', batchWriteParams)

  try {
    await dynamodb.batchWrite(batchWriteParams).promise();
    console.log('All data added to DynamoDB');
  } catch (err) {
    console.error('Error adding bulk data to DynamoDB:', err);
  }

}