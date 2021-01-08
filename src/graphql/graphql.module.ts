import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { DatabaseModule } from './../database/database.module';

@Module({
  providers: [GraphqlService],
  imports: [DatabaseModule],
})
export class GraphqlModule {}
