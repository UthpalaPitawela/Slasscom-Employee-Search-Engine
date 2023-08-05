"use strict";

// module.exports.hello = async (event) => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "Go Serverless v1.0! Your function executed successfully!",
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

//   // Use this code if you don't use the http event with the LAMBDA-PROXY integration
//   // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };


import { ApolloServer } from 'apollo-server-lambda';
import  {typeDefs}  from './src/graphql/typeDefs'
import  { resolvers } from './src/graphql/typeDefs'
import  { connectToDatabase } from './src/config/dbConfig'; // Import connectToDatabase from db.js


export const getMembers = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async () => ({
      db: await connectToDatabase(),
    }),
  });
  server.createHandler()
}
