import { MongoClient } from 'mongodb';

// Mongo Connection URL
const url = 'mongodb://localhost:27017';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () => {
      const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      // Get db instance
      const db = client.db('todo');

      return db;
    },
  },
];
