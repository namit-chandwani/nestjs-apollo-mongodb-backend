import { GqlModuleOptions, GqlOptionsFactory } from '@nestjs/graphql';
import { Injectable, Inject } from '@nestjs/common';
import { GraphbackAPI } from 'graphback';

@Injectable()
export class GraphqlService implements GqlOptionsFactory {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private databaseRepository: GraphbackAPI,
  ) {}

  createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
    return {
      typeDefs: this.databaseRepository.typeDefs, // schema as a string
      resolvers: [this.databaseRepository.resolvers],
      context: this.databaseRepository.contextCreator,
    };
  }
}
