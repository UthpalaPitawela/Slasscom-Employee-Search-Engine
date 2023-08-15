const { dynamodb } = require("../utils/dbUtils");

module.exports.savedb = (tabelName, data) => {
      dynamodb.put({
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