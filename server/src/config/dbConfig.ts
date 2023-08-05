const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;

export async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return client.db();
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    throw err;
  }
}

module.exports = { connectToDatabase };
