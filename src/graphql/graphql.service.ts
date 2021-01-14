import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable, Inject } from '@nestjs/common';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { buildGraphbackAPI } from 'graphback';
import { createMongoDbProvider } from '@graphback/runtime-mongo';
import { Db } from 'mongodb';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) {}

  // MongoDB data provider creator function
  dataProviderCreator = createMongoDbProvider(this.db);

  // Import the data model
  userModel = readFileSync(
    resolve(__dirname, '..', '..', 'model', 'datamodel.graphql'),
    'utf8',
  );

  graphbackAPI = buildGraphbackAPI(this.userModel, {
    dataProviderCreator: this.dataProviderCreator,
  });

  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      typeDefs: this.graphbackAPI.typeDefs, // schema as a string
      resolvers: [this.graphbackAPI.resolvers],
      context: this.graphbackAPI.contextCreator,
    };
  }
}
