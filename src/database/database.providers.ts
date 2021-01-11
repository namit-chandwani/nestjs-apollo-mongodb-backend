import { MongoClient } from 'mongodb';
import {
  createMongoDbProvider,
  MongoDBDataProvider,
} from '@graphback/runtime-mongo';
import { buildGraphbackAPI } from 'graphback';
import { readFileSync } from 'fs';
import { resolve } from 'path';

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

      // Create the MongoDB Data provider creator function
      const dataProviderCreator = createMongoDbProvider(db);

      // Import the data model
      const userModel = readFileSync(
        resolve(__dirname, '..', '..', 'model', 'datamodel.graphql'),
        'utf8',
      );

      return buildGraphbackAPI(userModel, {
        dataProviderCreator,
      });
    },
  },
];
