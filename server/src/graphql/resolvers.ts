// src/graphql/resolvers.js
const { connectToDatabase } = require('../db');
const collectionName = 'member';
const resolvers = {
  Query: {
    searchMember: async (_, { input, page, pageSize }) => {
      try {
        const db = await connectToDatabase();
        // Assuming 'name' is the input parameter you want to search for
        const query = { name: input.name };
        const options = {
          skip: (page - 1) * pageSize,
          limit: pageSize,
        };

        // Get a reference to the 'member' collection
        const collection = db.collection(collectionName);

        // Execute the query and fetch the results
        const result = await collection.find(query, options).toArray();

        return {
          pageInfo: {
            currentPage: page,
            pageSize,
            totalItems: result.length, // Not efficient for large datasets, consider using another query to get total count
            // You can calculate the total pages based on the totalItems and pageSize if needed.
          },
          members: result,
        };
      } catch (err) {
        console.error('Error querying MongoDB:', err);
        throw err; // Throw the error to be handled at the GraphQL layer
      }
    },
  },
};

module.exports = { resolvers };
