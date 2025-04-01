import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import { FighterModule } from './modules/fighter/fighter.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      playground: true,
    }),
    FighterModule,
  ],
})
export class AppModule {}
