import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { GraphqlService } from './graphql/graphql.service';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      imports: [DatabaseModule],
      useClass: GraphqlService,
    }),
    DatabaseModule,
    GraphqlModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
