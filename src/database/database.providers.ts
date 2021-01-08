import { MongoClient } from 'mongodb';
import {
  createMongoDbProvider,
  MongoDBDataProvider,
} from '@graphback/runtime-mongo';
import { buildGraphbackAPI } from 'graphback';

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

      // The business model
      const userModel = `
     """ @model """
    type Note {
      _id: GraphbackObjectID!
      title: String!
      description: String
      """
      @oneToMany(field: 'note')
      """
      comments: [Comment]!
    }
    
    """ @model """
    type Comment {
      _id: GraphbackObjectID!
      text: String
      description: String
    }
    
    scalar GraphbackObjectID
    `;

      return buildGraphbackAPI(userModel, {
        dataProviderCreator,
      });
    },
  },
];
